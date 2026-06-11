/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", query: "" });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulating message routing
    setTimeout(() => {
      setIsSending(false);
      setSuccess(true);
      setFormState({ name: "", email: "", query: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white scroll-mt-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-display">
            Get In <span className="text-blue-600 italic">Touch</span>
          </h2>
          <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto sm:mx-0" />
          <p className="text-sm text-slate-600 max-w-sm font-sans">
            Reach out directly for internships, professional collaborations, or academic consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          {/* Left Column: Direct Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="bento-card hover:border-blue-300 hover:shadow shadow-sm bg-white space-y-6 relative overflow-hidden group">
              <div className="accent-glow group-hover:scale-125 transition-transform" />

              <h3 className="text-base font-bold text-slate-900 font-display">Connect Directly</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all cursor-pointer group"
                >
                  <div className="p-2.5 bg-slate-100 border border-slate-200 text-blue-600 rounded-lg group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] text-slate-500 font-mono font-bold uppercase">Email Address</span>
                    <span className="block text-xs sm:text-sm text-slate-600 font-medium truncate font-sans">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all cursor-pointer group"
                >
                  <div className="p-2.5 bg-slate-100 border border-slate-200 text-blue-600 rounded-lg group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono font-bold uppercase">Corporate Mobile</span>
                    <span className="block text-xs sm:text-sm text-slate-600 font-medium font-sans">+91 {PERSONAL_INFO.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
                  <div className="p-2.5 bg-slate-100 border border-slate-200 text-blue-600 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono font-bold uppercase">Current Location</span>
                    <span className="block text-xs sm:text-sm font-medium font-sans">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid Block */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex justify-center gap-4 md:justify-start">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-blue-300 text-slate-550 text-slate-600 hover:text-blue-600 rounded-xl transition cursor-pointer text-xs font-mono font-bold"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-blue-605 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-blue-300 text-slate-550 text-slate-600 hover:text-blue-600 rounded-xl transition cursor-pointer text-xs font-mono font-bold"
              >
                <Github className="w-4 h-4 shrink-0 text-blue-605 text-blue-600" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Correspondence Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 space-y-4 shadow-sm hover:border-blue-300 transition-colors relative overflow-hidden group"
            >
              <div className="accent-glow group-hover:scale-125 transition-transform" />
              <h3 className="text-base font-bold text-slate-900 relative z-10 font-display">Send a Direct Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                    Your Profile Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Recruiter or Manager"
                    className="w-full bg-white text-slate-800 text-xs border border-slate-200 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 placeholder-slate-400 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                    Return Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full bg-white text-slate-800 text-xs border border-slate-200 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 placeholder-slate-400 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5 relative z-10">
                <label htmlFor="query" className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                  Details / Letter content
                </label>
                <textarea
                  id="query"
                  required
                  rows={4}
                  value={formState.query}
                  onChange={(e) => setFormState({ ...formState, query: e.target.value })}
                  placeholder="Hi Bala, I reviewed your portfolio..."
                  className="w-full bg-white text-slate-800 text-xs border border-slate-200 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 placeholder-slate-400 transition resize-none"
                />
              </div>

              {/* Action and feedback states */}
              <div className="pt-2 flex items-center justify-between gap-4 relative z-10">
                <button
                  type="submit"
                  disabled={isSending || success}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/10 cursor-pointer flex items-center gap-2 font-sans text-xs uppercase tracking-wider"
                >
                  {isSending ? (
                    <span>Routing...</span>
                  ) : (
                    <>
                      <span>Deploy Directive</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-blue-650 text-blue-600 font-medium text-xs font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-blue-600" />
                    <span>Message logged securely!</span>
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
