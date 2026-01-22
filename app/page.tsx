"use client";

import Link from "next/link";
import { useState } from "react";
import Recommendations from "./components/Recommendations";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black" id="top">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="#top"
            className="text-xl font-bold text-black dark:text-white"
          >
            Adam Hinckley
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
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

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-full bg-black dark:bg-white transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-black dark:bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-black dark:bg-white transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#education"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                href="#projects"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#volunteer"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Volunteering
              </Link>
              <Link
                href="#contact"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-0">
        {/* Hero Section */}
        <section id="top" className="py-16 md:py-24 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {/* <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white">
              Adam Hinckley
            </h1> */}
            <p className="text-2xl text-black dark:text-white">
              Senior Frontend Developer
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-8 md:py-4 flex flex-col gap-6">
          {/* <h2 className="text-3xl font-bold text-black dark:text-white">
            About
            </h2> */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
              Hello! I'm Adam Hinckley. I live in Alabama and I am seeking a
              remote software engineer position. I have over six years of
              experience as a frontend developer, specializing in building
              high-quality web applications using React, Next.js, and
              TypeScript.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              When I'm not coding, you can find me volunteering in my community,
              growing food in my garden, or mediating arugments between my
              children about who gets the last piece of pizza.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8 md:py-4 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>CSS</li>
                <li>State Management</li>
                <li>Storybook</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Git & GitHub</li>
                <li>Material UI</li>
                <li>Tanstack Query/Form</li>
                <li>CI/CD</li>
                <li>Micro-frontends (Webpack)</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>GraphQL</li>
                <li>Accessibility (A11y)</li>
                <li>Testing (Jest, React Testing Library)</li>
                <li>Code Reviews</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 md:py-4 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Senior Frontend Developer
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                ClickBank • December 2019 - January - 2026, Boise, ID (remote)
              </p>
              <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>
                  • Rewrote a lightning fast and highly customizable{" "}
                  <a
                    href="https://orders.clickbank.net/?affi=mitox&cbfid=57989&cbitems=mitolyn-06A&corid=f30e0cda-3465-4bd5-894d-3001a36f282f&exitoffer=exitoffer2&oaref=01.87E7EFFA0628E7D1CC368DD52B0890C0067784654EDB40D6F5647EF0C1910072582ECAB4&template=6A-bottles&time=1768962175&vtid=index&vvvv=mitolyn&vvar=cbfid%3D57989%26cbitems%3Dmitolyn-06A%26exitoffer%3Dexitoffer2%26template%3D6A-bottles%26vtid%3Dindex"
                    className="underline"
                  >
                    order form{" "}
                  </a>
                  and WYSIWYG editor resulting in a 70% increase in customized
                  forms that lead to an 8% increase in overall conversion
                </li>
                <li>
                  • Migrated internal accounting tools from an outdated monorepo
                  into micro-frontend architecture increasing making so the
                  accoiunting team could complete tasks 30% faster.
                </li>
                <li>
                  • Created a host of new MJML email templates using React,
                  Storybook and Handlebars making it easy for the marketing team
                  to create and edit email campaigns
                </li>
                <li>
                  • Built intuitive UIs for AI-powered compliance and fraud
                  detection tools, streamlining product onboarding and reducing
                  risks in transaction flows resulting in a 12% decrease in
                  fraud and a 50% faster onboarding time
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Owner / Operator
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Hinckley Financial (insurance services) • January 2008 -
                December 2019, Boise, ID
              </p>
              <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>
                  •Hired and managed a team of 25 agents, growing client base to
                  15,000+ through nationwide sales and product training
                  initiatives, and built custom software simplifying processes
                  for 2,000+ agents
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Sales Manager
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                A&E Autoglass (auto glass sales and installation) • June 2005 -
                January 2008, Mesa, AZ
              </p>
              <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>
                  • Trained and suppored sales representatives that worked a car
                  washes to sell auto glass repair and replacement
                </li>
                <li>
                  • Maintenined relationships with carwash oweners to ensure
                  continued business and growth opportunitiess
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="py-16 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Education
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Bloomtech Institute of Technology
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Full-Stack Web Development Program • April-2019 - December-2019
              </p>
            </div>
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Utah Valley University
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Culinart Arts • 2003 - 2006
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 md:py-4 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                Ward Program - personal
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                A "plain like paper" program for church congregations that
                memebers get accces to by scanning a QR code. This has had
                active users since July 2024. Built using Next.js, TypeScript,
                and Material UI.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://www.wardprogram.com/"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                <a
                  href="https://github.com/adamhinckley/ward-program"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github repository
                </a>
              </div>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                ClickBank Order Form - work
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                A highly customizable order form that is the last step in an
                affiliate marketing sales funnel. This project led to a 70%
                increase in customized forms and an 8% increase in overall
                conversion. Built using Next.js, TypeScript, and Material UI.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://orders.clickbank.net/?affi=mitox&cbfid=57989&cbitems=mitolyn-06A&corid=0277736a-85ba-4300-add0-969f6abdc90b&oaref=01.87E7EFFA0628E7D1CC368DD52B0890C0067784654EDB40D6F5647EF0C1910072582ECAB4&time=1769106796&vtid=index&vvvv=mitolyn&vvar=cbfid%3D57989%26cbitems%3Dmitolyn-06A%26exitoffer%3Dexitoffer2%26template%3D6A-bottles%26vtid%3Dindex"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vanilla order form
                </a>
                <a
                  href="https://orders.clickbank.net/?affi=mitox&cbfid=57989&cbitems=mitolyn-06A&corid=0277736a-85ba-4300-add0-969f6abdc90b&exitoffer=exitoffer2&oaref=01.87E7EFFA0628E7D1CC368DD52B0890C0067784654EDB40D6F5647EF0C1910072582ECAB4&template=6A-bottles&time=1769106796&vtid=index&vvvv=mitolyn&vvar=cbfid%3D57989%26cbitems%3Dmitolyn-06A%26exitoffer%3Dexitoffer2%26template%3D6A-bottles%26vtid%3Dindex"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cstomized order form
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="volunteer" className="py-8 md:py-4 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Volunteering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                Youth Seminary Teacher
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                August 2024 - Present
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Early morning seminary for The Church of Jesus Christ of
                Latter-day Saints. I volunteer as a seminary teacher for high
                school students, teaching them principles of faith, integrity,
                and service.
              </p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                Fire & Fellowship
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                A meeting for men to gather, build relationships, and serve one
                another. I organize and lead this group that meets periodically
                at my backyard firepit to foster camaraderie and personal
                growth.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 md:py-4 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Get In Touch
          </h2>

          <div className="flex gap-6">
            <a
              href="mailto:adamhinckley@mac.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Email
            </a>
            <a
              href="https://github.com/adamhinckley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adamhinckley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 mt-20">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
            © 2026 Adam Hinckley. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
