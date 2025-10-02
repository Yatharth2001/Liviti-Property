import { createServer } from "./server.js";
import { env } from "./env.js";
import { logger } from "./lib/logger.js";

const app = createServer();

app.listen(env.PORT, () => {
  logger.info(`🚀 API listening on http://localhost:${env.PORT}`);
  logger.info(`📊 Health check: http://localhost:${env.PORT}/health`);
  logger.info(`💡 Ideas API: http://localhost:${env.PORT}/ideas`);
});
