# Specification

## Summary
**Goal:** Add required Internet Computer custom domain asset files for shivaritaglobal.com in the frontend source.

**Planned changes:**
- Add `frontend/src/.well-known/ic-domains` (no extension) containing exactly `"shivaritaglobal.com"`.
- Add `frontend/src/ic-assets.json` containing exactly `[{\"match\":.well-known\",\"ignore\":false}]`.

**User-visible outcome:** The frontend includes the required `.well-known` domain asset files to support connecting the custom domain `shivaritaglobal.com`.
