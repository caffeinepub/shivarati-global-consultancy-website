# Specification

## Summary
**Goal:** Make the global site header automatically hide on downward scroll and reveal when the user hovers near the top of the viewport (and behave appropriately on mobile/touch).

**Planned changes:**
- Update the existing global header component to track scroll position and scroll direction, hiding the header when scrolling down past a small threshold and showing it when scrolling up.
- Add a thin “top-edge hover reveal” zone so that moving the pointer to the very top of the viewport reveals the header while the pointer remains in that area (or while hovering the header).
- Ensure the header is always visible when the page is at the very top (scrollY === 0).
- Apply smooth transitions for hide/reveal without causing content layout shift/jumps.
- Ensure touch/mobile behavior works without hover (reveal on scroll up, hide on scroll down).
- Keep the header visible whenever the mobile navigation menu/sheet is open, and resume auto-hide only after it closes.

**User-visible outcome:** As users scroll down, the header slides out of view to maximize content space; it becomes accessible again by hovering at the top edge on desktop or by scrolling up on mobile, without disrupting page layout.
