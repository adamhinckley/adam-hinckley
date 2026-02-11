import type { ProjectProps } from "../components/Project";

export const projects: ProjectProps[] = [
  {
    title: "Articles - personal",
    description: `On this site! I wanted to include interractive React components in my writing, 
    so I built an articles section using MDX. The content is stored in the content/articles 
    directory and is sourced using Velite. The articles are styled using Tailwind 
    CSS and the code blocks use rehype-pretty-code.`,
    links: [
      { href: "/articles", label: "Articles" },
      { href: "https://github.com/adamhinckley/adam-hinckley", label: "Github" },
    ],
  },
  {
    title: "Ward Program - personal",
    description: `A "plain like paper" program for church congregations that members 
    get access to by scanning a QR code. This has had active users since July 2024 
    and is maintained in production. Built using Next.js, TypeScript, and Material UI.`,
    links: [
      {
        href: "https://www.wardprogram.com/",
        label: "Website",
      },
      {
        href: "https://github.com/adamhinckley/ward-program",
        label: "Github",
      },
    ],
  },
  {
    title: "ClickBank Order Form - professional",
    description: `A highly customizable order form that is the last step in an affiliate 
    marketing sales funnel. This project led to a 70% increase in customized forms and an 
    8% increase in overall conversion. Built using Next.js, TypeScript, and Material UI.`,
    links: [
      {
        href: "https://orders.clickbank.net/?affi=mitox&cbfid=57989&cbitems=mitolyn-06A&corid=0277736a-85ba-4300-add0-969f6abdc90b&oaref=01.87E7EFFA0628E7D1CC368DD52B0890C0067784654EDB40D6F5647EF0C1910072582ECAB4&time=1769106796&vtid=index&vvvv=mitolyn&vvar=cbfid%3D57989%26cbitems%3Dmitolyn-06A%26exitoffer%3Dexitoffer2%26template%3D6A-bottles%26vtid%3Dindex",
        label: "vanilla order form",
      },
      {
        href: "https://orders.clickbank.net/?affi=mitox&cbfid=57989&cbitems=mitolyn-06A&corid=0277736a-85ba-4300-add0-969f6abdc90b&exitoffer=exitoffer2&oaref=01.87E7EFFA0628E7D1CC368DD52B0890C0067784654EDB40D6F5647EF0C1910072582ECAB4&template=6A-bottles&time=1769106796&vtid=index&vvvv=mitolyn&vvar=cbfid%3D57989%26cbitems%3Dmitolyn-06A%26exitoffer%3Dexitoffer2%26template%3D6A-bottles%26vtid%3Dindex",
        label: "customized order form",
      },
    ],
  },
  {
    title: "Stock Viewer - personal",
    description: `This is currently a work in progress.  It has cookie based authentication, 
    a React frontend, and a NestJS backend. The frontend is built with Next.js, TypeScript, 
    and Tailwind CSS, while the backend is built with NestJS and Supabase. The app allows 
    users to search for stocks and view detailed information about them.`,
    links: [
      {
        href: "https://github.com/adamhinckley/stock-viewer",
        label: "Frontend repo",
      },
      {
        href: "https://github.com/adamhinckley/stock-aggregator-backend",
        label: "Backend repo",
      },
      {
        href: "https://stock-viewer-gules.vercel.app/",
        label: "Live demo",
      },
    ],
  },
  {
    title: "Design System - personal",
    description: `A WIP design system built using React, TypeScript, and shadcdn. 
    This will be accessible to the public and open source when it's ready, but you 
    can check out the GitHub repo and Storybook in the meantime.`,
    links: [
      {
        href: "https://github.com/adamhinckley/design-system",
        label: "Github",
      },
      {
        href: "https://design-system-hazel-mu.vercel.app/?path=/docs/design-system--docs",
        label: "Storybook",
      },
    ],
  },
];
