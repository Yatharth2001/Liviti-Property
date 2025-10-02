"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Idea } from "../_lib/types";
import { sortIdeas } from "../_lib/sort";
import { getIdeas, createIdea, upvoteIdea } from "../_lib/api";

export function useIdeas() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const refreshTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const refresh = useCallback(async () => {
    try {
      setError(null);
      const fetchedIdeas = await getIdeas();
      setIdeas(fetchedIdeas.sort(sortIdeas));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch ideas");
    } finally {
      setLoading(false);
    }
  }, []);

  const create = useCallback(async (text: string) => {
    try {
      setError(null);
      const newIdea = await createIdea(text);
      setIdeas(prev => [...prev, newIdea].sort(sortIdeas));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create idea");
      throw err;
    }
  }, []);

  const upvote = useCallback(async (id: number) => {
    // Optimistic update
    setIdeas(prev => 
      prev.map(idea => 
        idea.id === id 
          ? { ...idea, upvotes: idea.upvotes + 1 }
          : idea
      ).sort(sortIdeas)
    );

    try {
      const updatedIdea = await upvoteIdea(id);
      // Reconcile with server response
      setIdeas(prev => 
        prev.map(idea => 
          idea.id === id ? updatedIdea : idea
        ).sort(sortIdeas)
      );
    } catch (err) {
      // Revert optimistic update on error
      setIdeas(prev => 
        prev.map(idea => 
          idea.id === id 
            ? { ...idea, upvotes: idea.upvotes - 1 }
            : idea
        ).sort(sortIdeas)
      );
      setError(err instanceof Error ? err.message : "Failed to upvote idea");
      throw err;
    }
  }, []);

  // Debounced refresh after actions
  const debouncedRefresh = useCallback(() => {
    if (refreshTimeoutRef.current) {
      clearTimeout(refreshTimeoutRef.current);
    }
    refreshTimeoutRef.current = setTimeout(refresh, 1000);
  }, [refresh]);

  // Polling effect
  useEffect(() => {
    refresh();

    pollingRef.current = setInterval(refresh, 8000);

    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
      if (refreshTimeoutRef.current) {
        clearTimeout(refreshTimeoutRef.current);
      }
    };
  }, [refresh]);

  return {
    ideas,
    loading,
    error,
    refresh,
    create,
    upvote,
  };
}

