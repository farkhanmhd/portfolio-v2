# Centered hero skill receipt

Karpathy: scoped changes to hero layout, its parent spacing and a theme token. Ultracite/shadcn: sizing uses the hero-panel theme token; check and build pass. UI Taste/Antislop: explicit user direction replaces earlier project-in-opening-view preference; existing type, color and identity preserved. Design Auditor: inspected desktop and mobile captures; measured hero height as viewport minus fixed header, center error below 0.01px, zero horizontal overflow at 1440, 390 and 320 widths. Playwright CLI: captured all three sizes with reduced motion enabled. Existing transform/opacity animation and accessibility markup retained; no animation implementation changes.

Gate PASS: affected layout follows requested direction; no clipping or overflow in measured widths; native controls and focus styles unchanged; reduced motion respected. Content/claims/assets/links unchanged. No forms, new asynchronous states or external services introduced. Contrast and typography tokens unchanged. Existing gate items unrelated to this spacing-only revision retain their source findings; external destinations and physical-device performance remain unverified.

Evidence: centered-evidence.json and centered-1440.png, centered-390.png, centered-320.png. Prior receipt and captures describe the previous revision, not this one.
