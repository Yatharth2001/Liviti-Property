export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-8 shadow-lg">
        <span className="text-6xl">💡</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">No ideas yet</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">Be the first to share an idea! Add your thoughts below and watch the community grow.</p>
      <div className="inline-flex items-center gap-2 text-sm text-brand-600 font-medium">
        <span>✨</span>
        <span>Start the conversation</span>
      </div>
    </div>
  );
}

