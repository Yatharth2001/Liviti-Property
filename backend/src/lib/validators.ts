import { z } from "zod";

export const CreateIdeaBody = z.object({
  text: z.string().min(1, "Text is required").max(280, "Max 280 characters")
});

export type CreateIdeaInput = z.infer<typeof CreateIdeaBody>;
