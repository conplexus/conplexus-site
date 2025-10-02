// src/app/not-found.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-6xl sm:text-7xl font-bold text-primary">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
          Page Not Found
        </h2>
        <p className="text-lg text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-conx-blue text-white rounded-md hover:bg-conx-blue/90 transition font-medium"
          >
            Go to Homepage
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-conx-blue text-conx-blue rounded-md hover:bg-conx-blue/5 transition font-medium"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
