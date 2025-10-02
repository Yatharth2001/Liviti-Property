"use client";

export default function ErrorState({ 
  error, 
  onRetry 
}: { 
  error: string; 
  onRetry: () => void; 
}) {
  return (
    <div className="rounded-xl border-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100 p-6 shadow-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-600 text-xl">⚠️</span>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-red-800">Oops! Something went wrong</h3>
          <p className="mt-2 text-sm text-red-700">{error}</p>
          <div className="mt-4">
            <button
              onClick={onRetry}
              className="rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span className="flex items-center gap-2">
                <span>🔄</span>
                Try Again
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

