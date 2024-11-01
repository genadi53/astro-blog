import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tag: z.string().optional(),
  author: z.string().optional().default("Genadi Tsolov"),
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

export type BlogPost = z.infer<typeof blogSchema>;

const gallery = defineCollection({
  type: "data",
  schema: z.object({
    images: z.array(z.string()),
  }),
});

export const collections = { blog, gallery };
