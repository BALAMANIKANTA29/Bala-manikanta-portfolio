import { Project, Experience, SkillCategory, EducationEntry, CertificationEntry, LeaderActivity } from "./types";

export const PERSONAL_INFO = {
  name: "Bala Manikanta Naradala",
  title: "",
  subTitle: "B.Tech CSE Student focused on Artificial Intelligence & Machine Learning",
  location: "Eluru / Kakinada, Andhra Pradesh, India",
  email: "balamanikanta2942005@gmail.com",
  phone: "6305199044",
  github: "https://github.com/BALAMANIKANTA29",
  linkedin: "https://www.linkedin.com/in/bala-manikanta-naradala-43744728b",
  avatarPrompt: "A sleek, stylish minimalist line vector icon of an intelligent data node network, in a clean, professional, high-contrast dark visual backdrop",
  objective: "To work in an organization which provides me with ample of opportunities to enhance my skills and knowledge while contributing to the organization’s growth.",
  summary: "AI Engineer and Data Analytics enthusiast pursuing B.Tech in Computer Science Engineering (Artificial Intelligence & Data Science). Passionate about building intelligent, data-driven solutions using Python, Machine Learning, SQL, Flask, React, and NLP technologies to solve real-world challenges through innovation and analytics."
};

export const PROJECTS: Project[] = [
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer & Skill Gap Predictor",
    description: "Developed a full-stack NLP application designed to analyze professional CVs/resumes against target job specs. The system leverages spaCy and scikit-learn to parse entities and calculate similarity metrics, surfacing actionable gap warnings and contextual course recommendations.",
    technologies: ["React", "Flask", "spaCy", "Scikit-Learn", "Python", "NLP", "TF-IDF", "Jaccard Similarity"],
    github: "https://github.com/BALAMANIKANTA29/Resume-analyzer-using-AI",
    outcomes: [
      "Secures automated resume screening based on lexical parsing and tokenizing pipelines.",
      "Calculates precise candidate affinity scores via TF-IDF matrix comparison and Jaccard alignment.",
      "Identifies specific skill deficits and recommends targeted educational resources dynamically."
    ],
    metrics: "Calculated match percentage on a responsive interactive dashboard UI.",
    category: "AI/NLP"
  },
  {
    id: "marks-predictor",
    title: "Student Marks Predictor",
    description: "Developed an educational analytical model to predict a student's final marks based on their daily study hours. Built from scratch with specialized Scikit-Learn linear regression models and deployed via a lightweight browser app.",
    technologies: ["Python", "Flask", "Scikit-Learn", "Matplotlib", "Linear Regression"],
    github: "https://github.com/BALAMANIKANTA29/student-marks-prediction-using-machine-learning",
    outcomes: [
      "Modeled academic score outcomes with standard Scikit-Learn supervised algorithm paths.",
      "Plotted linear correlation lines using Matplotlib for visual explanation of data scatter points.",
      "Served outputs on a responsive, accessible web form powered by Flask backend."
    ],
    metrics: "Assessed regression formulas with study milestones and interactive charts.",
    category: "ML"
  },
  {
    id: "translator",
    title: "Language Translator System",
    description: "Designed a multi-lingual NLP language translation pipeline, demonstrating proficiency in data cleansing, text tokenization, and linguistic translation sequence maps.",
    technologies: ["Python", "Natural Language Processing (NLP)", "Machine Learning"],
    outcomes: [
      "Mapped vocabulary arrays with NLP parsing methodologies.",
      "Supported automated translation conversions with reliable text preprocessing models."
    ],
    category: "AI/NLP"
  },
  {
    id: "attendance-system",
    title: "Class Attendance and Student Management System",
    description: "Built a full-stack Class Attendance and Student Management System using React, Node.js, Express, and SQLite. Implemented attendance tracking, backlog analytics, parent contact management, PDF/Excel report generation, and secure admin controls, improving academic data management and reporting efficiency.",
    technologies: ["React", "Node.js", "Express", "SQLite", "Tailwind CSS", "PDF/Excel Reports", "Full-Stack"],
    github: "https://github.com/BALAMANIKANTA29/Class-Attendance-And-Student-Management-System",
    outcomes: [
      "Engineered real-time attendance tracking and academic reporting structures.",
      "Embedded backlog analytics and automated parent communication workflows.",
      "Generated standardized verification outputs via PDF and Excel exports."
    ],
    metrics: "Optimized operational student record logging and review speeds.",
    category: "Web"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "fmml",
    role: "Foundations of Modern Machine Learning Intern",
    organization: "Eduskills / FMML Academy",
    duration: "July 2024 - April 2025",
    type: "Internship",
    description: [
      "Mastered deep theoretical ML basics, continuous data cleansing pipelines, and hyperparameter tuning structures.",
      "Formulated and trained multiple supervised classifiers and regression models using Python and Scikit-Learn.",
      "Applied clustering models and PCA dimensionality reductions to unlock patterns in complex, high-dimensional datasets."
    ],
    technologies: ["Python", "Scikit-Learn", "Machine Learning", "Data Preprocessing", "Supervised Learning", "Unsupervised Learning"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Programming & DB",
    iconName: "Code",
    skills: [
      { name: "Python", rating: 90 },
      { name: "SQL (MySQL)", rating: 85 },
      { name: "JavaScript", rating: 75 }
    ]
  },
  {
    title: "Artificial Intelligence & ML",
    iconName: "BrainCircuit",
    skills: [
      { name: "Machine Learning", rating: 88 },
      { name: "Natural Language Processing (NLP)", rating: 85 },
      { name: "Scikit-Learn", rating: 88 },
      { name: "spaCy", rating: 78 }
    ]
  },
  {
    title: "Web & Analytics",
    iconName: "Globe",
    skills: [
      { name: "React", rating: 80 },
      { name: "Flask", rating: 82 },
      { name: "HTML5 & CSS3", rating: 85 },
      { name: "Recharts", rating: 75 },
      { name: "Data Visualization (Matplotlib)", rating: 85 }
    ]
  },
  {
    title: "Professional & Tools",
    iconName: "PencilRuler",
    skills: [
      { name: "Git / GitHub", rating: 85 },
      { name: "Microsoft Excel", rating: 80 },
      { name: "Collaboration & Adaptability", rating: 92 },
      { name: "Leadership", rating: 95 }
    ]
  }
];

export const EDUCATION: EducationEntry[] = [
  {
    id: "btech",
    institution: "Kakinada Institute of Engineering and Technology (KIET)",
    degree: "Bachelor of Technology (B.Tech)",
    duration: "September 2023 - May 2027 (Expected)",
    score: "CGPA: 7.5 / 10",
    achievements: [
      "Specialization in CSE (Artificial Intelligence & Data Science)",
      "Best SPOC (Single Point of Contact) Award in 2025 across campus operations.",
      "Class Representative since day one, mediating student-faculty discussions.",
      "Event Organization Team member coordinating major tech festivals."
    ]
  },
  {
    id: "inter",
    institution: "Sri Chaitanya College of Education / Junior College",
    degree: "Board of Intermediate Education, MPC",
    duration: "September 2021 - April 2023",
    score: "CGPA: 8.9 / 10",
    achievements: [
      "Rigorous core curriculum in Mathematics, Physics, and Chemistry (MPC).",
      "Secured outstanding academic results across standardized state boards."
    ]
  },
  {
    id: "ssc",
    institution: "Aditya E.M. School / Jesus English Medium High School",
    degree: "SSC (10th Standard / Matriculation)",
    duration: "April 2020 - May 2021",
    score: "CGPA: 8.9 / 10"
  }
];

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    id: "fmml-cert",
    title: "Foundations of Modern Machine Learning Certification",
    issuer: "I-HUB IIIT HYDERABAD",
    date: "April 2025",
    credentialUrl: "https://www.linkedin.com/posts/bala-manikanta-naradala-43744728b_this-is-a-certificate-of-proficiency-awarded-activity-7370394580422230016-efQL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZd1asBehBe1D32gWHrfilzmLd0-DFZVPs"
  },
  {
    id: "deloitte",
    title: "Deloitte Australia - Data Analytics Job Simulation Certification",
    issuer: "Deloitte (via Forage)",
    credentialUrl: "https://www.linkedin.com/posts/bala-manikanta-naradala-43744728b_deloitte-forage-dataanalytics-share-7468238955801624576-_3i-/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZd1asBehBe1D32gWHrfilzmLd0-DFZVPs"
  },
  {
    id: "sql-101",
    title: "SQL and Relational Databases 101 Certificate",
    issuer: "Cognitive Class",
    credentialUrl: "https://www.linkedin.com/posts/bala-manikanta-naradala-43744728b_im-happy-to-share-that-i-have-successfully-activity-7373749059242745856-R-Zy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZd1asBehBe1D32gWHrfilzmLd0-DFZVPs"
  },
  {
    id: "python-found",
    title: "Python Foundation Certification",
    issuer: "Eduskills",
    credentialUrl: "https://www.linkedin.com/posts/bala-manikanta-naradala-43744728b_completed-training-in-python-full-stack-development-activity-7334921722267148288-pjC9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZd1asBehBe1D32gWHrfilzmLd0-DFZVPs"
  },
  {
    id: "android-dev",
    title: "Google Android Development in Eduskills Internship",
    issuer: "Google / Eduskills",
    credentialUrl: "https://www.linkedin.com/posts/bala-manikanta-naradala-43744728b_androiddeveloper-googlefordevelopers-aicte-share-7468237920403894273-nfK3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZd1asBehBe1D32gWHrfilzmLd0-DFZVPs"
  }
];

export const LEADERSHIP: LeaderActivity[] = [
  {
    id: "best-spoc",
    title: "Best SPOC Award (Single Point of Contact)",
    role: "KIET Campus Representative Liaison",
    duration: "2025",
    description: "Awarded campus-wide accolade for exceptional reliability, active leadership, and success in coordinating administrative and student internship alignments.",
    highlight: "Awarded Best SPOC 2025"
  },
  {
    id: "class-rep",
    title: "Class Representative",
    role: "Student Representative Leader",
    duration: "2023 - Present",
    description: "Elected representative of the CSE Artificial Intelligence and Data Science cohort. Facilitated smooth curriculum delivery, led peer study circles, and organized department level hackathons."
  },
  {
    id: "abhiyaan-winner",
    title: "Abhiyaan Winner 2023",
    role: "Project Competition Winner",
    duration: "2023",
    description: "Conceptualized and presented a technical solution to faculty and judges, securing the first prize in KIET's premium tech showcase event."
  },
  {
    id: "abhiyaan-mentor",
    title: "Abhiyaan Mentor 2025",
    role: "Technical Student Advisor",
    duration: "2025",
    description: "Appointed as an official event mentor to coach junior students on software engineering projects, system configurations, and presentation skills."
  },
  {
    id: "event-team",
    title: "Event Organization Team Member",
    role: "KIET Student Event Organizer",
    duration: "2023 - Present",
    description: "Spearheaded management tasks, volunteer logistics, and speaker relations for department symposia, tech meetings, and cultural assemblies."
  }
];
