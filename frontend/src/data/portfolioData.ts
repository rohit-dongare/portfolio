export interface Project {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  badge: string;
  location: string;
  achievements: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  code: string;
  description: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  badge: string;
  link?: string;
}

export const portfolioProfile = {
  name: 'Rohit Dongare',
  role: 'Associate Software Development Engineer',
  tagline:
    'Building scalable web and mobile applications with MERN stack, real-time WebSockets, and performance optimization.',
  shortBio:
    'Software Development Engineer with experience in building scalable web and mobile applications using MERN stack and modern development tools. Skilled in RESTful API development, real-time systems, and performance optimization. Strong foundation in Data Structures, DBMS, and backend architecture with a focus on writing clean, maintainable code.',
  location: 'India',
  email: 'rohitdongare2611@gmail.com',
  phone: '+91 8767122252',
  github: 'https://github.com/rohit-dongare',
  linkedin: 'https://linkedin.com/in/rohit-dongare-6928a0229/',
  resumeUrl: '/Resume.pdf',
  telemetry: {
    status: 'SYSTEM OPERATIONAL // BRIDGENEXT SDE',
    region: 'INDIA (IST / UTC+05:30)',
    focus: 'MERN // WEBSOCKETS // REST APIs',
    buildVer: 'v2026.08',
  },
};

export const featuredProjects: Project[] = [
  {
    slug: 'chat-application',
    badge: 'REAL-TIME WEBSOCKETS',
    title: 'Real-Time Chat Application',
    subtitle: 'MERN + Socket.io + TailwindCSS',
    description:
      'Built a high-concurrency real-time chat application using the MERN stack and Socket.io supporting concurrent active users with instant bidirectional messaging.',
    impact:
      'Implemented JWT-based authentication, managed real-time user presence and state using Zustand & Context API, and designed a scalable backend with structured error handling and API separation.',
    techStack: [
      'MongoDB',
      'Express.js',
      'ReactJS',
      'Node.js',
      'Socket.io',
      'Zustand',
      'TailwindCSS',
      'JWT',
    ],
    githubUrl: 'https://github.com/rohit-dongare/chat-app',
    liveUrl: 'https://chat-app-prod-m1j9.onrender.com/',
    isFeatured: true,
  },
  {
    slug: 'eventora',
    badge: 'FULL-STACK PLATFORM',
    title: 'Eventora Platform',
    subtitle: 'MERN + Stripe + Firebase + Wit.ai',
    description:
      'Developed a full-stack event management and registration platform featuring secure payment processing, conversational AI query handling, and dynamic reporting.',
    impact:
      'Integrated Stripe payment gateway for secure transactions, built an admin dashboard with full CRUD operations & participant management, integrated Wit.ai chatbot, and generated dynamic PDF summaries for event reports.',
    techStack: [
      'MongoDB',
      'Express.js',
      'ReactJS',
      'Node.js',
      'Stripe',
      'Firebase',
      'Wit.ai',
      'OAuth',
      'PDFKit',
    ],
    githubUrl: 'https://github.com/rohit-dongare/Eventora',
    isFeatured: false,
  },
  {
    slug: 'portfolio-engine',
    badge: 'FRONTEND ARCHITECTURE',
    title: 'Editorial Brutalist Portfolio',
    subtitle: 'React 19 + TypeScript + Vite Monorepo',
    description:
      'Architected a personal portfolio and system showcase with Retro Editorial Brutalism styling, type-safe API schema contracts, and responsive layout primitives.',
    impact:
      'Engineered decoupled workspaces with shared Zod validation, achieved 100% test coverage with Vitest, and implemented tactile design tokens with zero UI framework bloat.',
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Zod',
      'TanStack Query',
      'Vitest',
      'Azure DevOps',
    ],
    githubUrl: 'https://github.com/rohit-dongare/portfolio',
    isFeatured: false,
  },
  {
    slug: 'movix',
    badge: 'MOVIE DISCOVERY',
    title: 'Movix',
    subtitle: 'Movie & TV Show Discovery Platform',
    description:
      'A movie and TV show discovery platform that helps users browse, search, and explore movies and TV shows through popular, trending, and upcoming titles, detailed information pages, personalized recommendations, and flexible filtering.',
    impact:
      'Designed a responsive discovery experience that makes it easy to find and explore content through search, recommendations, genre and rating filters, and rich title details across desktop and mobile.',
    techStack: ['React', 'JavaScript', 'TMDB API', 'REST APIs', 'Responsive Design'],
    githubUrl: 'https://github.com/rohit-dongare/projectMovix',
    liveUrl: 'https://project-movix.vercel.app/',
    isFeatured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages & Core',
    code: 'SEC-01',
    description:
      'Strong foundation in core computing, algorithms, object-oriented design, and database systems.',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'C++',
      'SQL',
      'Data Structures & Algorithms',
      'DBMS & Relational Modeling',
      'System Design Basics',
      'REST API Design',
    ],
  },
  {
    category: 'Frontend Development',
    code: 'SEC-02',
    description:
      'Component architecture, responsive mobile/web applications, and efficient state management.',
    skills: [
      'ReactJS',
      'React Native',
      'TypeScript',
      'Redux',
      'Zustand',
      'TailwindCSS',
      'Context API',
      'HTML5 & Modern CSS3',
    ],
  },
  {
    category: 'Backend & Real-Time APIs',
    code: 'SEC-03',
    description:
      'Server-side RESTful API engineering, JWT authentication, and event-driven WebSocket systems.',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JWT Authentication',
      'WebSockets (Socket.io)',
      'API Error Handling & Routing',
      'OAuth (Google Authentication)',
      'Third-Party API Integrations',
    ],
  },
  {
    category: 'Databases, DevOps & Cloud',
    code: 'SEC-04',
    description: 'Database management, containerization, Azure cloud services, and Agile tooling.',
    skills: [
      'MongoDB',
      'MSSQL',
      'Git & GitHub',
      'Docker',
      'Kubernetes',
      'Azure DevOps',
      'Postman (API Testing)',
      'AWS (Learning)',
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    badge: 'AZURE CLOUD',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/RohitDongare-8953/ADDE4F917FD1A65F?sharingId=CEDA6D77107400DD',
  },
  {
    title: 'Full Stack Web Development Bootcamp',
    issuer: 'Udemy',
    badge: 'FULL-STACK MERN',
    link: 'https://www.udemy.com/certificate/UC-fca25443-ad2b-4137-9158-9688ac64ed61/',
  },
  {
    title: 'Model Context Protocol (MCP)',
    issuer: 'Anthropic',
    badge: 'AI PROTOCOLS',
    link: 'https://www.deeplearning.ai/accomplishments/a40c27c4-75a9-44fe-8caf-2ada61f63b02?usp=sharing',
  },
];

export const experiences: Experience[] = [
  {
    company: 'Bridgenext',
    role: 'Associate Software Development Engineer',
    period: 'OCT 2025 — PRESENT',
    badge: 'ACTIVE ROLE',
    location: 'India',
    achievements: [
      'Optimized backend API logic, reducing response time and improving overall system performance.',
      'Improved frontend performance by refactoring React components and optimizing state rendering.',
      'Collaborated in an Agile environment using Git and Azure DevOps for seamless feature delivery and sprint releases.',
    ],
    techStack: ['Node.js', 'Express.js', 'ReactJS', 'REST APIs', 'Git', 'Azure DevOps'],
  },
  {
    company: 'Bridgenext',
    role: 'Trainee Software Developer',
    period: 'JUL 2025 — OCT 2025',
    badge: 'TRAINEE',
    location: 'India',
    achievements: [
      'Built reusable UI components using ReactJS to improve development efficiency across frontend modules.',
      'Integrated REST APIs with the frontend, ensuring smooth and robust data handling.',
      'Participated actively in code reviews and adhered strictly to industry-standard coding practices.',
    ],
    techStack: ['ReactJS', 'JavaScript', 'REST APIs', 'CSS3', 'Git'],
  },
  {
    company: 'Bridgenext',
    role: 'Software Developer Intern',
    period: 'JAN 2025 — JUL 2025',
    badge: 'INTERNSHIP',
    location: 'India',
    achievements: [
      'Developed mobile features using React Native and integrated backend REST APIs.',
      'Worked with Postman for comprehensive API testing, contract debugging, and endpoint verification.',
    ],
    techStack: ['React Native', 'JavaScript', 'Postman', 'REST APIs', 'Mobile Development'],
  },
];
