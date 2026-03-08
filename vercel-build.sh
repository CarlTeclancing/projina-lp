#!/bin/bash
set -e

echo "================================"
echo "Starting Vercel Build Process"
echo "================================"

# Verify Node version
echo "Node version: $(node -v)"
echo "npm version: $(npm -v)"

# Install dependencies
echo "Installing dependencies..."
npm install --production=false

# Build the project
echo "Building project..."
npm run build

# Verify dist folder exists
if [ ! -d "dist" ]; then
  echo "ERROR: dist folder not created after build!"
  exit 1
fi

# Verify index.html exists in dist
if [ ! -f "dist/index.html" ]; then
  echo "ERROR: dist/index.html not found!"
  exit 1
fi

echo "================================"
echo "Build completed successfully!"
echo "================================"
echo "Dist folder contents:"
ls -la dist/
