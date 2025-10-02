"use client";

import { Idea } from "../_lib/types";
import IdeaCard from "./IdeaCard";

export default function IdeaList({
  ideas,
  onUpvote,
}: {
  ideas: Idea[];
  onUpvote(id: number): Promise<void>;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {ideas.map((idea, index) => (
        <div
          key={idea.id}
          className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'both'
          }}
        >
          <IdeaCard
            idea={idea}
            onUpvote={onUpvote}
          />
        </div>
      ))}
    </div>
  );
}

