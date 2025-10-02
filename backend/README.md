# Idea Board Backend API

A REST API for the Idea Board app built with Node.js, TypeScript, Express, Prisma, and PostgreSQL.

## Features

- **GET /ideas** - Get all ideas sorted by upvotes (DESC) then creation date (DESC)
- **POST /ideas** - Create a new idea (max 280 characters)
- **POST /ideas/:id/upvote** - Upvote an idea
- **GET /health** - Health check endpoint

## Tech Stack

- **Runtime**: Node.js 20+
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation**: Zod
- **CORS**: Enabled for frontend integration

## Quick Start

### Prerequisites

- Node.js 20 or higher
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone and navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your database credentials:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ideaboard?schema=public"
   PORT=4000
   CORS_ORIGIN=http://localhost:3000
   ```

4. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:4000`

## API Endpoints

### Health Check
```bash
GET /health
```
Returns: `{ "status": "ok" }`

### Get All Ideas
```bash
GET /ideas
```
Returns an array of ideas sorted by upvotes (DESC) then creation date (DESC):
```json
[
  {
    "id": 1,
    "text": "First idea",
    "upvotes": 2,
    "createdAt": "2025-01-02T10:00:00.000Z",
    "updatedAt": "2025-01-02T10:05:00.000Z"
  }
]
```

### Create Idea
```bash
POST /ideas
Content-Type: application/json

{
  "text": "Ship dark mode"
}
```
Returns the created idea with 201 status code.

**Validation:**
- `text` is required
- `text` must be 1-280 characters
- Returns 400 for validation errors

### Upvote Idea
```bash
POST /ideas/1/upvote
```
Returns the updated idea with incremented upvotes.

**Errors:**
- 400 if ID is not numeric
- 404 if idea not found

## Error Responses

All errors follow this format:
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

Common error codes:
- `BAD_REQUEST` - Validation errors
- `NOT_FOUND` - Resource not found
- `INTERNAL_ERROR` - Server errors

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:deploy` - Deploy migrations to production
- `npm run seed` - Seed the database with sample data

### Database Schema

```prisma
model Idea {
  id        Int      @id @default(autoincrement())
  text      String   @db.VarChar(280)
  upvotes   Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Set production environment variables
3. Run database migrations:
   ```bash
   npm run prisma:deploy
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Docker Support (Future)

This backend is ready for Dockerization. The structure supports:
- Multi-stage builds
- Environment variable injection
- Health checks
- Graceful shutdowns

## CORS Configuration

The API is configured to accept requests from `http://localhost:3000` by default. Update the `CORS_ORIGIN` environment variable for different origins.

## License

MIT
