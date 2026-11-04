import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // Installed skills and tool-owned settings are not application source.
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    ".agents/**",
    ".codex/**",
    ".gemini/**",
    ".zed/**",
    "dist/**",
    "skills-lock.json",
  ],
});
