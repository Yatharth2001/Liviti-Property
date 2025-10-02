export type Idea = {
  id: number;
  text: string;        // <= 280
  upvotes: number;
  createdAt: string;   // ISO-8601
  updatedAt?: string;
};

