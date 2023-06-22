import { z, defineCollection, reference } from "astro:content"

export const collections = {
  // "blogs": defineCollection({
  //   type: "content",
  //   schema: z.object({
  //     title: z.string(),
  //     folder: reference("folders")
  //   })
  // }),
  "folders": defineCollection({
    type: "data",
    schema: z.object({
      description: z.string()
    })
  })
}