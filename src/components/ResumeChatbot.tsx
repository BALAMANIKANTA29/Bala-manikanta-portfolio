/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, Bot, User, Loader2, ChevronRight } from "lucide-react";
import { ChatMessage } from "../types";

export function ResumeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am Bala's AI Assistant. Ask me anything about his ML/AI projects, technical skills, academic milestones at KIET, or certifications!",
      timestamp: new Date()
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Suggested pre-programmed questions
  const SUGGESTIONS = [
    { label: "Summarize AI achievements", text: "Please provide a quick summary of Bala's AI/ML experience and top Achievements" },
    { label: "AI Resume Analyzer project", text: "Tell me in detail about the 'AI Resume Analyzer & Skill Gap Predictor' project." },
    { label: "What is his CGPA & education?", text: "Where does Bala study and what are his academic scores?" },
    { label: "Leadership & Best SPOC Award", text: "What is the 'Best SPOC Award' Bala won in 2025 and what are his leadership roles?" }
  ];

  // Auto-scroll on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(-8)
        })
      });

      if (!response.ok) {
        throw new Error("Failed to contact the chatbot backend.");
      }

      const data = await response.json();

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: data.text || "I was unable to draft an answer. Could you try rephrasing your goal?",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: "bot",
        text: "I am having trouble connecting to Bala's server. Please verify that your GEMINI_API_KEY is configured in the Settings secrets module.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Sparkle Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          id="btn-chatbot-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-5 py-3.5 bg-white border border-blue-200 text-blue-600 font-medium rounded-full shadow-lg shadow-blue-500/10 active:scale-95 transition-all hover:bg-slate-50 hover:border-blue-400 cursor-pointer font-sans text-xs uppercase tracking-wider"
        >
          <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          <span>Chat with Bala's Representative</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2.5 h-2.5 bg-blue-500 rounded-full"
          />
        </button>
      </div>

      {/* Floating Chat Box Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="panel-chatbot"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 w-full max-w-[420px] h-[550px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-slate-50 border-b border-slate-200/85">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white border border-slate-200 rounded-lg text-blue-600">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5 font-display">
                    Bala's Agent
                    <span className="inline-flex w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  </h3>
                  <p className="text-[10px] text-blue-600 font-mono">powered by interactions-grounding-api</p>
                </div>
              </div>
              <button
                id="btn-chatbot-close"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-150 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-200">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-blue-600">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-xl p-3 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none font-semibold font-sans shadow"
                        : "bg-slate-50 border border-slate-200/80 text-slate-700 rounded-bl-none"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="block text-[8px] mt-1 text-right opacity-60">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-slate-600">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-blue-600">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-500 rounded-bl-none flex items-center gap-2">
                    <span>Synthesizing answer</span>
                    <span className="dot-dots font-mono animate-bounce">...</span>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            {/* Suggestions Block (Scrollable horizontally) */}
            {messages.length < 5 && (
              <div className="px-4 py-2 border-t border-slate-100 bg-slate-50 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2">
                {SUGGESTIONS.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(s.text)}
                    className="inline-flex shrink-0 items-center gap-1 px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 hover:border-blue-300 text-slate-600 text-[11px] rounded-full transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{s.label}</span>
                    <ChevronRight className="w-3 h-3 text-blue-600" />
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer Form */}
            <form
              id="form-chatbot"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputVal);
              }}
              className="p-3 bg-slate-50 border-t border-slate-200 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about certifications, projects..."
                className="flex-1 bg-white border border-slate-200 focus:border-blue-500 focus:outline-none rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400"
                disabled={isLoading}
              />
              <button
                id="btn-chatbot-send"
                type="submit"
                disabled={!inputVal.trim() || isLoading}
                className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all disabled:opacity-40 cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
