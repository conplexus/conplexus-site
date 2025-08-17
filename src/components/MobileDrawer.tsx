// src/components/MobileDrawer.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden rounded-md border border-conx-green px-3 py-2 text-sm font-medium text-conx-green hover:bg-conx-green/10 transition"
      >
        Menu
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={[
          "fixed z-50 top-0 left-0 h-full w-72 border-r border-default",
          "bg-bg text-primary",
          "transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        style={{ paddingTop: "var(--header-h)" }}
      >
        <nav className="p-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "block rounded-md px-3 py-2 transition",
                  active
                    ? "bg-conx-blue text-white"
                    : "hover:bg-black/5 dark:hover:bg-white/10",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 rounded-md border border-default px-2 py-1 text-xs text-secondary hover:opacity-80"
          aria-label="Close menu"
        >
          Close
        </button>
      </div>
    </>
  );
}
