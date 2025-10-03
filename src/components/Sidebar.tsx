// src/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/nav';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside
      className="hidden lg:block fixed left-0 top-[var(--header-h)]
             h-[calc(100vh-var(--header-h))] w-[var(--sidebar-w)]
             border-r border-default bg-bg text-primary z-20" // keep sidebar lower
      aria-label="Primary"
    >
      <nav className="p-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={[
                'block rounded-md px-3 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(39,52,105,0.45)]',
                active
                  ? 'bg-conx-blue text-white'
                  : 'text-primary hover:bg-black/5 dark:hover:bg-white/10',
              ].join(' ')}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
