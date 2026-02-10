import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "articles/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    coverImage: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^articles\//, ""),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/articles/${doc._raw.flattenedPath.replace(/^articles\//, "")}`,
    },
  },
}));

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode as any, rehypePrettyCodeOptions]],
  },
});
