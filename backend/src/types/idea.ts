export interface Idea {
  id: number;
  text: string;
  upvotes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateIdeaRequest {
  text: string;
}

export interface IdeaResponse {
  id: number;
  text: string;
  upvotes: number;
  createdAt: string;
  updatedAt: string;
}
