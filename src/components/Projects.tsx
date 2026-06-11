/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Code, ExternalLink, Sparkles, TrendingUp } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<"All" | "AI/NLP" | "ML" | "Web">("All");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === "All") return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-display">
              Featured <span className="text-blue-600 italic font-semibold font-medium">Projects</span>
            </h2>
            <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto sm:mx-0" />
            <p className="text-sm text-slate-600 max-w-md font-sans">
              Full-stack systems, NLP analysis engines, and predictive analytics tools.
            </p>
          </div>

          {/* Filter Toggles */}
          <div className="flex justify-center p-1 bg-slate-100 border border-slate-200 rounded-xl overflow-x-auto max-w-full mx-auto md:mx-0">
            {(["All", "AI/NLP", "ML", "Web"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bento-card hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative node highlight */}
                <div className="accent-glow group-hover:scale-125 transition-transform" />

                <div className="space-y-4">
                  {/* Category and Source links */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full font-bold select-none">
                      {proj.category === "AI/NLP" ? "Natural Language Processing" : proj.category === "ML" ? "Machine Learning" : "Systems / Web"}
                    </span>

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-500 hover:text-blue-600 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-300 transition"
                        title="GitHub repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Project Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2 font-display">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans text-justify">
                      {proj.description}
                    </p>
                  </div>

                  {/* Bullet Outcomes */}
                  {proj.outcomes && proj.outcomes.length > 0 && (
                    <div className="space-y-2 pt-1.5">
                      <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                        Systems Impact / Metrics
                      </h4>
                      <ul className="space-y-1.5">
                        {proj.outcomes.map((out, oIdx) => (
                          <li key={oIdx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Badges / Tech list at bottom */}
                <div className="pt-5 border-t border-slate-100 mt-5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 text-[10px] font-mono rounded-md transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proj.metrics && (
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-blue-600 pt-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                      <span className="stat-number">{proj.metrics}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
