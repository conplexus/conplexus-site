// src/app/not-found.tsx
import type { Metadata } from "next";
import Button from "@/components/Button";

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
          <Button href="/" variant="primary">
            Go to Homepage
          </Button>
          <Button href="/about" variant="outline">
            Learn About Us
          </Button>
        </div>
      </div>
    </div>
  );
}
