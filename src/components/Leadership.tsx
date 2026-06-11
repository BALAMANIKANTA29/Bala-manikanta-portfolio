/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Users, Crosshair, HelpCircle, Star, Sparkles } from "lucide-react";
import { LEADERSHIP } from "../data";

export function Leadership() {
  // Mapping roles to icons
  const getLeaderIcon = (id: string) => {
    switch (id) {
      case "best-spoc":
        return <Award className="w-5 h-5 text-blue-600" />;
      case "class-rep":
        return <Users className="w-5 h-5 text-blue-600" />;
      case "abhiyaan-winner":
        return <Star className="w-5 h-5 text-blue-600" />;
      case "abhiyaan-mentor":
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      default:
        return <Crosshair className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="leadership" className="py-20 px-4 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-display">
            Leadership & <span className="text-blue-600 italic">Extra-Curriculars</span>
          </h2>
          <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto sm:mx-0" />
          <p className="text-sm text-slate-600 max-w-md font-sans">
            Serving as departmental liaison, class representative, project contest mentor, and event coordinator.
          </p>
        </div>

        {/* Timeline roadmap layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {LEADERSHIP.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bento-card hover:border-blue-300 hover:shadow shadow-sm bg-white flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Soft visual card accent */}
              <div className="accent-glow group-hover:scale-125 transition-transform" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-blue-600 group-hover:text-blue-700">
                    {getLeaderIcon(item.id)}
                  </div>
                  {item.duration && (
                    <span className="text-[10px] font-mono text-slate-550 text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                      {item.duration}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold font-mono">{item.role}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans text-justify">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.highlight && (
                <div className="pt-4 border-t border-slate-100 mt-4 text-[10px] uppercase font-mono text-blue-600 font-bold flex items-center gap-1.5 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-blue-500/10 text-blue-605 text-blue-600" />
                  <span>{item.highlight}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
