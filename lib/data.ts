// lib/data.ts

interface SocialLink {
  name: string;
  href: string;
  icon: string; // Placeholder for icon name (e.g., 'Github', 'Linkedin')
}

interface PersonalInfo {
  name: string;
  tagline: string;
  longBio: string;
  shortBio: string;
  profilePictureUrl: string;
  resumeUrl?: string; // Optional URL for resume
  socialLinks: SocialLink[];
}

interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string }[]; // Optional icon name for skills
}

// Removed the unused and redundant TechStackItem interface

interface JourneyEvent {
  year: string;
  title: string;
  description: string;
  icon?: string; // Optional icon name for timeline events
}

// Define the Project interface for type safety
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // More detailed description for project detail page
  tech: string[]; // Technologies used (e.g., 'Next.js', 'Tailwind CSS')
  category: string[]; // Categories for filtering (e.g., 'Full-stack', 'Frontend', 'Mobile')
  imageUrl: string; // URL to the project image/screenshot
  link: string; // Live demo link
  github: string; // GitHub repository link
  featured: boolean; // To easily mark projects for the Home page
}

export const personalInfo: PersonalInfo = {
  name: 'Shafiullah',
  tagline: 'Full-stack Developer crafting beautiful web experiences.',
  longBio: `I'm Shafiullah, a passionate Full-stack Developer with a knack for turning complex problems into intuitive, beautifully crafted web applications. My journey began with a curiosity for how things work, leading me to dive deep into both frontend design and backend architecture. I thrive on learning new technologies and continuously improving my craft to deliver high-performance and scalable solutions. When I'm not coding, you can find me exploring new design trends, contributing to open source, or delving into the latest advancements in AI. I'm always looking for exciting projects and collaborative opportunities.`,
  shortBio: `I'm a passionate full-stack developer who loves building modern, responsive, and beautiful web apps. With a strong foundation in both frontend and backend, I turn ideas into real-world solutions.`,
  profilePictureUrl: '/pictures/Profile.png', // Placeholder
  resumeUrl: '/path/to/your-resume.pdf', // Replace with actual path if you have one
  socialLinks: [
    { name: 'GitHub', href: 'https://github.com/Shafiullah717', icon: 'Github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shafi-ullah-086b83284/', icon: 'Linkedin' },
    { name: 'Email', href: 'mailto:your.shafiullahcheema@gmail.com', icon: 'Mail' },
    { name: 'Instagram', href: 'https://www.instagram.com/shafiullahcheema._/', icon: 'Instagram' },
    { name: 'Phone', href: 'https://wa.me/923027176662', icon: 'Phone' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: 'React' },
      { name: 'Next.js', icon: 'Nextjs' },
      { name: 'TypeScript', icon: 'Typescript' },
      { name: 'JavaScript', icon: 'Javascript' },
      { name: 'Tailwind CSS', icon: 'Tailwindcss' },
      { name: 'Framer Motion', icon: 'FramerMotion' },
      { name: 'Redux', icon: 'Redux' },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: 'Nodejs' },
      { name: 'Express.js', icon: 'Express' },
      { name: 'Python', icon: 'Python' },
      { name: 'Django', icon: 'Django' },
      { name: 'Next.js API Routes', icon: 'Nextjs' },
      { name: 'RESTful APIs', icon: 'Api' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: 'Mongodb' },
      { name: 'PostgreSQL', icon: 'Postgresql' },
      { name: 'Firebase Firestore', icon: 'Firebase' },
      { name: 'SQL', icon: 'Database' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: 'Git' },
      { name: 'Docker', icon: 'Docker' },
      { name: 'Vercel', icon: 'Vercel' },
      { name: 'Netlify', icon: 'Netlify' },
      { name: 'AWS Basics', icon: 'Aws' },
      { name: 'CI/CD', icon: 'CiCd' },
    ],
  },
];

export const journeyEvents: JourneyEvent[] = [
  {
    year: '2025-Present',
    title: 'Full-stack Development',
    description: 'Developed and maintained scalable web applications using Next.js, Node.js, Django, PostgreSQL and MongoDB. Contributed to significant feature rollouts and performance optimizations.',
    icon: 'Briefcase',
  },
  {
    year: '2025',
    title: 'Graduated from [Shah Abdul Latif University]',
    description: 'Graduated with a strong foundation in computer science, focusing on software development, data structures, algorithms, and web technologies.',
    icon: 'GraduationCap',
  },
  {
    year: '2023',
    title: 'Hands-on Training in Web Engineering',
    description: 'Completed hands-on training in Web Engineering during the IT Industry Readiness Bootcamp at Sukkur IBA IET Campus. building custom websites for small businesses and individuals, focusing on responsive design and user experience.',
    icon: 'Laptop',
  },
  {
    year: '2021',
    title: 'Started Learning Programming',
    description: 'Embarked on the exciting journey of coding, starting with Python and then moving into web development fundamentals.',
    icon: 'Code',
  },
];

// All Project Data for the /projects page
export const allProjects: Project[] = [
  
    {
    id: 'Mehmood Builders & Developers Website',
    title: 'Mehmood Builders & Developers Website',
    description: 'A modern, responsive portfolio website for a real estate and construction company built using Next.js and Tailwind CSS.',
    longDescription: 'A multi-page website designed for Mehmood & Co Builders and Developers to showcase their services and completed projects. Built using Next.js App Router and Tailwind CSS with dynamic routing and responsive layouts. Deployed on Vercel with clean UI and real-time feedback integration from the client.',
    tech: ['Reactjs', 'TailwindCss', 'Styled-Components'],
    category: ['Frontend', 'Web Development'],
    imageUrl: '/Projects/mehmood-builders.png', // Placeholder image
    link: 'https://mehmood-co-builders-and-developers.vercel.app/',
    github: 'https://github.com/Shafiullah717/mehmood-co-Builders-and-Developers',
    featured: true, // This is a featured project!
  },
  {
    id: 'Likho-blog-platform',
    title: 'Likho Blog Platform',
    description: 'A feature-rich markdown blog platform with authentication, user roles, and an admin dashboard.',
    longDescription: 'This comprehensive blog platform allows users to create, publish, and manage markdown-based blog posts. It features robust user authentication, an intuitive admin dashboard for content moderation, and a responsive design for an optimal reading experience across devices. Technologies include Next.js for SSR/SSG, Tailwind CSS for styling, PostgreSQL for database, and JWT for authentication.',
    tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'JWT', 'Django','DRF'],
    category: ['Full-stack', 'Web Development', 'Blogging'],
    imageUrl: '/Projects/Likho.png', // Placeholder image
    link: 'https://likho-express-freely-by-shafiullah.vercel.app/',
    github: 'https://github.com/Shafiullah717/likho-frontend-Nextjs',
    featured: true, // Mark as featured for Home page
  },
  {
    id: 'Muhib-e-Ali Daryadil Welfare Organization Website',
    title: 'Muhib-e-Ali Daryadil Welfare Organization Website',
    description: 'A clean and responsive portfolio-style website built for a welfare organization to showcase their social work and impact',
    longDescription: 'Developed a visually appealing and mobile-friendly website for Muhib-e-Ali Daryadil, a local welfare organization. Used Next.js and Tailwind CSS to build pages for their mission, services, and humanitarian work. Optimized for fast loading, SEO, and deployed via Vercel for smooth client collaboration',
    tech: ['Next.js', 'TailwindCss', 'Framermotion'],
    category: ['Frontend', 'Web Development'],
    imageUrl: '/Projects/muhib-ali.png', // Placeholder image
    link: 'https://muhib-e-ali-daryadil.vercel.app/',
    github: 'https://github.com/Shafiullah717/muhib-e-ali-daryadil',
    featured: false, // This is a featured project!
  },
  
  {
    id: 'legal-aid-assistant',
    title: 'Legal Aid Assistant',
    description: 'Designed an AI-powered legal aid application to simplify legal processes for underserved communities.',
    longDescription: 'As a final year project developed by me and Ahsan Raza, we created an AI-powered legal aid platform aimed at simplifying legal processes for underserved communities. The application leverages the Google Generative AI API to handle user queries with high precision and natural conversational flow. We built a responsive and accessible frontend using React.js and Tailwind CSS, while the backend was developed with Next.js (utilizing API Routes and Server-Side Rendering) to ensure secure, fast performance. MongoDB Atlas was used for scalable and reliable data storage, making the platform robust and production-ready.',
    tech: ['Next.js', 'Gemini Api', 'TypeScript', 'MongoDB','OAuth'],
    category: ['Full-stack', 'Productivity', 'Web Development'],
    imageUrl: '/Projects/Legal-Aid.png', // Placeholder image
    link: 'https://legal-aid-assistant-by-ahsan-and-shafiullah-bn7c.vercel.app/',
    github: 'https://github.com/Shafiullah717/AI-Powered-Legal-Aid-Assistance-By-Ahsan-and-Shafiullah-',
    featured: true, // Mark as featured
  },
  
  {
    id: 'gym-website',
    title: 'Fitness Fusion',
    description: 'Modern Gym Website – Interactive Fitness Platform Built with HTML, CSS & JavaScript',
    longDescription: 's part of a web development project, I designed and developed a modern gym website using HTML, CSS, and JavaScript to deliver an interactive and user-friendly experience. The site showcases various fitness programs, membership plans, and a dedicated gallery to highlight the gym’s environment and facilities. It features smooth navigation and responsive design, allowing users to easily explore services, subscribe to updates, and register for memberships. The project emphasizes both functionality and visual appeal, aiming to attract and engage potential clients online.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redux Toolkit', 'shadcn/ui'],
    category: ['Frontend', 'Web Development'],
    imageUrl: '/Projects/Fitness-fusion.png', // Placeholder image
    link: 'https://gym-website-muhammad-shafiullah.netlify.app/',
    github: 'https://github.com/Shafiullah717/Fitness-Fusion-Gym-Website',
    featured: false, // Not featured on Home page
  },
  {
    id: 'ai-chatbot-assistant',
    title: 'Adalynn AI-Powered Virtual Assistant',
    description: 'Created a real-time virtual assistant with speech recognition (Vosk) and speech synthesis (pyttsx3)',
    longDescription: 'Adalynn is an AI-powered virtual assistant developed by me and Ahsan Raza as part of a class project, designed to deliver real-time interaction through voice-based communication. It features speech recognition using Vosk and speech synthesis with pyttsx3 to enable natural conversations. The assistant leverages the Google Generative AI API for generating intelligent, context-aware responses. Additionally, Adalynn includes functionality for device control and web Browse, implemented with multithreading to ensure smooth and responsive performance. This project showcases our ability to integrate AI with system-level operations for an enhanced user experience.',
    tech: ['Python', 'Vosk', 'Gemini API', 'Numpy', 'matplotlib', 'NLP','tkinter'],
    category: ['Backend', 'AI/ML'],
    imageUrl: '/Projects/Adalynn.png', // Placeholder image
    link: 'https://www.linkedin.com/posts/ahsan-raza8hbb_ai-chatbot-python-ugcPost-7220805084983488513-bYHt/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEU6oKYBbxHsyILjU42YZyM440og0i-kt-M',
    github: 'https://github.com/Shafiullah717/Adalynn-Chat-Bot-with-Python',
    featured: false,
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive personal portfolio website to showcase projects, skills, and experience.',
    longDescription: 'This is very first portfolio! Built to demonstrate modern web development practices, responsive design, and engaging UI/UX. Features include dark/light mode, smooth animations with Framer Motion, and a modular component structure.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Framer Motion', 'shadcn/ui'],
    category: ['Frontend', 'Web Development', 'Portfolio'],
    imageUrl: '/Projects/Old-Protfolio.png', // Placeholder image
    link: 'https://portfolio-by-muhammad-shafiullah.netlify.app/',
    github: 'https://github.com/Shafiullah717/Portfolio-Website',
    featured: false, // This is a featured project!
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'A simple and elegant Expense Tracking App built using React.js and Styled-Components.',
    longDescription: 'A simple and elegant Expense Tracking App built using React.js and Styled-Components. This app allows users to keep track of their monthly income and expenses with a clean and user-friendly interface.',
    tech: ['Reactjs', 'TailwindCss', 'Styled-Components'],
    category: ['Frontend', 'Web Development'],
    imageUrl: '/Projects/Expense-tracker.png', // Placeholder image
    link: 'https://react-expense-checker-by-shafiullah.vercel.app/',
    github: 'https://github.com/Shafiullah717/React-Expense-Checker',
    featured: false, // This is a featured project!
  },
    
];