"use client";

import { useState } from "react";

export default function IdeaForm({
  onCreate,
  loading = false,
}: {
  onCreate(text: string): Promise<void>;
  loading?: boolean;
}) {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || text.length > 280 || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onCreate(text);
      setText("");
    } catch (error) {
      // Error is handled by the parent component
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValid = text.trim().length > 0 && text.length <= 280;
  const isOverLimit = text.length > 280;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="idea-text" className="block text-sm font-medium text-gray-700 mb-2">
          Share your idea
        </label>
        <textarea
          id="idea-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's your idea? (max 280 characters)"
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm shadow-sm transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-300"
          rows={3}
          disabled={isSubmitting}
          aria-invalid={isOverLimit}
          aria-describedby="char-count"
        />
        <div className="mt-2 flex items-center justify-between">
          <div
            id="char-count"
            className={`text-sm ${isOverLimit ? "text-red-600" : "text-gray-500"}`}
            aria-live="polite"
          >
            {text.length}/280 characters
          </div>
          {isOverLimit && (
            <span className="text-sm text-red-600">
              {text.length - 280} characters over limit
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-brand-600 hover:to-brand-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 sm:w-auto"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            Submitting...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span>💡</span>
            Submit Idea
          </span>
        )}
      </button>
    </form>
  );
}

