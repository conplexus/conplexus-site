'use client';
import { useEffect, useRef } from 'react';

export default function DevCookieInspector() {
  const prevCookies = useRef<string>('');
  useEffect(() => {
    try {
      prevCookies.current = document.cookie;
    } catch {
      prevCookies.current = '';
    }

    const log = (msg: string, data?: unknown) => {
      // Prefix so it's easy to find in console
      console.debug('[DevCookieInspector]', msg, data ?? '');
    };

    // Watch for cookie changes by polling
    const pollInterval = 500;
    let stopped = false;
    const poll = () => {
      if (stopped) return;
      let current = '';
      try {
        current = document.cookie;
      } catch {
        current = '';
      }
      if (current !== prevCookies.current) {
        const before = prevCookies.current;
        prevCookies.current = current;
        // compute differences
        const beforeNames = before ? before.split('; ').map((c) => c.split('=')[0]) : [];
        const afterNames = current ? current.split('; ').map((c) => c.split('=')[0]) : [];
        const added = afterNames.filter((n) => !beforeNames.includes(n));
        const removed = beforeNames.filter((n) => !afterNames.includes(n));
        // capture recent performance resources to help find the source of any new cookie
        let recentResources: Array<{ name: string; initiatorType: string; startTime: number }> = [];
        try {
          const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
          recentResources = entries
            .filter((e) => typeof e.name === 'string' && e.name.startsWith('http'))
            .slice(-30)
            .map((e) => ({
              name: e.name,
              initiatorType: e.initiatorType || 'unknown',
              startTime: Math.round(e.startTime),
            }));
        } catch {
          recentResources = [];
        }

        log('Cookies changed', { added, removed, raw: current, recentResources });
      }
      setTimeout(poll, pollInterval);
    };
    poll();

    // MutationObserver to detect added script tags
    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const m of mutations) {
        for (const node of Array.from(m.addedNodes)) {
          if (node && node.nodeType === 1 && (node as HTMLElement).tagName === 'SCRIPT') {
            const s = node as HTMLScriptElement;
            if (s.src) log('Script added', { src: s.src, async: s.async, type: s.type });
            else log('Inline script added', { type: s.type });
          }
        }
      }
    });
    observer.observe(document.documentElement || document, { childList: true, subtree: true });

    // After load, list performance resources to help spot remote scripts
    const onLoad = () => {
      try {
        const entries = performance.getEntriesByType('resource') || [];
        const external = entries
          .filter(
            (e): e is PerformanceResourceTiming =>
              typeof (e as PerformanceResourceTiming).name === 'string' &&
              (e as PerformanceResourceTiming).name.startsWith('http')
          )
          .map((e) => ({
            name: (e as PerformanceResourceTiming).name,
            initiatorType: (e as PerformanceResourceTiming).initiatorType || 'unknown',
          }));
        log('Performance resources', external.slice(-50));
      } catch (e) {
        log('Performance resource listing failed', e);
      }
    };
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });

    return () => {
      stopped = true;
      observer.disconnect();
      window.removeEventListener('load', onLoad as EventListener);
    };
  }, []);

  // Only render or run the diagnostics in development
  if (process.env.NODE_ENV !== 'development') return null;
  return null;
}
