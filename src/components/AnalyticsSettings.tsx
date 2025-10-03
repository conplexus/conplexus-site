'use client';

import { useEffect, useState } from 'react';
import { enableAnalytics, disableAnalytics } from '@/lib/analytics';

const CONSENT_KEY = 'conplexus_analytics_consent';

export default function AnalyticsSettings() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'granted') setConsent(true);
    else if (stored === 'denied') setConsent(false);
    else setConsent(null);
  }, []);

  function grant() {
    localStorage.setItem(CONSENT_KEY, 'granted');
    setConsent(true);
    enableAnalytics();
  }

  function revoke() {
    localStorage.setItem(CONSENT_KEY, 'denied');
    setConsent(false);
    disableAnalytics();
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs opacity-80">Analytics:</span>
      {consent ? (
        <button className="text-xs underline" onClick={revoke}>
          Turn off
        </button>
      ) : (
        <button className="text-xs underline" onClick={grant}>
          Turn on
        </button>
      )}
    </div>
  );
}
