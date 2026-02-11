export type ProjectLink = {
  href: string;
  label: string;
};

export type ProjectProps = {
  title: string;
  description: string;
  links: ProjectLink[];
};

export default function Project({ title, description, links }: ProjectProps) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
      </div>
      <div className="flex justify-between">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
