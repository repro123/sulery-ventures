import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    priSpan: z.string(),
    secSpan: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { services };
