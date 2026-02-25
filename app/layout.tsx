import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteUrl } from "./util/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adam Hinckley | Senior Frontend Engineer",
    template: "%s | Adam Hinckley",
  },
  description: "Portfolio and articles by Adam Hinckley, senior frontend engineer.",
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    siteName: "Adam Hinckley",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics gaId="G-S8H58DR5WV" />
        {children}
      </body>
    </html>
  );
}
