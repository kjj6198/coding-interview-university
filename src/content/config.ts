import { z, defineCollection } from "astro:content";

const guideCollection = defineCollection({
  type: "content",
  schema: z.object({}),
});

export const collections = {
  guide: guideCollection,
};
