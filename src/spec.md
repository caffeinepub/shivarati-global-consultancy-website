# Specification

## Summary
**Goal:** Replace the Digital Nomad Visa comparison chart image on the Product Offerings page with the newly uploaded chart, without changing layout or other country images.

**Planned changes:**
- Add the newly uploaded comparison chart image to `frontend/public/assets/`.
- Update the Digital Nomad Visa section on the Product Offerings page to reference the new comparison chart image via the `<img>` `src` (only changing the filename/path if it differs from the current `"/assets/Comparison of Digital Nomad Visas.png"`).
- Keep the existing centered, 65% width container styling so the image remains constrained and responsive on mobile and desktop.

**User-visible outcome:** On Product Offerings → Professionals → Digital Nomad Visa, users see the updated comparison chart image, while all other Digital Nomad Visa images (Portugal/Spain/Malta/Hungary/Italy) remain unchanged.
