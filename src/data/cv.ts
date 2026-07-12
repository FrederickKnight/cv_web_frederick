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
  menu: {
    textPortfolioWeb: string;
  };
}

export const cv: Record<string, CvData> = {
  es: {
    role: "Backend Developer - Full Stack - Cloud",

    // summary:
    //   "Desarrollador Full Stack especializado en backend con Python y despliegue de aplicaciones cloud. Tengo experiencia diseñando e implementando software para producción, desde APIs REST y aplicaciones móviles hasta infraestructura en AWS con Docker. Me enfoco en construir soluciones mantenibles, automatizar procesos y desarrollar software que resuelva problemas reales.",
    summary:
      "Desarrollador Full Stack con enfoque en backend y diseño de APIs. Tengo experiencia desarrollando software para producción, incluyendo plataformas SaaS, APIs REST, aplicaciones móviles e infraestructura cloud utilizando Docker y PostgreSQL. Disfruto diseñar sistemas mantenibles, crear herramientas para desarrolladores y automatizar procesos mediante soluciones escalables.",
    sections: {
      summary: "Resumen",
      projects: "Proyectos",
      experience: "Experiencia Profesional",
      education: "Educación",
      skills: "Habilidades",
    },

    projects: [
      {
        name: "Sistema de Gestión de Restaurante",
        badges: ["En Producción", "Freelance"],
        stack: [
          "Flask",
          "FastAPI",
          "React Native",
          "Docker",
          "AWS EC2/RDS",
          "WebSockets",
          "PostgreSQL",
          "Tkinter",
        ],
        bullets: [
          "Diseñé e implementé un sistema POS y una API REST utilizada en producción para centralizar la gestión del restaurante.",
          "Desarrollé una aplicación móvil en React Native para la administración de mesas, pedidos y tickets.",
          "Implementé un servicio de impresión automática en tiempo real utilizando WebSockets y Python.",
          "Desplegué la infraestructura en AWS utilizando Docker, EC2 y PostgreSQL en RDS.",
        ],
      },
      {
        name: "Plataforma de Feature Flags",
        badges: ["Proyecto Personal"],
        stack: [
          "NestJS",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Docker",
          "SDK TypeScript",
        ],
        bullets: [
          "Diseñé y desarrollé una API REST para administrar proyectos, feature flags y API keys.",
          "Implementé autenticación independiente mediante JWT para administradores y API keys para aplicaciones cliente.",
          "Desarrollé un SDK en TypeScript para simplificar la integración y evaluación de feature flags desde aplicaciones externas.",
          "Implementé almacenamiento seguro de API keys mediante hashing y soporte para despliegues graduales mediante rollouts porcentuales.",
        ],
      },
      // {
      //   name: "Plataforma de Chat con IA Conversacional",
      //   badges: [],
      //   stack: [
      //     "Python",
      //     "Flask",
      //     "SQLAlchemy",
      //     "Gemini AI",
      //     "Astro",
      //     "React",
      //     "TypeScript",
      //     "REST API",
      //     "WebSockets",
      //   ],
      //   bullets: [
      //     "Desarrollé una plataforma de chat en tiempo real con backend en Flask y frontend en Astro y React.",
      //     "Integré Gemini AI para conversaciones asistidas mediante APIs REST y WebSockets.",
      //   ],
      // },
    ],

    experience: [
      {
        role: "Auxiliar de Experiencia Digital",
        company: "Puerto de Liverpool",
        location: "Merida, Yucatan",
        date: "04/2026 - 07/2026",
        bullets: [
          "Diseñé e implementé automatizaciones con Google Apps Script utilizadas diariamente por el equipo.",
          "Integré servicios mediante APIs REST para eliminar procesos manuales.",
          "Desarrollé aplicaciones internas con AppSheet para digitalizar procesos operativos.",
          "Reduje aproximadamente un 50% los tiempos de captura y procesamiento de información.",
          "Colaboré con distintas áreas para identificar oportunidades de mejora y automatización.",
        ],
      },
      {
        role: "Pasante - Gestión de Mantenimiento y Confiabilidad",
        company: "PEMEX - Petróleos Mexicanos",
        location: "Poza Rica, Veracruz",
        date: "02/2019 - 08/2019",
        bullets: [
          "Consulté y analicé bases de datos para la extracción y procesamiento de información operativa relacionada con mantenimiento y confiabilidad.",
        ],
      },
    ],

    education: {
      degree: "Licenciatura en Ingeniería en Tecnologías Computacionales",
      school: "Universidad CNCI - México",
      date: "",
    },

    skills: [
      { label: "Lenguajes", values: ["Python", "JavaScript", "Java"] },
      {
        label: "Backend",
        values: [
          "NestJS",
          "Flask",
          "FastAPI",
          "Prisma",
          "SQLAlchemy",
          "REST APIs",
          "WebSockets",
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
          "Docker Compose",
          "AWS EC2",
          "AWS RDS",
          "Git",
          "GitHub",
          "CI/CD",
        ],
      },
      { label: "Base de Datos", values: ["PostgreSQL", "SQLite"] },
    ],

    skill_sections: {
      languages: "Lenguajes",
      database: "Base de Datos",
    },
    menu: {
      textPortfolioWeb: "Mi Portfolio Web",
    },
  },

  en: {
    role: "Backend Developer - Full Stack - Cloud",

    // summary:
    //   "Full Stack Developer specialized in backend development with Python and cloud application deployment. I have experience designing and implementing production software, from REST APIs and mobile applications to AWS infrastructure with Docker. I focus on building maintainable solutions, automating processes, and developing software that solves real-world problems.",
    summary:
      "Full Stack Developer focused on backend engineering and API design. I have experience building production software, including SaaS platforms, REST APIs, mobile applications, and cloud infrastructure using Docker and PostgreSQL. I enjoy designing maintainable systems, building developer tools, and creating scalable solutions.",
    sections: {
      summary: "Summary",
      projects: "Projects",
      experience: "Professional Experience",
      education: "Education",
      skills: "Skills",
    },

    projects: [
      {
        name: "Restaurant Management System",
        badges: ["In Production", "Freelance"],
        stack: [
          "Flask",
          "FastAPI",
          "React Native",
          "Docker",
          "AWS EC2/RDS",
          "WebSockets",
          "PostgreSQL",
          "Tkinter",
        ],
        bullets: [
          "Designed and implemented a production-ready POS system and REST API to centralize restaurant operations.",
          "Developed a React Native mobile application for table, order, and ticket management.",
          "Implemented an automatic real-time printing service using WebSockets and Python.",
          "Deployed the infrastructure on AWS using Docker, EC2, and PostgreSQL on RDS.",
        ],
      },
      {
        name: "Feature Flag Platform",
        badges: ["Personal Project"],
        stack: [
          "NestJS",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Docker",
          "TypeScript SDK",
        ],
        bullets: [
          "Designed and developed a REST API to manage projects, feature flags, and API keys.",
          "Implemented separate authentication flows using JWT for administrators and API keys for client applications.",
          "Built a TypeScript SDK to simplify feature flag integration and evaluation in external applications.",
          "Implemented secure API key hashing and support for percentage-based gradual rollouts.",
        ],
      },
      // {
      //   name: "Conversational AI Chat Platform",
      //   badges: [],
      //   stack: [
      //     "Python",
      //     "Flask",
      //     "SQLAlchemy",
      //     "Gemini AI",
      //     "Astro",
      //     "React",
      //     "TypeScript",
      //     "REST API",
      //     "WebSockets",
      //   ],
      //   bullets: [
      //     "Developed a real-time chat platform with a Flask backend and an Astro and React frontend.",
      //     "Integrated Gemini AI through REST APIs and WebSockets for AI-assisted conversations.",
      //   ],
      // },
    ],

    experience: [
      {
        role: "Digital Experience Assistant",
        company: "Puerto de Liverpool",
        location: "Merida, Yucatan",
        date: "04/2026 - 07/2026",
        bullets: [
          "Designed and implemented Google Apps Script automations used in daily operations.",
          "Integrated services through REST APIs to eliminate manual processes.",
          "Developed internal applications with AppSheet to digitize operational processes.",
          "Reduced data entry and information processing time by approximately 50%.",
          "Collaborated with different teams to identify automation and process improvement opportunities.",
        ],
      },
      {
        role: "Intern - Maintenance and Reliability Management",
        company: "PEMEX - Petróleos Mexicanos",
        location: "Poza Rica, Veracruz",
        date: "02/2019 - 08/2019",
        bullets: [
          "Queried and analyzed maintenance databases to extract and process operational information.",
        ],
      },
    ],

    education: {
      degree: "Bachelor's Degree in Computer Technologies Engineering",
      school: "Universidad CNCI - Mexico",
      date: "",
    },

    skills: [
      { label: "Languages", values: ["Python", "JavaScript", "Java"] },
      {
        label: "Backend",
        values: [
          "NestJS",
          "Flask",
          "FastAPI",
          "Django",
          "Prisma",
          "SQLAlchemy",
          "REST APIs",
          "WebSockets",
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
          "Docker Compose",
          "AWS EC2",
          "AWS RDS",
          "Git",
          "GitHub",
          "CI/CD",
        ],
      },
      { label: "Database", values: ["PostgreSQL", "SQLite"] },
    ],

    skill_sections: {
      languages: "Languages",
      database: "Database",
    },
    menu: {
      textPortfolioWeb: "My Web Portfolio",
    },
  },
};
