import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createEslintPlugin } from "vite-plugin-eslint";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    open: true,
    cors: true,
  },
  plugins: [
    react(),
    createEslintPlugin({
      failOnError: true,
    }),
  ],
  base: "/",
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  optimizeDeps: {
    esbuildOptions: {
      jsxInject: `import React from 'react'`,
    },
  },
});
