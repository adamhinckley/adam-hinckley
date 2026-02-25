import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex gap-6">
      <Link
        href="/articles"
        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
      >
        Articles
      </Link>
      <Link
        href="#about"
        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
      >
        About
      </Link>
      <Link
        href="#experience"
        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
      >
        Experience
      </Link>
      <Link
        href="#education"
        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
      >
        Education
      </Link>
      <Link
        href="#projects"
        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
      >
        Projects
      </Link>
      <Link
        href="#volunteer"
        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
      >
        Volunteering
      </Link>
      <Link
        href="#contact"
        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
      >
        Contact
      </Link>
    </div>
  );
};

export default DesktopNav;
