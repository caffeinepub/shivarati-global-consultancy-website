# Custom Domain Integration Guide

This guide explains how to configure a custom domain for your Internet Computer (IC) canister deployment.

## Important Note

**This guide is for IC canister deployments only.** If you're deploying to GoDaddy or another traditional web host via FTP, you don't need this configuration. Instead, see:

- [GO_DADDY_EXPORT.md](./GO_DADDY_EXPORT.md) - Generate static HTML/CSS/JS export
- [FTP_UPLOAD_TO_GODADDY.md](./FTP_UPLOAD_TO_GODADDY.md) - Upload to GoDaddy hosting

For GoDaddy hosting, your domain is configured directly in your GoDaddy account's DNS settings, and the website files are uploaded as a static HTML/CSS/JavaScript package (not Java).

---

## For IC Canister Deployments

If you're deploying to the Internet Computer and want to use a custom domain (e.g., `shivaritaglobal.com`), follow these steps:

### 1. DNS Configuration

Add CNAME records in your domain registrar's DNS settings:

**For apex domain (shivaritaglobal.com):**
- Type: `CNAME`
- Host/Name: `@`
- Target/Value: `icp0.io`
- TTL: `3600` (or automatic)

**For www subdomain (www.shivaritaglobal.com):**
- Type: `CNAME`
- Host/Name: `www`
- Target/Value: `icp0.io`
- TTL: `3600` (or automatic)

### 2. IC-Domains Configuration

The `.well-known/ic-domains` file is already configured with both domains:

