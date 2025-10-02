import { Idea } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL environment variable is required");
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData.message || `HTTP ${response.status}: ${response.statusText}`;
    throw new Error(message);
  }
  return response.json();
}

export async function getIdeas(): Promise<Idea[]> {
  const response = await fetch(`${API_URL}/ideas`, {
    cache: "no-store",
  });
  return handleResponse<Idea[]>(response);
}

export async function createIdea(text: string): Promise<Idea> {
  if (!text.trim()) {
    throw new Error("Text is required");
  }
  if (text.length > 280) {
    throw new Error("Max 280 characters");
  }

  const response = await fetch(`${API_URL}/ideas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  return handleResponse<Idea>(response);
}

export async function upvoteIdea(id: number): Promise<Idea> {
  const response = await fetch(`${API_URL}/ideas/${id}/upvote`, {
    method: "POST",
  });
  return handleResponse<Idea>(response);
}

