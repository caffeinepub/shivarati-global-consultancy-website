# Export GoDaddy ZIP Script (PowerShell)
# This script builds the static website and creates a ZIP file ready for FTP upload

Write-Host "🔨 Building static website..." -ForegroundColor Cyan
Set-Location (Split-Path $PSScriptRoot -Parent)

# Preflight check: Display current git reference if available
$gitAvailable = Get-Command git -ErrorAction SilentlyContinue
if ($gitAvailable) {
    try {
        $currentRef = git describe --tags --always 2>$null
        if (-not $currentRef) {
            $currentRef = git rev-parse --short HEAD 2>$null
        }
        if (-not $currentRef) {
            $currentRef = "unknown"
        }
        
        $currentBranch = git rev-parse --abbrev-ref HEAD 2>$null
        if (-not $currentBranch) {
            $currentBranch = "unknown"
        }
        
        Write-Host "📍 Building from: $currentBranch ($currentRef)" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "⚠️  ROLLBACK REMINDER:" -ForegroundColor Yellow
        Write-Host "   If rolling back to a specific version (e.g., version 89)," -ForegroundColor Yellow
        Write-Host "   ensure you have checked out that version BEFORE running this script." -ForegroundColor Yellow
        Write-Host "   Example: git checkout v89" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Press Enter to continue with build from current state..." -ForegroundColor Cyan
        Read-Host
        Write-Host ""
    } catch {
        # Git command failed, continue without version info
    }
}

# Always run a fresh build
npm run build:skip-bindings

Write-Host "📦 Creating GoDaddy export ZIP..." -ForegroundColor Cyan

# Remove old ZIP if it exists
if (Test-Path "godaddy-export.zip") {
    Remove-Item "godaddy-export.zip" -Force
    Write-Host "   Removed old godaddy-export.zip" -ForegroundColor Gray
}

# Create ZIP from dist contents (not the dist folder itself)
# PowerShell's Compress-Archive automatically excludes system files
Compress-Archive -Path "dist\*" -DestinationPath "godaddy-export.zip" -Force

Write-Host ""
Write-Host "✅ Export complete!" -ForegroundColor Green
Write-Host "📁 ZIP file location: frontend/godaddy-export.zip" -ForegroundColor Green
Write-Host "📦 Package contents: Static HTML/CSS/JavaScript files" -ForegroundColor Green
if ($currentRef) {
    Write-Host "🏷️  Built from: $currentBranch ($currentRef)" -ForegroundColor Green
}
Write-Host ""
Write-Host "📖 Next steps:" -ForegroundColor Yellow
Write-Host "   1. See FTP_UPLOAD_TO_GODADDY.md for upload instructions" -ForegroundColor Yellow
Write-Host "   2. Upload the contents of godaddy-export.zip to your GoDaddy web root" -ForegroundColor Yellow
Write-Host "   3. If this is a rollback, document it in ROLLBACK_NOTES.md" -ForegroundColor Yellow
Write-Host ""
