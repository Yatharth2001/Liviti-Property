"use client";

export default function UpvoteButton({
  count,
  onClick,
  disabled = false,
}: {
  count: number;
  onClick(): Promise<void>;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group/upvote inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-brand-600 hover:to-brand-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      aria-label={`Upvote idea (${count} upvotes)`}
    >
      <span className="text-lg transition-transform duration-200 group-hover/upvote:scale-110">▲</span>
      <span className="font-bold">{count}</span>
    </button>
  );
}

