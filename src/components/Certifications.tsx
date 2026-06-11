/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-slate-50 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-display">
            Professional <span className="text-blue-600 italic">Certifications</span>
          </h2>
          <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto sm:mx-0" />
          <p className="text-sm text-slate-600 max-w-md font-sans">
            Verified academic credentials, specialized internships, and corporate simulators.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {CERTIFICATIONS.map((cert, idx) => {
            const hasLink = !!cert.credentialUrl;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`bento-card hover:border-blue-300 hover:shadow shadow-sm flex flex-col justify-between group relative overflow-hidden bg-white ${
                  hasLink ? "hover:border-blue-300" : ""
                }`}
              >
                {/* Backglow element */}
                <div className="accent-glow group-hover:scale-125 transition-transform" />

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 bg-slate-50 border border-slate-200 text-blue-600 group-hover:text-blue-700 transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    {cert.date && (
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    {hasLink ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block hover:text-blue-600 transition-colors"
                      >
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display flex items-center gap-1.5 hover:underline decoration-blue-500/50">
                          {cert.title}
                          <ExternalLink className="w-3.5 h-3.5 text-blue-1000 text-blue-600 shrink-0" />
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-all font-display">
                        {cert.title}
                      </h3>
                    )}
                    <p className="text-xs text-slate-600 font-medium font-sans">
                      Issuer: {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold font-semibold">
                  <div className="flex items-center gap-1.5 text-blue-600">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified Credential</span>
                  </div>
                  {hasLink && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline transition-colors flex items-center gap-1"
                    >
                      <span>View Proof</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
