import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
    }),
    nitro({
      // Vercel and Netlify both auto-detect their own preset during their platform builds,
      // so leaving this undefined works for both out of the box. Set NITRO_PRESET=node-server
      // in your env if you ever need to self-host with `node .output/server/index.mjs`.
      preset: process.env.NITRO_PRESET,
    }),
    viteReact(),
  ],
});

