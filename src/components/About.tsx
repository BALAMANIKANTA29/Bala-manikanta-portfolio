/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { PERSONAL_INFO, EDUCATION } from "../data";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-display">
            About <span className="text-blue-600 italic">Me</span> & <span className="text-indigo-600 font-semibold">Education</span>
          </h2>
          <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto sm:mx-0" />
        </div>

        {/* Brand Focus / Objective Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-6">
            <div className="bento-card border-l-4 border-l-blue-600 hover:border-blue-300/40 bg-white">
              <div className="accent-glow" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span>Career Objective</span>
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-sans italic">
                "{PERSONAL_INFO.objective}"
              </p>
            </div>

            <div className="bento-card hover:border-blue-300/40 bg-white">
              <div className="accent-glow-indigo" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>Core Philosophies</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Focused on leveraging modern data processing algorithms and natural language processing pipelines to distill valuable insights from structured and raw content. Highly adaptable to emerging technical layers.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 font-display">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span>Academic Pathway</span>
            </h3>

            {/* Education Cards */}
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bento-card hover:border-blue-300/40 flex flex-col md:flex-row gap-4 justify-between group bg-white"
                >
                  <div className="space-y-3 flex-1">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-slate-600 font-medium">{edu.degree}</p>
                    </div>

                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="space-y-1.5 pt-1">
                        {edu.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex flex-col items-start md:items-end justify-between gap-2 shrink-0 md:text-right font-mono text-xs font-semibold">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{edu.duration}</span>
                    </div>

                    <div className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 font-bold rounded-lg mt-1 select-none stat-number">
                      {edu.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
