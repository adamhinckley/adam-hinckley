import { defineCollection, defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";

const articles = defineCollection({
  name: "Article",
  pattern: "articles/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      summary: s.string(),
      coverImage: s.string().optional(),
      slug: s.slug("articles").optional(),
      code: s.mdx(),
    })
    .transform((data, { meta }) => {
      const normalizedPath = meta.path.replace(/\\/g, "/");
      const inferredSlug = normalizedPath
        .replace(/^.*\/content\/articles\//, "")
        .replace(/^articles\//, "")
        .replace(/\.(md|mdx)$/, "");
      const slug = data.slug ?? inferredSlug;

      return {
        ...data,
        slug,
        url: `/articles/${slug}`,
      };
    }),
});

export default defineConfig({
  root: "content",
  collections: { articles },
  mdx: {
    gfm: true,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
          keepBackground: false,
        },
      ],
    ],
  },
});
