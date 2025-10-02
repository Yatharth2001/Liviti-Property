import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { CreateIdeaBody } from "../lib/validators.js";
import { AppError, createErrorResponse, createValidationErrorResponse } from "../lib/errors.js";
import { logger } from "../lib/logger.js";

const router = Router();

// GET /ideas - Get all ideas sorted by upvotes DESC, then createdAt DESC
router.get("/", async (_req, res, next) => {
  try {
    const ideas = await prisma.idea.findMany({
      orderBy: [{ upvotes: "desc" }, { createdAt: "desc" }]
    });
    
    // Convert dates to ISO strings for JSON serialization
    const response = ideas.map(idea => ({
      ...idea,
      createdAt: idea.createdAt.toISOString(),
      updatedAt: idea.updatedAt.toISOString()
    }));
    
    return res.json(response);
  } catch (error) {
    logger.error("Error fetching ideas:", error);
    return next(error);
  }
});

// POST /ideas - Create a new idea
router.post("/", async (req, res, next) => {
  try {
    const data = CreateIdeaBody.parse(req.body);
    const idea = await prisma.idea.create({ 
      data: { text: data.text } 
    });
    
    // Convert dates to ISO strings for JSON serialization
    const response = {
      ...idea,
      createdAt: idea.createdAt.toISOString(),
      updatedAt: idea.updatedAt.toISOString()
    };
    
    return res.status(201).json(response);
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      const zodError = error as any;
      const message = zodError.errors?.[0]?.message || "Validation error";
      return res.status(400).json(createValidationErrorResponse(message));
    }
    logger.error("Error creating idea:", error);
    return next(error);
  }
});

// POST /ideas/:id/upvote - Upvote an idea
router.post("/:id/upvote", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    
    if (!Number.isFinite(id) || id <= 0) {
      return res.status(400).json(createValidationErrorResponse("Invalid id"));
    }
    
    const idea = await prisma.idea.update({
      where: { id },
      data: { upvotes: { increment: 1 } }
    });
    
    // Convert dates to ISO strings for JSON serialization
    const response = {
      ...idea,
      createdAt: idea.createdAt.toISOString(),
      updatedAt: idea.updatedAt.toISOString()
    };
    
    return res.json(response);
  } catch (error: any) {
    if (error?.code === "P2025") {
      return res.status(404).json(createErrorResponse(new AppError("Idea not found", 404, "NOT_FOUND")));
    }
    logger.error("Error upvoting idea:", error);
    return next(error);
  }
});

export default router;
