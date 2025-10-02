"use client";

import { Idea } from "../_lib/types";
import UpvoteButton from "./UpvoteButton";

export default function IdeaCard({
  idea,
  onUpvote,
}: {
  idea: Idea;
  onUpvote(id: number): Promise<void>;
}) {
  const handleUpvote = async () => {
    await onUpvote(idea.id);
  };

  // Generate a subtle color based on idea ID for variety
  const colorVariants = [
    'border-blue-200 hover:border-blue-400',
    'border-green-200 hover:border-green-400', 
    'border-purple-200 hover:border-purple-400',
    'border-orange-200 hover:border-orange-400',
    'border-pink-200 hover:border-pink-400',
    'border-indigo-200 hover:border-indigo-400'
  ];
  const colorClass = colorVariants[idea.id % colorVariants.length];

  return (
    <div className={`group relative min-h-[250px] rounded-xl border-2 ${colorClass} bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
      <div className="flex h-full flex-col">
        <div className="flex-1">
          <p className="text-gray-900 text-sm leading-relaxed break-words">
            {idea.text}
          </p>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            {new Date(idea.createdAt).toLocaleString()}
          </p>
          <UpvoteButton
            count={idea.upvotes}
            onClick={handleUpvote}
          />
        </div>
      </div>
      
      {/* Colorful gradient overlay on hover */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-transparent transition-opacity duration-300 group-hover:from-${colorClass.split('-')[1]}-50/20 group-hover:to-${colorClass.split('-')[1]}-100/10 pointer-events-none`} />
    </div>
  );
}

