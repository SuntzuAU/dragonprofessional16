import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    metaDescription: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
    context: z.string().optional(),
    heroImage: z.string().optional().default(''),
    heroImageAlt: z.string().optional().default(''),
    breakImage1: z.string().optional().default(''),
    breakImage1Alt: z.string().optional().default(''),
    breakImage2: z.string().optional().default(''),
    breakImage2Alt: z.string().optional().default(''),
    imagesPending: z.boolean().optional().default(false),
    section1Title: z.string().optional(),
    section2Title: z.string().optional(),
    section3Title: z.string().optional(),
    internalLinks: z.array(z.object({ to: z.string(), anchor: z.string() })).optional(),
    externalLinks: z.array(z.object({ to: z.string(), anchor: z.string(), url: z.string() })).optional(),
  }),
});

export const collections = { news };
