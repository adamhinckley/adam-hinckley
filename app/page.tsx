import type { Metadata } from "next";
import HomePageClient from "./components/HomePageClient";
import { siteUrl } from "./util/constants";

export const metadata: Metadata = {
  title: "Adam Hinckley | Senior Frontend Engineer",
  description:
    "Portfolio of Adam Hinckley, senior frontend engineer specializing in React, Next.js, and TypeScript.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: { absolute: "Adam Hinckley | Senior Frontend Engineer" },
    description:
      "Portfolio of Adam Hinckley, senior frontend engineer specializing in React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary",
    title: "Adam Hinckley | Senior Frontend Engineer",
    description:
      "Portfolio of Adam Hinckley, senior frontend engineer specializing in React, Next.js, and TypeScript.",
  },
};

export default function Home() {
  return <HomePageClient />;
}
