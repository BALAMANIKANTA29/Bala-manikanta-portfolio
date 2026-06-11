/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, Sparkles, Terminal } from "lucide-react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Leadership } from "./components/Leadership";
import { Contact } from "./components/Contact";
import { ResumeChatbot } from "./components/ResumeChatbot";
import { PERSONAL_INFO } from "./data";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div id="portfolio-container" className="min-h-screen flex flex-col justify-between selection:bg-blue-500/20 selection:text-blue-600 bg-[#f8fafc]">
      {/* Sticky Top Navigation Bar */}
      <nav id="navbar" className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Brand Brand */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 group-hover:border-blue-500 group-hover:scale-105 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors font-display">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100/60 transition-all font-sans cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Link to Resume Chatbot / Highlight */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-50 border border-blue-200 hover:border-blue-500 text-blue-600 hover:bg-blue-100 font-bold text-xs rounded-xl transition cursor-pointer font-sans"
            >
              Hire Bala
            </a>
          </div>

          {/* Mobile Hamburg Hamburg */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-xl hover:bg-slate-50 transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 bg-blue-600 font-bold text-xs text-white rounded-xl hover:bg-blue-700 transition cursor-pointer"
              >
                Hire Bala
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Single-View Component Stack */}
      <main className="flex-1 w-full bg-[#f8fafc]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      {/* Floating Interactive Chat Interface */}
      <ResumeChatbot />

      {/* Polished Humanized Credits Footer */}
      <footer id="footer" className="bg-white border-t border-slate-200 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <p>© {new Date().getFullYear()} Bala Manikanta Naradala. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <span>•</span>
            <span className="text-blue-600 font-mono">Bento Portfolio Theme</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

