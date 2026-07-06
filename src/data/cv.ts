// src/data/cv.ts

// src/data/cv.ts

export interface CvData {
  role: string;
  summary: string;
  sections: {
    summary: string;
    projects: string;
    experience: string;
    education: string;
    skills: string;
  };
  projects: {
    name: string;
    badges: string[];
    stack: string[];
    bullets: string[];
  }[];
  experience: {
    role: string;
    company: string;
    location: string;
    date: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    school: string;
    date: string;
  };
  skills: {
    label: string;
    values: string[];
  }[];
  skill_sections: {
    languages: string;
    database: string;
  };
}

export const cv: Record<string, CvData> = {
  es: {
    // ── HEADER ──
    role: "Desarrollador Full Stack - DevOps",

    // ── RESUMEN ──
    summary:
      "Desarrollador Full Stack y DevOps con experiencia práctica construyendo y desplegando sistemas en producción. Desarrollé como freelance un sistema completo de gestión de pedidos - API REST en Flask, app móvil en React Native e infraestructura en AWS con Docker - actualmente en uso real. Stack principal: Python, Flask, FastAPI, PostgreSQL, Docker, AWS, React.",

    // ── SECCIONES ──
    sections: {
      summary: "Resumen",
      projects: "Proyectos",
      experience: "Experiencia Profesional",
      education: "Educación",
      skills: "Habilidades",
    },

    // ── PROYECTOS ──
    projects: [
      {
        name: "Sistema de Gestión de Pedidos - Bestiario Sushi",
        badges: ["En Producción", "Freelance"],
        stack: [
          "Flask",
          "React Native",
          "Docker",
          "AWS EC2/RDS",
          "WebSockets",
          "PostgreSQL",
          "Tkinter",
        ],
        bullets: [
          "Diseñé y desarrollé API REST en Flask con autenticación y autorización basada en roles para gestión de pedidos en producción.",
          "Desarrollé app móvil en React Native conectada a la API mediante HTTP para seguimiento de tickets.",
          "Desplegué infraestructura en AWS EC2 con Docker y base de datos PostgreSQL en RDS.",
          "Implementé sistema de comunicación en tiempo real vía WebSockets con cliente desktop en Python/Tkinter para impresión automática.",
        ],
      },
      {
        name: "Plataforma de Chat con IA Conversacional",
        badges: [],
        stack: [
          "Python",
          "Flask",
          "SQLAlchemy", 
          "Gemini AI",
          "Astro",
          "React",
          "TypeScript",
          "REST API",
          "WebSockets",
        ],
        bullets: [
          "Desarrollé una plataforma de chat en tiempo real con backend en Flask y frontend en Astro/React, integrando Gemini AI para conversaciones.",
          "Implementé APIs REST, comunicación bidireccional mediante WebSockets, autenticación de usuarios y manejo de sesiones.",
        ],
      },
    ],

    // ── EXPERIENCIA ──
    experience: [
      {
        role: "Auxiliar de Experiencia Digital",
        company: "Liverpool Puerto",
        location: "Merida, Yucatan",
        date: "04/2019 - Actual",
        bullets: [
          "Tecnologías utilizadas: JavaScript, Google Apps Script, AppSheet, REST APIs, Google Sheets y Excel.",
          "Integré servicios externos mediante consumo de APIs REST.",
          "Implementé automatizaciones con Google Apps Script (JavaScript)",
          "Desarrollé mecanismos de autenticación y validación para herramientas de uso interno.",
          "Desarrollé aplicaciones internas con AppSheet para digitalizar y optimizar procesos operativos.",
        ],
      },
      {
        role: "Pasante - Gestión de Mantenimiento y Confiabilidad",
        company: "PEMEX - Petróleos Mexicanos",
        location: "Poza Rica, Veracruz",
        date: "02/2019 - 08/2019",
        bullets: [],
      },
    ],

    // ── EDUCACIÓN ─
    education: {
      degree: "Licenciatura en Ingeniería en Tecnologías Computacionales",
      school: "Universidad CNCI - México",
      date: "09/2018 - 12/2023",
    },

    // ── HABILIDADES ──
    skills: [
      { label: "Lenguajes", values: ["Python", "JavaScript", "Java"] },
      {
        label: "Backend",
        values: [
          "Flask",
          "FastAPI",
          "Django",
          "SQLAlchemy",
          "WebSockets",
          "REST APIs",
        ],
      },
      {
        label: "Frontend",
        values: [
          "React",
          "React Native",
          "TypeScript",
          "Astro",
          "HTML5",
          "CSS3",
        ],
      },
      {
        label: "DevOps",
        values: [
          "Docker",
          "AWS EC2",
          "AWS RDS",
          "Git",
          "GitHub",
          "CI/CD",
          "Terraform",
        ],
      },
      { label: "Base de Datos", values: ["PostgreSQL", "SQLite"] },
    ],
    skill_sections: {
      languages: "Lenguajes",
      database: "Base de Datos",
    },
  },

  // ══════════════════════════════════════════
  en: {
    // ── HEADER ──
    role: "Full Stack Developer - DevOps",

    // ── SUMMARY ──
    summary:
      "FullsStack Developer and DevOps with hands-on experience building and deploying systems in production. Built as freelance a complete order management system - REST API in Flask, mobile app in React Native and AWS infrastructure with Docker - currently in real-world daily use. Core stack: Python, Flask, FastAPI, PostgreSQL, Docker, AWS, React. Looking for my first formal role to grow technically within a strong engineering team.",

    // ── SECTIONS ──
    sections: {
      summary: "Summary",
      projects: "Projects",
      experience: "Professional Experience",
      education: "Education",
      skills: "Skills",
    },

    // ── PROJECTS ──
    projects: [
      {
        name: "Order Management System - Bestiario Sushi",
        badges: ["In Production", "Freelance"],
        stack: [
          "Flask",
          "React Native",
          "Docker",
          "AWS EC2/RDS",
          "WebSockets",
          "PostgreSQL",
          "Tkinter",
        ],
        bullets: [
          "Designed and developed a REST API in Flask with authentication and role-based authorization for order management in production.",
          "Built a React Native mobile app connected to the API via HTTP ticket tracking.",
          "Deployed infrastructure on AWS EC2 with Docker and PostgreSQL database on RDS.",
          "Implemented real-time communication via WebSockets with a Python/Tkinter desktop client for automatic order printing.",
        ],
      },
      {
        name: "AI Chat API",
        badges: [],
        stack: ["Flask", "SQLAlchemy", "WebSockets", "Gemini AI", "Python"],
        bullets: [
          "Developed a modular Flask API with SQLAlchemy and Gemini AI integration for intelligent real-time conversations via WebSockets.",
          "Implemented user authentication, session management and scalable class-based inheritance architecture.",
          "Designed modular architecture with Python class inheritance for reusable and scalable WebSocket handlers.",
        ],
      },
      {
        name: "Real-Time Chat Web App",
        badges: [],
        stack: ["Astro", "React", "TypeScript", "REST API", "WebSockets"],
        bullets: [
          "Built frontend in Astro and React consuming REST API and WebSockets in real time with TypeScript.",
          "Implemented REST API consumption with React state management and bidirectional real-time communication via WebSockets.",
        ],
      },
    ],

    // ── EXPERIENCE ──
    experience: [
      {
        role: "Auxiliar de Experiencia Digital",
        company: "Liverpool Puerto",
        location: "Merida, Yucatan",
        date: "04/2019 - Actual",
        bullets: [],
      },
      {
        role: "Intern - Maintenance and Reliability Management",
        company: "PEMEX - Petróleos Mexicanos",
        location: "Poza Rica, Veracruz",
        date: "02/2019 - 08/2019",
        bullets: [
          "Queried and analyzed maintenance databases for extraction and processing of operational data.",
        ],
      },
    ],

    // ── EDUCATION ──
    education: {
      degree: "B.S. in Computer Technologies Engineering (Computer Science)",
      school: "Universidad CNCI - Mexico",
      date: "09/2018 - 12/2023",
    },

    // ── SKILLS ──
    skills: [
      { label: "Languages", values: ["Python", "JavaScript", "Java"] },
      {
        label: "Backend",
        values: [
          "Flask",
          "FastAPI",
          "Django",
          "SQLAlchemy",
          "WebSockets",
          "REST APIs",
        ],
      },
      {
        label: "Frontend",
        values: [
          "React",
          "React Native",
          "TypeScript",
          "Astro",
          "HTML5",
          "CSS3",
        ],
      },
      {
        label: "DevOps",
        values: [
          "Docker",
          "AWS EC2",
          "AWS RDS",
          "Git",
          "GitHub",
          "CI/CD",
          "Terraform",
        ],
      },
      { label: "Database", values: ["PostgreSQL", "SQLite"] },
    ],
    skill_sections: {
      languages: "Languages",
      database: "Database",
    },
  },
};
