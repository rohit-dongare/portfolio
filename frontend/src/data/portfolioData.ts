export interface Project {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  caseStudy: {
    overview: string;
    features: string[];
    implementation: string;
  };
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
    title: 'ChatX - Real-Time Chat Application',
    subtitle: 'MERN + Socket.io + TailwindCSS',
    description:
      'Built a high-concurrency real-time chat application using the MERN stack and supporting concurrent active users with instant bidirectional messaging.',
    impact:
      'Implemented JWT-based authentication, managed real-time user presence and state using Zustand & Context API, and designed a scalable backend with structured error handling and API separation.',
    caseStudy: {
      overview:
        'ChatX is a responsive messaging platform for secure, instant communication across desktop and mobile. Socket.io keeps conversations and presence state synchronized while JWT authentication protects private user access.',
      features: [
        'Instant bidirectional messaging with Socket.io',
        'JWT-based registration, login, and authorization',
        'Online status indicators for active contacts',
        'Responsive chat experience for mobile and desktop',
      ],
      implementation:
        'MongoDB stores users and chat history, while an Express and Node.js API manages authentication and message workflows. Zustand and Context API coordinate frontend state, with Tailwind CSS and DaisyUI providing the interface.',
    },
    techStack: [
      'MongoDB',
      'Express.js',
      'ReactJS',
      'Node.js',
      'Socket.io',
      'Zustand',
      'TailwindCSS',
      'DaisyUI',
      'JWT',
      'Render',
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
    caseStudy: {
      overview:
        'Eventora is a centralized college event management system with separate workflows for students and administrators. It brings event discovery, multi-stage registration, payments, and operational reporting into one platform.',
      features: [
        'Event discovery with search, category filters, and date sorting',
        'Registration for one or multiple sub-events with capacity and fee rules',
        'Stripe payments with registration and transaction tracking',
        'Admin dashboard for events, participants, payments, and activity',
        'Wit.ai chatbot for event and registration questions',
        'PDF summaries for event, participant, and payment records',
      ],
      implementation:
        'The platform models main events and sub-events independently so each can have its own schedule, capacity, pricing, and requirements. Firebase and OAuth support identity flows, while PDFKit generates administration-ready reports.',
    },
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
    slug: 'movix',
    badge: 'MOVIE DISCOVERY',
    title: 'Movix',
    subtitle: 'Movie & TV Show Discovery Platform',
    description:
      'A movie and TV show discovery platform that helps users browse, search, and explore movies and TV shows through popular, trending, and upcoming titles, detailed information pages, personalized recommendations, and flexible filtering.',
    impact:
      'Designed a responsive discovery experience that makes it easy to find and explore content through search, recommendations, genre and rating filters, and rich title details across desktop and mobile.',
    caseStudy: {
      overview:
        'Movix is a movie and TV show discovery platform that helps users move from browsing to informed viewing decisions. It combines live catalog data with focused title pages and recommendation paths.',
      features: [
        'Search across movies and TV shows with immediate results',
        'Popular, trending, and upcoming content collections',
        'Detailed pages with cast, runtime, ratings, descriptions, and trailers',
        'Recommendations for similar movies and shows',
        'Genre, release date, and rating filters',
        'Responsive layouts optimized for mobile and desktop',
      ],
      implementation:
        'React presents the discovery and detail flows, consuming movie catalog data through REST APIs. Reusable content sections and responsive styling keep browsing consistent across screen sizes.',
    },
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
      'System Design',
      'Python',
    ],
  },
  {
    category: 'Frontend Development',
    code: 'SEC-02',
    description: 'Component architecture, responsive mobile/web applications, cloud and devops.',
    skills: ['ReactJS', 'React Native', 'TypeScript', 'TailwindCSS'],
  },
  {
    category: 'Backend ',
    code: 'SEC-03',
    description: 'Server-side RESTful API engineering, JWT authentication, .',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Fastify',
      'RBAC (Role-based access control)',
    ],
  },
  {
    category: 'Databases, DevOps & Cloud',
    code: 'SEC-04',
    description:
      'Database management, containerization, CI/CD pipelines, cloud services, and Agile tooling.',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MSSQL',
      'Git & GitHub',
      'Docker',
      'Kubernetes',
      'Postman',
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD Pipelines',
      'Azure cloud',
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
    badge: 'Associate - ACTIVE ROLE',
    location: 'India',
    achievements: [
      'Optimized backend API logic, reducing response time and improving overall system performance.',
      'Improved frontend performance by refactoring React components and optimizing state rendering.',
      'Collaborated in an Agile environment using Git and Azure DevOps for seamless feature delivery and sprint releases.',
    ],
    techStack: [
      'Node.js',
      'Fastify',
      'Express.js',
      'ReactJS',
      'REST APIs',
      'Git',
      'Azure DevOps',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
      'MongoDB',
      'Fastify',
      'RBAC',
    ],
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
    techStack: ['ReactJS', 'TypeScript', 'REST APIs', 'Git'],
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
