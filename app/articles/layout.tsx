import Link from "next/link";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-black dark:text-white">
            Adam Hinckley
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            >
              Articles
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
    </div>
  );
}
