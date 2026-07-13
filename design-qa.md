# Design QA

## Evidence

- Source visual truth:
  - `/var/folders/t7/l8xmkzrj59zff3s5y6nm2g140000gn/T/codex-clipboard-92abeef3-f74c-4e76-aa7e-2a5838cc5ec0.png`
  - `/var/folders/t7/l8xmkzrj59zff3s5y6nm2g140000gn/T/codex-clipboard-2e7113d7-f20b-4cc5-a9a1-903aa43113e0.png`
- Implementation screenshots:
  - `/tmp/xkcomponent-menu-default-final.png`
  - `/tmp/xkcomponent-menu-expanded-final.png`
  - `/tmp/xkcomponent-menu-mobile-default.png`
  - `/tmp/xkcomponent-menu-mobile-expanded.png`
- Combined comparison evidence:
  - `/tmp/xkcomponent-default-compare.png`
  - `/tmp/xkcomponent-expanded-compare.png`
- Desktop viewport: `1428 × 790`
- Mobile viewport: `390 × 844`
- States: default, first item expanded, mobile default, mobile first item expanded

## Full-view comparison

- The implementation preserves the reference composition: a light gray viewport gutter, a full-height image menu, vertical labels, and an expanded track near 70% with three collapsed tracks near 10% each.
- Desktop measured widths in the expanded state were `972 / 139 / 139 / 139` pixels. Default tracks were four equal `347` pixel columns.
- Mobile reflows into four horizontal tracks. The expanded state measured `469 / 117 / 117 / 117` pixels without viewport overflow.

## Fidelity surfaces

- Fonts and typography: condensed uppercase display text, widely tracked metadata, and a compact sans-serif body preserve the source hierarchy. Exact source fonts were unavailable, so the implementation uses Impact/Arial Narrow and system sans fallbacks.
- Spacing and layout rhythm: viewport gutter, full-height frame, one-pixel separators, rail labels, and active-content placement match the reference's density and proportions.
- Colors and visual tokens: neutral gray outer canvas, white type, dark image overlays, and low-opacity metadata maintain the source contrast pattern.
- Image quality and asset fidelity: all four user-provided source images render directly with `object-fit: cover`; no placeholder or recreated image assets remain.
- Copy and content: menu copy is adapted to the four supplied Warhammer images while retaining the reference's eyebrow, headline, description, and facts hierarchy.

## Focused-region comparison

A separate crop comparison was not needed because the full-view evidence renders all visible labels, headline text, separators, and image crops at readable size.

## Findings and comparison history

### Pass 1

- P2: the focused expanded panel could stack above the global header and hide the left icon and centered brand.
- Fix: raised the global header layer above focus-visible menu tracks.

### Pass 2

- Post-fix evidence shows the icon, brand, active content, vertical labels, and collapsed tracks together in the expanded screenshot.
- No remaining P0, P1, or P2 visual findings.

## Interaction and runtime checks

- Four semantic buttons render with accessible names and `aria-expanded` state.
- Click/focus expansion and pointer-leave reset use the same active-index state as hover.
- The browser automation surface did not emit a hover event from synthetic mouse movement, so the expanded visual state was verified through the click path.
- No Vite error overlay, page overflow, console warnings, or console errors remained after the final reload.
- `prefers-reduced-motion` disables transitions.

## Follow-up polish

- P3: replace the fallback display face if a specific licensed condensed typeface is selected later.

## Motion iteration

- Current change: removed the global header and replaced CSS grid transitions with Motion spring animations for panel growth, imagery, overlays, and copy sequencing.
- The implementation now hides the rail copy immediately, lets the panel complete the main part of its spring transition, and then reveals the detail copy.
- Build, lint, `git diff --check`, and the local HTTP response passed.
- The screenshots and comparisons above predate the Motion iteration. The in-app browser rejected the current localhost capture because of its URL security policy, so they are retained only as historical comparison evidence and are not claimed as verification of the current build.

### Blocker

- A current browser-rendered implementation screenshot and console inspection could not be captured after the Motion change.
- Refresh `http://localhost:5173/` in the already-open local preview to review the current animation.

final result: blocked
