// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--astro-font-inter",
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Sora",
      cssVariable: "--astro-font-sora",
      fallbacks: ["sans-serif"],
    },
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
