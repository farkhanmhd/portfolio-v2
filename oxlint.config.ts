import { defineConfig } from "oxlint";
import antiSlop from "ultracite/oxlint/anti-slop";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";
import shadcn from "ultracite/oxlint/shadcn";
import tanstack from "ultracite/oxlint/tanstack";

export default defineConfig({
  env: core.env,
  extends: [core, react, tanstack, shadcn, antiSlop],
  ignorePatterns: [
    ...core.ignorePatterns,
    ".agents/**",
    "dist/**",
    ".codex/**",
    ".gemini/**",
    ".zed/**",
  ],
  jsPlugins: shadcn.jsPlugins,
  options: { typeAware: true },
  plugins: ["react", "typescript", "oxc"],
  rules: {
    "react/rules-of-hooks": "error",
    "react/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
  },
});
