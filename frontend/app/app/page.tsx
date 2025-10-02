"use client";

import { useIdeas } from "./_hooks/useIdeas";
import IdeaForm from "./_components/IdeaForm";
import IdeaList from "./_components/IdeaList";
import EmptyState from "./_components/EmptyState";
import ErrorState from "./_components/ErrorState";
import LoadingSkeleton from "./_components/LoadingSkeleton";

export default function AppPage() {
  const { ideas, loading, error, refresh, create, upvote } = useIdeas();

  if (!process.env.NEXT_PUBLIC_API_URL) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="text-lg font-semibold text-red-800 mb-2">Configuration Error</h2>
          <p className="text-red-700">
            Please set the NEXT_PUBLIC_API_URL environment variable to your backend URL (e.g., http://localhost:4000)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-50/30">
      <div className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4 animate-in fade-in-0 slide-in-from-top-4 duration-700">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl">💡</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Idea Board
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-700 delay-200">
            Share your brilliant ideas, collaborate with others, and upvote the best ones. 
            Let's build something amazing together! ✨
          </p>
        </div>

        {/* Form Section */}
        <div className="mb-12">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border-2 border-brand-200 bg-white p-8 shadow-lg">
              <IdeaForm onCreate={create} loading={loading} />
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8">
            <ErrorState error={error} onRetry={refresh} />
          </div>
        )}

        {/* Content Section */}
        <div className="space-y-8">
          {loading && ideas.length === 0 ? (
            <LoadingSkeleton />
          ) : ideas.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  All Ideas ({ideas.length})
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>🔄</span>
                  <span>Auto-refreshing every 8s</span>
                </div>
              </div>
              <IdeaList ideas={ideas} onUpvote={upvote} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

