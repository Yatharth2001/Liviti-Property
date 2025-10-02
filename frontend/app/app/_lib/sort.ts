import { Idea } from "./types";

export function sortIdeas(a: Idea, b: Idea) {
  if (b.upvotes !== a.upvotes) return b.upvotes - a.upvotes;
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

