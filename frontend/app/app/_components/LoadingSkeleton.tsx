export default function LoadingSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="min-h-[250px] rounded-xl border-2 border-gray-200 bg-white p-6 animate-pulse"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="h-3 bg-gray-200 rounded w-24"></div>
              <div className="h-8 bg-gray-200 rounded-xl w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
