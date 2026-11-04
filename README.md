# Farkhan portfolio

Local foundation for the portfolio redesign. Uses Bun, React, Vite, TypeScript, TanStack Router (code-based routes), MDX, and Tailwind CSS v4.

## Commands

- `bun install` — install dependencies using `bun.lock`
- `bun dev` — start local development
- `bun run typecheck` — check TypeScript
- `bun run lint` — lint source
- `bun run build` — type-check and build production assets
- `bun run preview` — preview the production build

## Styling

Tailwind uses the official Vite plugin. Theme tokens, shared layout utilities, and entrance keyframes live in `src/index.css`; component layout and responsive styles use Tailwind utilities.

## Content

Project metadata lives in `src/content/projects.ts`; case studies live in `src/content/projects/*.mdx`. Only trusted, repository-authored MDX should be compiled: MDX can execute React/JavaScript.

Routes: `/`, `/projects/$slug`, and a not-found fallback. `uas-menyapa` is sample content, not a completed case study.

## Next milestone

The responsive header and hero are implemented with Motion text reveals and reduced-motion support. Review the hero before expanding project presentations. shadcn is initialized with Radix/Nova. Components live in `src/components/ui`, with the `@/` import alias and semantic tokens in `src/index.css`. Only the starter Button is installed; the hero retains native links.

## Hosting and SEO

This foundation is a client-rendered SPA. Hosting must serve `index.html` for application paths so project URLs survive refresh. Prerendering and per-project metadata/social previews remain a later setup milestone; they are not implemented yet. No deployment is configured.
