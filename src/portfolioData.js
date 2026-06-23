import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Server,
  Sparkles
} from "lucide-react";

export const profile = {
  name: "N.Eswar Reddy", 
  initials: "E",
  location: "Hyderabad, India",
  role: "Full-Stack Developer", 
  heroTitle: {
    before: "Full-Stack ",
    highlight: "Developer",
    after: " building web and mobile apps"
  },
  heroSummary:
    "I'm N. Eswar Reddy, an Associate Software Engineer with 1 year of full-stack experience. I build scalable applications with React, Next.js, React Native, Node.js, Express, MongoDB, MySQL, REST APIs, authentication, testing, and clean responsive interfaces.",
  email: "neswar215@gmail.com",
  phone: "7815919728"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const links = {
  email: "mailto:neswar215@gmail.com",
  phone: "tel:+917815919728",
  resume: "/assets/n-eswar-reddy-resume.pdf",
  linkedIn: "https://www.linkedin.com/in/eswar-reddy-33bbb7189/",
  github: "https://github.com/Eswar-521",
  location: "https://www.google.com/maps/search/Hyderabad"
};

export const stats = [
  { value: "1+", label: "Year full-stack experience" },
  { value: "4", label: "Web and mobile projects" },
  { value: "8.8", label: "CSE GPA at Bharath University" },
  { value: "2", label: "Professional certifications" }
];

export const socialLinks = [
  { label: "LinkedIn", href: links.linkedIn, icon: Linkedin },
  { label: "GitHub", href: links.github, icon: Github },
  { label: "Call", href: links.phone, icon: Phone }
];

export const experiences = [
  {
    period: "Feb 2025 - Present",
    role: "Full Stack Developer",
    company: "Tinitiate",
    points: [
      "Built scalable web applications with Next.js, React, protected dashboards, REST APIs, and production-ready user flows.",
      "Implemented secure authentication with Google OAuth through NextAuth, protected routes, and role-based access patterns.",
      "Worked on testing, debugging, deployment support, performance validation, and issue resolution during development."
    ],
    tags: ["Next.js", "React", "NextAuth", "REST APIs", "PWA", "Testing"]
  }
];

export const projects = [
  {
    title: "Next.js Tutorial Platform",
    eyebrow: "Full-stack learning app",
    description:
      "A scalable tutorial platform with Google OAuth, protected dashboards, GitHub JSON content loading, Markdown tutorials, syntax highlighting, favorites, search, and progress tracking.",
    tags: ["Next.js", "React", "NextAuth", "REST APIs", "PWA"],
    metric: "Offline-ready PWA",
    icon: Layers3
  },
  {
    title: "Gym Wellness Management App",
    eyebrow: "Role-based mobile app",
    description:
      "A React Native app with login/signup, role-based access, dashboards for Trainers, Members, Sellers, and Admins, subscription tracking, sales monitoring, payments, and user administration.",
    tags: ["React Native", "RBAC", "JSON APIs", "Testing", "Mobile UI"],
    metric: "4 user roles",
    icon: BriefcaseBusiness
  },
  {
    title: "LinkedIn-Inspired Social App",
    eyebrow: "MERN social platform",
    description:
      "A social media platform with JWT authentication, bcrypt security, REST APIs, posts, connection requests, likes, comments, live notifications, image uploads, and responsive state-managed UI.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    metric: "Real-time features",
    icon: Sparkles
  },
  {
    title: "MERN Book Store",
    eyebrow: "CRUD web application",
    description:
      "A full-stack bookstore with complete CRUD operations, Mongoose APIs, React/Vite frontend, Tailwind CSS, React Router, modals, alerts, and card-based responsive layouts.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    metric: "CRUD + REST APIs",
    icon: GraduationCap
  }
];

export const skills = [
  {
    title: "Languages",
    icon: Code2,
    items: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "SQL"]
  },
  {
    title: "Frontend",
    icon: Server,
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS"] 
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MongoDB"]
  },
  {
    title: "Tools & Concepts",
    icon: Rocket,
    items: ["Git", "GitHub", "Postman", "Docker", "Netlify"]
  }
];

export const certifications = [
  {
    label: "Certification",
    title: "Software Engineering Virtual Experience Program, Accenture (Forage)",
    icon: BadgeCheck
  },
  {
    label: "Certification",
    title: "Web Development Internship, Ramanasoft Technologies",
    icon: BadgeCheck
  }
];

export const contactLinks = [
  {
    label: "Location",
    value: "Hyderabad, India",
    href: links.location,
    icon: MapPin
  },
  {
    label: "Email",
    value: "neswar215@gmail.com",
    href: links.email,
    icon: Mail
  },
  {
    label: "Phone",
    value: "7815919728",
    href: links.phone,
    icon: Phone
  },
  {
    label: "LinkedIn",
    value: "/in/eswar-reddy-33bbb7189",
    href: links.linkedIn,
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: "Search neswar215",
    href: links.github,
    icon: Github
  },
  {
    label: "Resume",
    value: "Open PDF",
    href: links.resume,
    icon: Rocket
  }
];
