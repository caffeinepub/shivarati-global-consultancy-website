# Specification

## Summary
**Goal:** Rebuild and redeploy the app by rolling back the full codebase (frontend + backend) to draft version 88 so the deployed site matches version 88 exactly.

**Planned changes:**
- Roll back the frontend and backend code to draft version 88 with no mixed-version behavior.
- Re-run the build and deployment process to complete successfully end-to-end after the prior AI service error.
- Perform post-deploy smoke checks to confirm all core pages load and basic navigation works without runtime errors.

**User-visible outcome:** The deployed draft matches version 88 across the entire app, and users can load and navigate between Home, About, Product Offerings, GDPR, Why Choose Us, Contact, and Disclaimer without blank screens or runtime errors.
