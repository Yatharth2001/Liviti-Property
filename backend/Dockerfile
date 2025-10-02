# syntax=docker/dockerfile:1.7

# ---- Base builder image ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install OS deps for Prisma if needed
RUN apk add --no-cache openssl

# Copy package files and install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Generate Prisma client and build TS
RUN npx prisma generate
RUN npm run build

# ---- Runtime image ----
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache openssl

# Copy only necessary files
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy built artifacts and Prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Health and port
EXPOSE 4000

# Entrypoint handles prisma migrate deploy then start
COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Default command
CMD ["node", "dist/index.js"]


