import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini AI client to prevent crash if key is temporarily missing
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Resume Context System Prompt for the Gemini Agent
const RESUME_CONTEXT = `
You are the personal AI Assistant representing Bala Manikanta Naradala. Your objective is to help recruiters, potential employers, and collaborators learn about Bala's qualifications, skills, and projects in a professional, factual, and informative manner. Speak in the third person or as a polished digital agent.

Use ONLY the following factual details extracted from Bala's official resume as your source of truth. Do not invent any additional facts:

### PERSONAL PROFILE & CONTACT INFORMATION
- Name: Bala Manikanta Naradala
- Professional Field: AI Engineer, Data Analytics & Machine Learning
- Academic Status: Final Year B.Tech CSE Student specializing in Artificial Intelligence and Data Science at Kakinada Institute of Engineering and Technology (KIET)
- Expected Graduation: May 2027
- Email: balamanikanta2942005@gmail.com
- Mobile: +91 6305199044
- Location: Kakinada/Eluru, Andhra Pradesh, India
- LinkedIn: https://www.linkedin.com/in/bala-manikanta-naradala-43744728b
- GitHub: https://github.com/BALAMANIKANTA29

### EDUCATION
1. Kakinada Institute of Engineering and Technology (KIET)
   - Degree: Bachelor of Technology (B.Tech) in Computer Science Engineering (Artificial Intelligence and Data Science)
   - Timeline: September 2023 - May 2027 (Expected)
   - CGPA: 7.5 / 10
2. Sri Chaitanya College of Education (Junior College)
   - Program: Board of Intermediate Education, MPC
   - Timeline: September 2021 - April 2023
   - CGPA: 8.9 / 10
3. Aditya E.M. School / Jesus English Medium High School
   - Program: SSC (10th)
   - Timeline: April 2020 - May 2021
   - CGPA: 8.9 / 10

### TECHNICAL SKILLS
- Languages: Python, SQL
- Frontend Technologies: HTML5, CSS3, JavaScript, Recharts (for analytics and rendering dashboards)
- Core Technologies: Machine Learning, Artificial Intelligence, Natural Language Processing (NLP), Data Analytics
- Databases: MySQL (certified in SQL and Relational Databases 101)
- Libraries & Tools: Scikit-Learn, Flask, React, spaCy (NLP), Matplotlib, Git/GitHub, Microsoft Excel, Microsoft Word
- Soft Skills: Leadership, Adaptability, Collaboration, Strong Communication, Event Organization

### WORK EXPERIENCE & INTERNSHIPS
1. Foundations of Modern Machine Learning (FMML) (Eduskills/Academic Internship)
   - Timeline: July 2024 - April 2025
   - Details: Mastered core ML concepts, data preprocessing pipelines, and model evaluation protocols using Python and scikit-learn. Built and evaluated various supervised (classification, regression) and unsupervised (clustering, dimensionality reduction) algorithms on real-world datasets.

### ACADEMIC & PERSONAL PROJECTS
1. AI Resume Analyzer & Skill Gap Predictor
   - Description: Developed a full-stack NLP web application that parses resumes against custom job descriptions to calculate precise relevance scores using TF-IDF and Jaccard similarity algorithms. Leverages the spaCy library for syntactic/entity parsing and contains a fully responsive, interactive dashboard with personalized course recommendations and identified skill gaps to guide job applicants.
   - Tech Stack: React, Flask, spaCy, Scikit-learn, Python
   - Github Repo: https://github.com/BALAMANIKANTA29/Resume-analyzer-using-AI

2. Student Marks Predictor
   - Description: Designed a predictive model using Linear Regression to estimate academic grade outcomes based on study hours. Supports interactive graphical trends generated using Matplotlib and served on a lightweight Flask backend.
   - Tech Stack: Python, Flask, Scikit-learn, Matplotlib
   - Github Repo: https://github.com/BALAMANIKANTA29/student-marks-prediction-using-machine-learning

3. Language Translator System
   - Description: Explored sequence mapping and machine translation under NLP, demonstrating proficiency in linguistic data processing and web frameworks.
   - Tech Stack: Python, NLP, Machine Learning

4. Car Price Prediction Engine
   - Description: Created a multi-variate regression environment predicting automotive valuations using features like mileage, model year, and technical configuration.
   - Tech Stack: Python, ML Regression, Scikit-learn

### CERTIFICATIONS & ACCOLADES
- Foundations of Modern Machine Learning (Eduskills) (07/2024 - 04/2025)
- Deloitte Australia - Data Analytics Job Simulation
- SQL and Relational Databases 101 Certification
- Python Foundation Certification
- Google Android Development in Eduskills Internship (Certification)

### LEADERSHIP, VOLUNTEERING, & EXTRA-CURRICULAR SKILLS
- Best SPOC (Single Point of Contact) Award in 2025: Awarded for excellence as a liaison/coordinating representative.
- Class Representative: Served as the official Class Representative from the start of the B.Tech program, actively interfacing with both faculty and students.
- Abhiyaan Winner 2023: Academic / project winner at KIET's celebrated festival.
- Abhiyaan Mentor 2025: Appointed as a student mentor to guide junior batches in development goals.
- KIET Event Organization Team: Active coordinating member overseeing tech meets, workshops, and college celebrations.

### GUIDELINES FOR YOUR RESPONSES:
- State facts confidently but politely. Keep response size concise and easily readable. Use lists or brief paragraphs.
- If a user asks a question about something not mentioned in the resume (e.g. 'Has he ever coded in C++?' or 'Does he have experience with cloud orchestration?'), say: "Since this information is not explicitly documented in Bala's profile, I cannot confirm his experience with it. However, Bala is highly adaptable, and specializing in CSE (AI & Data Science) enables him to pick up new technical topics rapidly."
- Provide Bala's email (balamanikanta2942005@gmail.com) and contact number (+91 6305199044) whenever the user expresses a desire to hire or get in touch.
`;

// AI Assistant Chat Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const ai = getAIClient();

    // Map history to contents structure
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        contents.push({
          role: turn.sender === "user" ? "user" : "model",
          parts: [{ text: turn.text }],
        });
      });
    }

    // Append the current message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: RESUME_CONTEXT,
        temperature: 0.7,
      },
    });

    const text = response.text || "I am currently unable to answer that. Could you try rephrasing?";
    return res.json({ text });
  } catch (err: any) {
    console.error("Gemini server endpoint error:", err);
    return res.status(500).json({
      error: "AI service error. Please make sure the GEMINI_API_KEY is configured in your Settings.",
      details: err.message,
    });
  }
});

// Configure Vite or Static Files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode with static assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully listening on port ${PORT}`);
  });
}

startServer();
