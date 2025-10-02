// src/components/DarkModeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  // On mount: read persisted pref or system setting
  useEffect(() => {
    const persisted = localStorage.getItem("theme");
    if (persisted === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
      return;
    }
    if (persisted === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
      return;
    }
    // fall back to system
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  // When user toggles, persist and update html class
  useEffect(() => {
    if (dark === null) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  if (dark === null) return null; // avoid hydration flash

  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="rounded-md border border-conx-yellow px-3 py-2 text-sm font-medium text-conx-yellow hover:bg-conx-yellow/10 transition focus:outline-none focus:ring-2 focus:ring-conx-yellow focus:ring-offset-2"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      title={dark ? "Light mode" : "Dark mode"}
    >
      <span aria-hidden="true">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
