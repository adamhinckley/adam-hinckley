# Adam Hinckley's Personal Site

A Next.js personal website with an articles section using MDX, built with TypeScript, Tailwind CSS,
and Velite.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Writing Articles

Articles are written in MDX and stored in `content/articles/`. The content is processed by
[Velite](https://velite.js.org/) and rendered with syntax highlighting via
[rehype-pretty-code](https://rehype-pretty-code.netlify.app/).

### Development Workflow

Run this in a separate termoinal to get hot reloading in MDX files

1. Create a new `.mdx` file in `content/articles/`
2. Add your frontmatter and content
3. Start the dev server with `pnpm dev`
4. Start the Velite server with `pnpm run velite:dev` This bullds the articles and enables hot
   reloading
5. Visit `/articles` to see your new article
6. Changes to MDX files trigger automatic rebuilds

### Including React Components

To use React components in your MDX articles:

1. Store article components in `content/components/`
2. Import it in `app/articles/[slug]/page.tsx`
3. Add it to the `components` prop in the `MDXContent` component
4. Use it directly in any MDX file without importing

Example:

```tsx
// app/articles/[slug]/page.tsx
import MyComponent from "@/content/components/MyComponent";

// In the component:
<MDXContent code={article.code} components={{ MyComponent }} />;
```

```mdx
<!-- content/articles/my-article.mdx -->

# My Article

<MyComponent />
```
