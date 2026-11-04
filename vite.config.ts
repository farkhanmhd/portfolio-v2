import { fileURLToPath, URL } from "node:url";

import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("src", import.meta.url)) } },
  plugins: [
    tailwindcss(),
    { enforce: "pre", ...mdx() },
    react({ include: /\.[jt]sx?$/u }),
  ],
});
