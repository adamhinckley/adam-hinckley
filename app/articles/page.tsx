import Link from "next/link";
import { allArticles } from "contentlayer/generated";

const sortedArticles = [...allArticles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function ArticlesPage() {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Articles
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Writing on product, design, and engineering.
        </p>
      </header>

      {sortedArticles.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">
          No articles published yet.
        </p>
      ) : (
        <ul className="grid gap-6">
          {sortedArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={article.url}
                className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 transition hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold text-black dark:text-white group-hover:underline">
                      {article.title}
                    </h2>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {article.summary}
                  </p>
                  {article.coverImage ? (
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="mt-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
                    />
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
