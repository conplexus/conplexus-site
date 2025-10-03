'use client';

import { useEffect, useState } from 'react';
import { enableAnalytics, disableAnalytics } from '@/lib/analytics';

const CONSENT_KEY = 'conplexus_analytics_consent';

export default function ConsentBanner() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'granted') setConsent(true);
    else if (stored === 'denied') setConsent(false);
    else setConsent(null);
  }, []);

  useEffect(() => {
    if (consent === true) enableAnalytics();
    if (consent === false) disableAnalytics();
  }, [consent]);

  function grant() {
    localStorage.setItem(CONSENT_KEY, 'granted');
    setConsent(true);
  }

  function deny() {
    localStorage.setItem(CONSENT_KEY, 'denied');
    setConsent(false);
  }

  if (consent !== null) return null; // already decided

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xl bg-card border border-default p-4 rounded-lg text-card shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="text-sm text-card">
          We use anonymous analytics to improve the site. You can opt in to help us understand usage
          — no personal data is collected.
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-md bg-conx-blue text-white text-sm" onClick={grant}>
            Accept
          </button>
          <button className="px-3 py-1 rounded-md border border-default text-sm" onClick={deny}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
