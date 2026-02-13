#!/bin/bash

# Export script for GoDaddy static hosting
# Generates a ZIP file containing all static HTML/CSS/JS files

set -e

echo "🚀 GoDaddy Static Export Script"
echo "================================"
echo ""

# Preflight check - show current version
echo "📋 Preflight Check"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Current git branch:"
git branch --show-current || echo "Not on a branch"
echo ""
echo "Current commit:"
git log --oneline -1 || echo "No git history"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "⚠️  IMPORTANT: Verify you're building from the correct version!"
echo ""
echo "If you need to rollback to a specific version (e.g., version 88):"
echo "  1. git checkout draft-v88"
echo "  2. Verify with: git log --oneline -1"
echo "  3. Run this script again"
echo ""
read -p "Are you on the correct version? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Export cancelled. Please checkout the correct version first."
    exit 1
fi
echo ""

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/
rm -f shivarita-godaddy-export.zip

# Build the project
echo "🔨 Building project..."
npm run build

# Run smoke check
echo ""
echo "🔍 Running smoke check..."
if [ -f "scripts/smoke-check-static-build.sh" ]; then
    bash scripts/smoke-check-static-build.sh
    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Smoke check failed. Please fix issues before exporting."
        exit 1
    fi
else
    echo "⚠️  Smoke check script not found, skipping..."
fi

# Create ZIP file
echo ""
echo "📦 Creating ZIP file..."
cd dist
zip -r ../shivarita-godaddy-export.zip . -x "*.DS_Store" -x "__MACOSX/*"
cd ..

echo ""
echo "✅ Export complete!"
echo ""
echo "📦 File created: shivarita-godaddy-export.zip"
echo "📏 File size: $(du -h shivarita-godaddy-export.zip | cut -f1)"
echo ""
echo "Next steps:"
echo "1. Review FTP_UPLOAD_TO_GODADDY.md for upload instructions"
echo "2. Connect to GoDaddy FTP"
echo "3. Upload contents to public_html folder"
echo "4. Verify deployment at https://shivaritaglobal.com"
echo ""
echo "⚠️  Remember to update ROLLBACK_NOTES.md if this is a rollback deployment"
</bash>

