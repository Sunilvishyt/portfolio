import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
  tag: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export interface AboutContent {
  intro: string;
  bullets: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  name: "Sunil Vishwakarma",
  role: "Full-stack developer crafting thoughtful digital experiences",
  location: "Based in India",
  intro:
    "I build polished web applications with React, Next.js, FastAPI, and Node.js, blending product thinking with strong engineering habits.",
};

export const aboutContent: AboutContent = {
  intro:
    "I’m a developer who enjoys turning ambitious ideas into reliable products. My work sits at the intersection of product experience, scalable systems, and AI-driven features.",
  bullets: [
    "Hands-on experience building end-to-end applications using modern React and backend frameworks.",
    "Comfortable connecting frontend interfaces to resilient APIs, databases, and deployment workflows.",
    "Growing interest in AI products, automation, and intelligent user experiences.",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js",
      "FastAPI",
      "Node.js",
      "Express.js",
      "LangChain",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "LLM integration",
      "Prompt engineering",
      "AI pipeline design",
      "Real-time data processing",
    ],
  },
  {
    title: "Tools & Databases",
    items: ["Git", "GitHub", "PostgreSQL", "MongoDB", "Docker"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "FOSShack Hackathon",
    description:
      "Secured 2nd place at the college level with a fast-moving, high-impact solution.",
    tag: "Winner",
  },
  {
    title: "GDG on Campus",
    description:
      "Active member contributing to a vibrant developer community and peer learning culture.",
    tag: "Community",
  },
  {
    title: "Dance & Performance",
    description:
      "Passionate performer with multiple competitions across India, bringing creativity to every team.",
    tag: "Creative",
  },
];

export const projects: Project[] = [
  {
    title: "DocuMindAI",
    description:
      "A real-time RAG-based document assistant that lets users ask questions across uploaded PDFs and documents using semantic retrieval.",
    stack: ["Next.js", "FastAPI", "LangChain", "Vector Search"],
    links: {
      github: "https://github.com",
    },
  },
  {
    title: "VibeTube",
    description:
      "A minimal video-sharing platform featuring auth, subscriptions, comments, uploads, and a personalized feed experience.",
    stack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: GithubLogoIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: LinkedinLogoIcon,
  },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: InstagramLogoIcon,
  },
];
