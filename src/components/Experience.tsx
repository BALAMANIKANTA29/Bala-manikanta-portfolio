/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2, Award } from "lucide-react";
import { EXPERIENCES } from "../data";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-display">
            Work <span className="text-blue-600 italic">Experience</span> & <span className="text-indigo-600 font-semibold">Internships</span>
          </h2>
          <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto sm:mx-0" />
        </div>

        {/* Experience Timeline Grid / Single card layout */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bento-card hover:border-blue-300 flex flex-col md:flex-row gap-6 relative group overflow-hidden pl-7 bg-white"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-blue-600" />
              <div className="accent-glow group-hover:scale-125 transition-transform" />

              <div className="md:w-1/3 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 text-blue-600 rounded-xl">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-blue-600 font-mono font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full select-none">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium font-sans">@ {exp.organization}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="md:w-2/3 space-y-6">
                <div>
                   <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-bold mb-3">
                    Scope & Core Accomplishments
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-3 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-bold mb-2.5">
                      Acquired Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-slate-50 text-slate-650 text-slate-600 hover:text-blue-600 text-xs rounded-lg border border-slate-205 border-slate-200 hover:border-blue-300 font-mono transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
