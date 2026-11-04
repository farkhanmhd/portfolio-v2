# Ghost buttons and borderless header receipt

Applied Karpathy for a scoped change and removal of now-unused divider animation; Ultracite for formatting/check/build; shadcn for built-in ghost variants; UI Taste/Antislop for the explicit borderless direction without added decoration; animation-performance for removing the unused divider animation; Design Auditor for source semantics, focus, consistency and responsive review; Playwright CLI for browser verification.

PASS: bun run check and bun run build. Browser at 1440×1000 and 390×844: both hero links have ghost variant and transparent borders; header ::after content is none; no horizontal overflow. Inspected both captures. Keyboard Tab reaches GitHub with focus-visible. Work navigation reaches /#work. Reduced-motion rendering verified. Existing HugeIcons, 44px targets, destinations and accessible labels retained. External apps and physical-device frame performance were not retested.

Scoped Antislop gate PASS: requested direction implemented; no new copy, claims, assets, dependencies, forms or asynchronous states; contrast tokens unchanged; existing native controls and focus styling retained; no new animation. Evidence: ghost-1440.png and ghost-390.png supersede earlier hero captures.
