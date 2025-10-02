// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="container py-20 flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-conx-blue border-r-transparent"
          role="status"
          aria-label="Loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <p className="text-secondary">Loading...</p>
      </div>
    </div>
  );
}
