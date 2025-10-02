# Kubernetes Manifests (Basic)

These manifests are for local/dev demonstration only. They deploy Postgres, the backend API, and the frontend Next.js server, plus an optional Ingress.

Apply in order:

```bash
kubectl apply -n ideaboard --create-namespace -f k8s/namespace.yaml
kubectl apply -f k8s/postgres.yaml
kubectl apply -f k8s/backend.yaml
kubectl apply -f k8s/frontend.yaml
# Optional ingress (requires an ingress controller, e.g., NGINX)
kubectl apply -f k8s/ingress.yaml
```

Access:
- Backend: ClusterIP `backend` on port 4000, or via Ingress `/api` if configured
- Frontend: Ingress root `/` or `NodePort` if you modify the service type
