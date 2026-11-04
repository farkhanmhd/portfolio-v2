# Project Skill Requirements

Apply every installed skill relevant to the current task when writing, reviewing, or changing code. Do not assume a skill was applied merely because it is installed or was read previously.

## Before editing code

- Inspect the current skill catalog in `.agents/skills/` and select skills by their actual scope. Include newly installed skills when relevant.
- Read the selected `SKILL.md` files and required supporting references before applying them. Instructions already read and available in the current context need not be reread.
- Briefly announce the selected skills and their purpose before implementation.
- Follow explicit user instructions when they conflict with skill guidance. Resolve routine overlaps without adding unnecessary approval steps or unrelated dependencies.

## Skill routing

| Task | Required relevant skills |
| --- | --- |
| Any code implementation, review, or refactor | `karpathy-guidelines`; `ultracite` for JS/TS and lint/format configuration; `antislop` according to its scope |
| UI design, implementation, or visual review | `ui-taste`, `antislop`; `design-auditor` for review of the affected UI |
| Design, accessibility, contrast, responsive layout, tokens, or usability audit | `design-auditor` |
| React component architecture and reusable APIs | `vercel-composition-patterns` |
| React animation with Motion | `framer-motion-react`, `animation-performance` |
| Other web animation or animation performance work | `animation-performance` |
| shadcn components or configuration | `shadcn` |
| Metadata, SEO, structured data, sitemaps, or discoverability | `react-seo-skills` |
| Browser interactions and verification of changed pages or flows | `playwright-cli` |

This table is a starting point, not an exhaustive catalog. Apply newly installed relevant skills too. Do not force unrelated skill workflows into a task or install libraries solely to claim skill usage.

## Project choices

- Always use Motion (`motion/react`) for application animations. Do not add or use GSAP, including when adapting third-party examples.

- Antislop mode is **during**, as explicitly chosen by the user for this project. Apply it during planning and implementation without asking the mode question again.
- Use React, Vite, TypeScript, Bun, TanStack Router, MDX, and Tailwind CSS. Use Tailwind utilities and the theme tokens in `src/index.css` for styling. Add shadcn components only as needed.
- Position Farkhan as a **full-stack developer**.
- The redesign uses a black background and animated typography with reduced-motion support.

## Verification and handoff

- Run the relevant skill checks and project checks for changed code. For JS/TS changes, run `bun run check` and `bun run build`; perform additional checks when the behavior changed requires them.
- Use `design-auditor` to review UI changes before handoff, scoped to the affected components and relevant audit categories. Distinguish source findings from browser-verified findings; report untested states explicitly. Do not expand a small change into an unrelated full-site audit.
- Verify visual and interaction changes in a browser at representative desktop and mobile sizes, including relevant keyboard and reduced-motion behavior. Scope verification to the change.
- If a required tool is unavailable, report the limitation and any fallback used. Do not claim that Playwright CLI ran when another browser tool performed the checks.
- End implementation tasks with a concise **skill receipt**: which skills were applied, what each influenced, and evidence such as changed file links, command results, or captures. Distinguish reading instructions, applying guidance, and completing verification.
- Report relevant skills or checks that could not be applied and why. Never claim every skill was used without supporting evidence.
- Treat skill adherence as a reviewable workflow requirement; passing lint alone does not prove design, accessibility, animation, or SEO guidance was followed.

---

# Ultracite Code Standards

This project uses **Ultracite**, a zero-config preset that enforces strict code quality standards through automated formatting and linting.

## Quick Reference

- **Format code**: `bunx ultracite fix`
- **Check for issues**: `bunx ultracite check`
- **Diagnose setup**: `bunx ultracite doctor`

Oxlint + Oxfmt (the underlying engine) provides robust linting and formatting. Most issues are automatically fixable.

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### React & JSX

- Use function components over class components
- Call hooks at the top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices)
- Nest children between opening and closing tags instead of passing as props
- Don't define components inside other components
- Use semantic HTML and ARIA attributes for accessibility:
  - Provide meaningful alt text for images
  - Use proper heading hierarchy
  - Add labels for form inputs
  - Include keyboard event handlers alongside mouse events
  - Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns
- Avoid import cycles; move shared code into a module both sides import

### Security

- Add `rel="noopener noreferrer"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`
- Validate and sanitize user input

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)
- Use proper image components (e.g., Next.js `<Image>`) over `<img>` tags

### Framework-Specific Guidance

**Next.js:**

- Use Next.js `<Image>` component for images
- Use `next/head` or App Router metadata API for head elements
- Use Server Components for async data fetching instead of async Client Components

**React 19+:**

- Use ref as a prop instead of `React.forwardRef`

**Solid/Svelte/Vue/Qwik:**

- Use `class` and `for` attributes (not `className` or `htmlFor`)

---

## Testing

- Write assertions inside `it()` or `test()` blocks
- Avoid done callbacks in async tests - use async/await instead
- Don't use `.only` or `.skip` in committed code
- Keep test suites reasonably flat - avoid excessive `describe` nesting

## When Oxlint + Oxfmt Can't Help

Oxlint + Oxfmt will catch most mechanical issues automatically. Focus your attention on:

1. **Business logic correctness** - Oxlint + Oxfmt can't validate your algorithms
2. **Meaningful naming** - Use descriptive names for functions, variables, and types
3. **Architecture decisions** - Component structure, data flow, and API design
4. **Edge cases** - Handle boundary conditions and error states
5. **User experience** - Accessibility, performance, and usability considerations
6. **Documentation** - Add comments for complex logic, but prefer self-documenting code

---

Most formatting and common issues are automatically fixed by Oxlint + Oxfmt. Run `bunx ultracite fix` before committing to ensure compliance.
