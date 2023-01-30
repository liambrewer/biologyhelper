import { z, defineCollection } from 'astro:content';

const helpersCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  helpers: helpersCollection,
};
