#!/bin/bash

# Smoke check script for static build validation
# Verifies that all required pages exist and basic structure is correct

set -e

echo "🔍 Starting smoke check for static build..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Error: dist/ folder not found${NC}"
    echo "Please run 'npm run build' first"
    exit 1
fi

echo "✅ dist/ folder exists"

# Required HTML files
required_files=(
    "index.html"
    "about.html"
    "product-offerings.html"
    "gdpr.html"
    "why-choose-us.html"
    "contact.html"
    "disclaimer.html"
    "404.html"
)

# Check each required file
missing_files=0
for file in "${required_files[@]}"; do
    if [ -f "dist/$file" ]; then
        echo -e "${GREEN}✅${NC} $file exists"
    else
        echo -e "${RED}❌${NC} $file is missing"
        missing_files=$((missing_files + 1))
    fi
done

echo ""

# Check for assets folder
if [ -d "dist/assets" ]; then
    echo -e "${GREEN}✅${NC} assets/ folder exists"
    asset_count=$(find dist/assets -type f | wc -l)
    echo "   Found $asset_count asset files"
else
    echo -e "${RED}❌${NC} assets/ folder is missing"
    missing_files=$((missing_files + 1))
fi

echo ""

# Check for JavaScript bundles
js_files=$(find dist/assets -name "*.js" 2>/dev/null | wc -l)
if [ "$js_files" -gt 0 ]; then
    echo -e "${GREEN}✅${NC} Found $js_files JavaScript bundle(s)"
else
    echo -e "${RED}❌${NC} No JavaScript bundles found"
    missing_files=$((missing_files + 1))
fi

# Check for CSS files
css_files=$(find dist/assets -name "*.css" 2>/dev/null | wc -l)
if [ "$css_files" -gt 0 ]; then
    echo -e "${GREEN}✅${NC} Found $css_files CSS file(s)"
else
    echo -e "${YELLOW}⚠️${NC}  No CSS files found (may be inlined)"
fi

echo ""

# Verify HTML files contain expected content
echo "🔍 Checking HTML file content..."

for file in "${required_files[@]}"; do
    if [ -f "dist/$file" ]; then
        # Check for root div
        if grep -q 'id="root"' "dist/$file"; then
            echo -e "${GREEN}✅${NC} $file contains root div"
        else
            echo -e "${RED}❌${NC} $file missing root div"
            missing_files=$((missing_files + 1))
        fi
        
        # Check for script tag
        if grep -q '<script' "dist/$file"; then
            echo -e "${GREEN}✅${NC} $file contains script tag"
        else
            echo -e "${RED}❌${NC} $file missing script tag"
            missing_files=$((missing_files + 1))
        fi
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Final result
if [ $missing_files -eq 0 ]; then
    echo -e "${GREEN}✅ Smoke check PASSED${NC}"
    echo "All required files are present and valid"
    exit 0
else
    echo -e "${RED}❌ Smoke check FAILED${NC}"
    echo "Found $missing_files issue(s)"
    echo ""
    echo "Please fix the issues and rebuild"
    exit 1
fi
</bash>

