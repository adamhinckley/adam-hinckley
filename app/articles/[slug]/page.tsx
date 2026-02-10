import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
import MDXContent from "./mdx";

export const generateStaticParams = () =>
  allArticles.map((article) => ({ slug: article.slug }));

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const getArticleUrl = (slug: string) => `${siteUrl}/articles/${slug}`;

const getOgImageUrl = (coverImage?: string | null) => {
  if (!coverImage) {
    return undefined;
  }

  return new URL(coverImage, siteUrl).toString();
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = allArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  const url = getArticleUrl(article.slug);
  const ogImage = getOgImageUrl(article.coverImage);

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url,
      publishedTime: new Date(article.date).toISOString(),
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: article.title,
      description: article.summary,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = allArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const articleUrl = getArticleUrl(article.slug);
  const ogImage = getOgImageUrl(article.coverImage);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Adam Hinckley",
    },
    url: articleUrl,
    image: ogImage ? [ogImage] : undefined,
  };

  return (
    <article className="flex flex-col gap-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
          <Link href="/articles" className="hover:underline">
            Articles
          </Link>
          <span>/</span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {article.title}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-black dark:text-white">
          {article.title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">{article.summary}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      {article.coverImage ? (
        <img
          src={article.coverImage}
          alt={article.title}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800"
        />
      ) : null}

      <div className="article-content">
        <MDXContent code={article.body.code} />
      </div>
    </article>
  );
}
