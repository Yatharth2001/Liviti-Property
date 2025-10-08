import express from "express";
import cors from "cors";
import ideas from "./routes/ideas.js";
import health from "./routes/health.js";
import { env } from "./env.js";
import { AppError, createErrorResponse } from "./lib/errors.js";
import { logger } from "./lib/logger.js";

export function createServer(): express.Application {
  const app = express();

  // CORS configuration
  app.use(cors({ 
    origin: true,
    credentials: true 
  }));

  // Body parsing middleware
  app.use(express.json());

  // Request logging
  app.use((req, _res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
  });

  // Routes
  app.use("/health", health);
  app.use("/ideas", ideas);

  // 404 handler
  app.use((_req, res) => {
    return res.status(404).json(createErrorResponse(new AppError("Route not found", 404, "NOT_FOUND")));
  });

  // Centralized error handler
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    logger.error("Unhandled error:", err);
    
    if (err instanceof AppError) {
      return res.status(err.status).json(createErrorResponse(err));
    }
    
    const status = err.status ?? 500;
    const message = err.message ?? "Internal Server Error";
    return res.status(status).json(createErrorResponse(new AppError(message, status, "INTERNAL_ERROR")));
  });

  return app;
}
