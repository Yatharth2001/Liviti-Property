#!/bin/sh
set -e

# Retry helper
retry() {
  command="$1"
  attempts=${2:-30}
  delay=${3:-2}
  i=1
  while [ $i -le $attempts ]; do
    echo "Attempt $i/$attempts: $command"
    if sh -c "$command"; then
      return 0
    fi
    echo "Command failed, retrying in ${delay}s..."
    sleep "$delay"
    i=$((i+1))
  done
  echo "Command failed after ${attempts} attempts"
  return 1
}

if [ -n "$DATABASE_URL" ]; then
  echo "Running Prisma migrate deploy with retry..."
  retry "npx prisma migrate deploy" 30 2
fi

exec "$@"


