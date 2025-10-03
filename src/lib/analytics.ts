let enabled = false;
const GA_ID =
  typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string | undefined)
    : undefined;

function injectGAScript(id: string) {
  if (document.querySelector(`script[data-ga4]`)) return;
  const script = document.createElement('script');
  script.setAttribute('data-ga4', id);
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  const inline = document.createElement('script');
  inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}', { send_page_view: false });`;
  document.head.appendChild(inline);
}

export function enableAnalytics() {
  if (enabled) return;
  enabled = true;
  if (typeof window === 'undefined') return;
  if (!GA_ID) {
    console.warn('GA measurement id not set (NEXT_PUBLIC_GA_MEASUREMENT_ID)');
    return;
  }

  // Unset the GA disable flag if present
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window[`ga-disable-${GA_ID}`] = false;

  injectGAScript(GA_ID);
  console.info('GA4 enabled', GA_ID);

  // Send an initial page_view once gtag becomes available (best-effort).
  // We configured gtag with send_page_view: false so we control when a page_view is emitted.
  const start = Date.now();
  const trySend = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window.gtag === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.gtag('event', 'page_view');
      console.info('GA4 page_view sent');
      return;
    }

    if (Date.now() - start < 1000) {
      // Keep trying for up to 1 second
      setTimeout(trySend, 100);
    } else {
      console.info('GA4 page_view: gtag not available after wait');
    }
  };

  trySend();
}

export function disableAnalytics() {
  if (!enabled && typeof window === 'undefined') return;
  enabled = false;
  if (typeof window === 'undefined') return;
  if (!GA_ID) return;

  // Set global disable flag per GA recommendation
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window[`ga-disable-${GA_ID}`] = true;

  // Attempt to remove GA cookies (_ga, _gid, _ga_<container>)
  try {
    document.cookie = '_ga=; Max-Age=0; path=/;';
    document.cookie = '_gid=; Max-Age=0; path=/;';
    // Remove other ga cookies
    const matches = document.cookie.match(/_ga_[^=]+/g) || [];
    matches.forEach((c) => {
      document.cookie = `${c}=; Max-Age=0; path=/;`;
    });
    // Remove Segment / analytics.js cookies (ajs_*) if present
    const ajsMatches = document.cookie.match(/ajs_[^=]+/g) || [];
    ajsMatches.forEach((c) => {
      document.cookie = `${c}=; Max-Age=0; path=/;`;
    });
    // Also attempt to specifically remove the common anonymous id cookie
    document.cookie = 'ajs_anonymous_id=; Max-Age=0; path=/;';
    // Best-effort: try deleting cookies with different domain/path permutations
    const cookieNames = Array.from(
      new Set(
        document.cookie
          .split('; ')
          .map((c) => c.split('=')[0])
          .filter(Boolean)
      )
    );
    const hostname = location.hostname;
    const domains = [hostname, `.${hostname}`];
    const paths = ['/', '/.'];
    cookieNames.forEach((name) => {
      domains.forEach((d) => {
        paths.forEach((p) => {
          try {
            document.cookie = `${name}=; Max-Age=0; domain=${d}; path=${p};`;
          } catch {
            // ignore
          }
        });
      });
      // also attempt without domain
      try {
        document.cookie = `${name}=; Max-Age=0; path=/;`;
      } catch {
        // ignore
      }
    });
  } catch {
    // ignore: best-effort cookie removal
  }

  console.info('GA4 disabled');
}

export function sendEvent(name: string, payload?: Record<string, unknown>) {
  if (!enabled) return;
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (typeof window.gtag === 'function') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.gtag('event', name, payload || {});
  } else {
    console.info('Analytics event (stub)', name, payload || {});
  }
}
