/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, ArrowRight, User } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export function Hero() {
  const [imgSrc, setImgSrc] = useState("https://i.ibb.co/v4GWr5bZ/Bala-Manikanta.png");
  const [fallbackCount, setFallbackCount] = useState(0);

  const handleImageError = () => {
    if (fallbackCount === 0) {
      // First fallback: GitHub profile
      setImgSrc("https://github.com/BALAMANIKANTA29.png");
      setFallbackCount(1);
    } else {
      // Second fallback: Show the stylish placeholder card icon
      setFallbackCount(2);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden border-b border-slate-205 bg-gradient-to-b from-blue-50/30 via-slate-50 to-slate-100/30">
      {/* Abstract Grid Backdrop & Glowing Nodes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.06),rgba(255,255,255,0))]" />
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
 
      <div className="relative max-w-5xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-center">
        {/* Left column: Text Information */}
        <div className="md:col-span-8 flex flex-col space-y-8 text-center md:text-left items-center md:items-start order-2 md:order-1">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 font-display"
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent font-semibold">{PERSONAL_INFO.name}</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-sans text-justify md:text-left"
          >
            {PERSONAL_INFO.summary}
          </motion.p>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2 max-w-2xl"
          >
            <div className="bento-card border border-slate-200/80 hover:border-blue-300 hover:shadow shadow-sm p-4 bg-white/70">
              <div className="accent-glow"></div>
              <span className="block text-2xl font-semibold text-blue-600 font-display stat-number">B.Tech</span>
              <span className="block text-[11px] text-slate-500 whitespace-nowrap">CGPA 7.5 / KIET</span>
            </div>
            <div className="bento-card border border-slate-200/80 hover:border-blue-400 hover:shadow shadow-sm p-4 bg-gradient-to-br from-white/80 to-blue-50/40">
              <div className="accent-glow-indigo"></div>
              <span className="block text-2xl font-semibold text-indigo-600 font-display stat-number">2025</span>
              <span className="block text-[11px] text-slate-500 whitespace-nowrap">Best SPOC Award</span>
            </div>
            <div className="bento-card border border-slate-200/80 hover:border-blue-300 hover:shadow shadow-sm p-4 bg-white/70">
              <div className="accent-glow"></div>
              <span className="block text-2xl font-semibold text-blue-600 font-display stat-number">10+</span>
              <span className="block text-[11px] text-slate-500 whitespace-nowrap">AI / ML Toolsets</span>
            </div>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 flex items-center gap-2 cursor-pointer font-sans text-xs uppercase tracking-wider"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-blue-600 rounded-xl transition-all cursor-pointer shadow-sm"
                title="GitHub Link"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-blue-600 rounded-xl transition-all cursor-pointer shadow-sm"
                title="LinkedIn Link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column: Passport Size Portrait Photo */}
        <div className="md:col-span-4 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Background glowing halo */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 blur-lg" />
            
            <div className="relative bg-white p-2 rounded-2xl border border-slate-200 shadow-xl flex flex-col items-center">
              <div className="w-[170px] h-[220px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center relative">
                {fallbackCount < 2 ? (
                  <img
                    src={imgSrc}
                    alt="Professional Portrait"
                    className="w-full h-full object-cover rounded-lg"
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  // Stylish interactive placeholder representing a handsome, high-end profile card
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center p-4 text-center">
                    <User className="w-12 h-12 text-white/90 mb-2" />
                    <span className="text-blue-200 text-[10px] uppercase font-mono tracking-widest mt-1">AI SPECIALIST</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
