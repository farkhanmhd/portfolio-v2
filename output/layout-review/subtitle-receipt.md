# Headline/subtitle receipt

Karpathy kept the edit to headline line content, a phone typography token, and the subtitle. Ultracite: fix, check and production build passed. UI Taste/Antislop: existing display hierarchy preserved, explicit user direction applied, factual existing copy reused. Shadcn: text-muted-foreground used for subtitle. Motion guidance: existing transform/opacity entrance and reduced-motion override retained with two lines. Design Auditor: source reviewed semantic headline and muted color token; browser inspected desktop and narrow-phone captures for line integrity and subtitle placement. Playwright CLI measured zero horizontal overflow at 1440, 800, 390 and 320 widths with reduced motion enabled. Buttons and destinations unchanged; external apps and physical-device performance not retested.

Scoped gate PASS: infrastructure remains unbroken; subtitle uses muted foreground and wraps normally; no overflow in four measured widths; centered dvh container retained; no invented claims, assets, controls or asynchronous states introduced. Existing keyboard semantics, contrast palette and native links retained. At 320px, existing header navigation is crowded; header redesign is outside this change.

Evidence: subtitle-1440.png, subtitle-800.png, subtitle-390.png, subtitle-320.png. These supersede earlier hero captures.
