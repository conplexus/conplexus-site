// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-conx-blue shadow-sm border-b border-white/10"
      style={{ height: 'var(--header-h)' }}
    >
      <nav className="container h-full flex items-center justify-between px-4 md:px-6">
        {/* Left: Mobile menu + Logo */}
        <div className="flex items-center gap-4 md:gap-6">
          <MobileDrawer />
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo/conplexus-primary.png"
              alt="Conplexus"
              width={200}
              height={64}
              priority
              className="h-10 w-auto sm:h-12 md:h-14"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
