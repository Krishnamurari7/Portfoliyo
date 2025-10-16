export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription?: string;
  image: {
    asset: { _ref: string; _type: string };
    alt?: string;
  };
  images?: Array<{
    asset: { _ref: string; _type: string };
    alt?: string;
  }>;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  problem?: string;
  solution?: string;
  role?: string;
  outcome?: string;
  startDate: string;
  endDate?: string;
  status: "completed" | "in-progress" | "planned";
  _createdAt: string;
  _updatedAt: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: string | { 
    blocks: Array<{
      _type: string; 
      style?: string; 
      children?: { _type: string; text: string }[];
      asset?: { _ref: string; _type: string };
      alt?: string;
      caption?: string;
    }>
  }; // Support both string and block content including images
  coverImage: {
    asset: { _ref: string; _type: string };
    alt?: string;
  };
  author: {
    name: string;
    image?: {
      asset: { _ref: string; _type: string };
    };
  };
  categories: string[];
  tags: string[];
  publishedAt: string;
  readingTime: number;
  _createdAt: string;
  _updatedAt: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: {
    asset: { _ref: string; _type: string };
  };
  rating: number;
  featured: boolean;
  _createdAt: string;
}

export interface Skill {
  _id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "design" | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
  description?: string;
}

export interface Experience {
  _id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  type: "full-time" | "part-time" | "contract" | "freelance" | "internship";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}
