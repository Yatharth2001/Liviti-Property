# Idea Board – Monorepo

This repository contains the full-stack **Idea Board** application, including backend API, frontend web app, and Kubernetes/Docker deployment manifests.

## Project Structure

```
.
├── backend/         # Node.js/Express/Prisma API server
│   ├── src/         # TypeScript source code
│   ├── prisma/      # Prisma schema and migrations
│   ├── Dockerfile   # Docker build for backend
│   ├── package.json
│   └── ...
├── frontend/        # Next.js (React) frontend app
│   ├── app/         # App directory (Next.js 14+)
│   ├── Dockerfile   # Docker build for frontend
│   ├── package.json
│   └── ...
├── k8s/             # Kubernetes manifests for local/dev deployment
│   ├── backend.yaml
│   ├── frontend.yaml
│   ├── postgres.yaml
│   ├── ingress.yaml
│   └── ...
├── docker-compose.yml # Local development with Docker Compose
├── .gitignore
└── README.md         # (You are here)
```

## Getting Started

### Prerequisites

- [Node.js 20+](https://nodejs.org/)
- [Docker](https://www.docker.com/) (for containerized/local dev)
- [kubectl](https://kubernetes.io/docs/tasks/tools/) (for Kubernetes)

### Local Development (Docker Compose)

1. **Build and start all services:**
   ```bash
   docker-compose up --build
   ```
   - Backend: [http://localhost:4000](http://localhost:4000)
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Postgres: [localhost:5432](http://localhost:5432)

2. **Stop services:**
   ```bash
   docker-compose down
   ```

### Manual Development

See [backend/README.md](backend/README.md) and [frontend/README.md](frontend/README.md) for standalone setup instructions.

### Kubernetes (Dev/Local)

1. Apply manifests in order:
   ```bash
   kubectl apply -n ideaboard --create-namespace -f k8s/namespace.yaml
   kubectl apply -f k8s/postgres.yaml
   kubectl apply -f k8s/config.yaml
   kubectl apply -f k8s/backend.yaml
   kubectl apply -f k8s/frontend.yaml
   # Optional ingress (requires ingress controller)
   kubectl apply -f k8s/ingress.yaml
   ```

2. See [k8s/README.md](k8s/README.md) for details.

## Folder Overview

- **backend/** – REST API (Express, TypeScript, Prisma, PostgreSQL)
- **frontend/** – Next.js web app (React, Tailwind CSS)
- **k8s/** – Kubernetes manifests for all services
- **docker-compose.yml** – Compose file for local dev
- **.gitignore** – Ignore rules for all environments

## Environment Variables

- See `backend/env.example` and `frontend/.env` for required variables.

## License

MIT
