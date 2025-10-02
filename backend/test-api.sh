#!/bin/bash

# Test script for Idea Board API
BASE_URL="http://localhost:4000"

echo "🧪 Testing Idea Board API..."
echo ""

# Test health endpoint
echo "1. Testing health endpoint..."
curl -s "$BASE_URL/health" | jq .
echo ""

# Test getting ideas (should be empty initially)
echo "2. Testing GET /ideas (should be empty initially)..."
curl -s "$BASE_URL/ideas" | jq .
echo ""

# Test creating an idea
echo "3. Testing POST /ideas (create idea)..."
IDEA_RESPONSE=$(curl -s -X POST "$BASE_URL/ideas" \
  -H "Content-Type: application/json" \
  -d '{"text": "Test idea from API test"}' | jq .)
echo "$IDEA_RESPONSE"
IDEA_ID=$(echo "$IDEA_RESPONSE" | jq -r '.id')
echo ""

# Test getting ideas again
echo "4. Testing GET /ideas (should show the created idea)..."
curl -s "$BASE_URL/ideas" | jq .
echo ""

# Test upvoting the idea
echo "5. Testing POST /ideas/$IDEA_ID/upvote..."
curl -s -X POST "$BASE_URL/ideas/$IDEA_ID/upvote" | jq .
echo ""

# Test getting ideas again (should show upvoted idea)
echo "6. Testing GET /ideas (should show upvoted idea)..."
curl -s "$BASE_URL/ideas" | jq .
echo ""

# Test validation errors
echo "7. Testing validation errors..."
echo "Empty text:"
curl -s -X POST "$BASE_URL/ideas" \
  -H "Content-Type: application/json" \
  -d '{"text": ""}' | jq .
echo ""

echo "Text too long:"
curl -s -X POST "$BASE_URL/ideas" \
  -H "Content-Type: application/json" \
  -d "{\"text\": \"$(printf 'a%.0s' {1..281})\"}" | jq .
echo ""

echo "Invalid ID for upvote:"
curl -s -X POST "$BASE_URL/ideas/invalid/upvote" | jq .
echo ""

echo "Non-existent ID for upvote:"
curl -s -X POST "$BASE_URL/ideas/99999/upvote" | jq .
echo ""

echo "✅ API testing complete!"
