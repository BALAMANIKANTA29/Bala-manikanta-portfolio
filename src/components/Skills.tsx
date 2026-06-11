/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Code, BrainCircuit, Globe, PencilRuler, CheckCircle } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";

export function Skills() {
  // Mapping categories to React icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-blue-600" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-blue-600" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-blue-600" />;
      case "PencilRuler":
        return <PencilRuler className="w-5 h-5 text-blue-600" />;
      default:
        return <Code className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-display">
            Skills & <span className="text-blue-600 italic">Technical Specializations</span>
          </h2>
          <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto sm:mx-0" />
          <p className="text-sm text-slate-600 max-w-lg font-sans">
            Structured competency profiles across programming, machine learning frameworks, data visualization libraries, and leadership tools.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              className="bento-card hover:border-blue-300 hover:shadow shadow-sm bg-white space-y-6"
            >
              <div className="accent-glow group-hover:scale-125 transition-transform" />

              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-slate-50 border border-slate-200 rounded-xl font-medium">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">{cat.title}</h3>
              </div>

              {/* Sleek Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                   <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-slate-50 text-slate-600 hover:text-blue-600 rounded-xl border border-slate-200/80 hover:border-blue-300 text-xs font-semibold font-sans transition-all flex items-center gap-1.5 select-none hover:scale-[1.02] transform"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
