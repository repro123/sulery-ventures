import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const subservice = z.object({
  heading: z.string(),
  paragraphs: z.array(z.string()).default([]),
  items: z.array(z.string()).default([]),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    priSpan: z.string(),
    secSpan: z.string(),
    order: z.number().default(0),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
    intro: z.array(z.string()),
    introHeading: z.string(),
    subserviceHeading: z.string(),
    subservices: z.array(subservice).default([]),
  }),
});

export const collections = { services };
