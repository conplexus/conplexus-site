// src/app/error.tsx
"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error caught by boundary:", error);
  }, [error]);

  return (
    <div className="container py-20 flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary">
          Something went wrong
        </h1>
        <p className="text-lg text-secondary">
          We apologize for the inconvenience. An error occurred while loading
          this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button onClick={reset} variant="primary">
            Try Again
          </Button>
          <Button href="/" variant="outline">
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
