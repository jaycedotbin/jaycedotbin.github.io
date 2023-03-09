import { z, defineCollection, image } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    topics: z.array(z.string()),
    cover: image(),
    draft: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
