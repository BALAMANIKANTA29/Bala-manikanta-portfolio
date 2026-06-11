/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  outcomes?: string[];
  metrics?: string;
  category: "AI/NLP" | "ML" | "Web";
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  type: "Internship" | "Work";
  description: string[];
  technologies?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; rating: number }[];
  iconName: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score: string;
  achievements?: string[];
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface LeaderActivity {
  id: string;
  title: string;
  role: string;
  duration?: string;
  description: string;
  highlight?: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}
