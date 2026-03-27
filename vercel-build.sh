#!/bin/bash
set -e

echo "================================"
echo "Starting Vercel Build Process"
echo "================================"
echo "
"

# Verify Node version
echo "✓ Node version: $(node -v)"
echo "✓ npm version: $(npm -v)"
echo "
"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false
echo "✓ Dependencies installed"
echo "
"

# Build the project
echo "🔨 Building project..."
npm run build
echo "✓ Build completed"
echo "
"

# Verify dist folder exists
if [ ! -d "dist" ]; then
  echo "❌ ERROR: dist folder not created after build!"
  exit 1
fi

# Verify index.html exists in dist
if [ ! -f "dist/index.html" ]; then
  echo "[ERROR] dist/index.html not found!"
  exit 1
fi

# Show build summary
echo "================================"
echo "[SUCCESS] Build Process Successful!"
echo "================================"
echo "
"
echo "[INFO] Dist folder structure:"
du -sh dist/
echo "
"
echo "📄 Main files:"
ls -lh dist/ | grep -E "\.(html|js|css)$" || true
echo "
"
echo "✓ Ready for deployment!"