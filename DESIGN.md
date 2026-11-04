# Portfolio direction

## Intro sequence

The owner requests the header islands and hero content to start invisible. Motion reveals the islands first, then the two-line headline with a one-time sequential decryption adapted from React Bits, then the subtitle and actions. Glyph cells reserve the real letters' widths, and temporary glyphs are fitted within them. The full headline remains available to assistive technology. Reduced motion bypasses the intro and scrambling; keyboard focus immediately reveals entrance containers. No new dependencies are needed.

## Animation standard

The owner requires Motion (`motion/react`) for animations. The staggered menu now uses declarative Motion variants for layered transforms and staggered opacity/transform entrances. GSAP is removed. Reduced-motion users receive the settled menu immediately.

## Staggered panel revision

The latest owner request replaces hover-revealed inline menus with a click/tap trigger for a React Bits StaggeredMenu adaptation. Both black island faces are 34px tall with balanced padding and 44px interactive targets. The right-side modal uses the existing background, charcoal surface tokens, Manrope navigation headings, JetBrains Mono controls, and blue hover accent. GSAP animates only transforms and opacity, with no spatial animation under reduced motion. Radix Dialog supplies focus trapping, Escape, outside dismissal and focus return. Existing Work, Résumé, contact and GitHub destinations are retained. This supersedes the earlier hover-expansion behavior.

## Split island revision

Navigation now has two separate black capsules spaced across the header: the home wordmark on the left and menus on the right. Both retain 44px minimum targets without outer vertical padding. On desktop the right capsule reveals links on hover or focus; touch devices show links directly. The monochrome hero remains unchanged.

## Minimalist island navigation revision

The island now uses `bg-black`. On devices with a fine pointer and hover support it shows only the wordmark until hover or keyboard focus reveals the links. Touch devices retain visible links. A short, bounded width/opacity transition is confined to the fixed island; reduced motion removes it.

The owner requested removal of LightRays and a single-color hero. The hero uses off-white for both headline lines with its existing reduced-motion-aware entrance. Navigation sits in a compact, centered floating capsule inspired by iOS Dynamic Island, with persistent visible links, a solid charcoal surface, and no backdrop blur. The capsule adapts to phone widths without hiding destinations. No LightRays packages were installed; its standalone component and pause control are removed.

Farkhan Muhammad is a full-stack developer. The November 2026 layout revision replaces the full-viewport hero and small project list with an asymmetric profile rail and a wider introduction/work column. The owner explicitly requested a structural redesign.

## Composition

Desktop: a roughly quarter-width identity rail with name, role, description and contact links; the wider right column carries a three-line headline and a large project feature. Selected work begins within the opening desktop view. The vertical divider separates persistent identity from work. On tablets the profile becomes a compact two-column introduction; phones stack the profile, headline and project in reading order. Navigation retains the existing destinations.

Black #080808, off-white #efefeb and blue #78a9ff remain the owner-approved palette. Manrope carries display text and JetBrains Mono retains the requested body/navigation identity. Theme tokens in src/index.css define responsive type sizes. The charcoal project surface groups the single project's description, verified capabilities and notes link; it does not impersonate a product screenshot. Case-study incompleteness stays explicit.

ENERGY 2/5, RHYTHM 4/5, MOTION 2/5. The headline enters in three short transform/opacity steps, settled by 940 ms. Reduced motion shows all text immediately. Profile and project controls are available immediately. No looping motion or per-frame React state.

## Reference and evidence

The generated layout reference is saved with local verification artifacts. It supplies the two-column proportions and project placement; implementation preserves real content and accessibility. No exact pixel-match claim is made. Reference imagery is a development artifact and is not shipped in the UI.

The page retains its existing full-height shadcn ScrollArea and fixed header, with TanStack Router scroll restoration. Native links handle contact, résumé and GitHub. UAS Menyapa capabilities come from its existing MDX overview; detailed case-study content remains in progress. No new dependencies or fabricated project screenshots are introduced.

## Centered viewport hero revision

The owner requested a dvh-height hero with centered text. The hero now uses a minimum height of `calc(100dvh - var(--header-height))`, with both axes centered and enough padding to grow on short screens or enlarged text. The desktop profile rail remains beside it; on phones the profile precedes the hero. Selected work follows the viewport-height hero rather than sharing its opening view. This explicit revision supersedes the earlier opening-view project placement.

## Simplified hero revision

The owner requested only the hero text, Contact and GitHub buttons. The profile rail is removed. The hero now spans the full content width, with its headline and two existing-destination links centered together within the viewport-height panel. Existing shadcn secondary/outline buttons provide the actions with minimum 44px targets. Selected work remains below the hero. This supersedes the profile-rail composition above.

## Headline and subtitle refinement

The headline now reads on two unbroken lines: “From interface” and “to infrastructure.” Phone display sizing is reduced through its theme token to keep the second line intact. The muted subtitle reuses factual existing copy: “I build web applications from end to end.” It sits between the headline and action buttons. The centered viewport-height grouping is retained.

## Ghost actions and borderless header

The owner requested ghost hero buttons and borderless header navigation. Contact and GitHub now use the existing ghost variant; HugeIcons, visible labels and destinations remain. The header divider and its unused drawing keyframes are removed. The remaining header entrance is unchanged.
