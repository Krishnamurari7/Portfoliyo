"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Project } from "@/types";

// Metadata moved to layout.tsx for client components

// Mock data for now - replace with actual Sanity queries
const allProjects: Project[] = [
  {
    _id: "1",
    title: "E-Commerce Platform",
    slug: { current: "ecommerce-platform" },
    description: "A full-stack e-commerce solution built with Next.js, featuring advanced search, payment integration, and admin dashboard.",
    image: { asset: { _ref: "/images/nexjs.jpeg", _type: "reference" } },
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    category: "Web Application",
    featured: true,
    githubUrl: "https://github.com/Krishnamurari7/ecommerce",
    liveUrl: "https://ayukrritiayurveda.com/",
    startDate: "2024-01-01",
    status: "completed",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    _id: "2",
    title: "car browser game",
    slug: { current: "car-browser-game" },
    description: "A car browser game built with Next.js, featuring advanced search, payment integration, and admin dashboard.",
    image: { asset: { _ref: "/images/developer.jpeg", _type: "reference" } },
    technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    category: "Data Visualization",
    featured: true,
    githubUrl: "https://github.com/Krishnamurari7/car-game",
    liveUrl: "https://krishna-murari-game.vercel.app/",
    startDate: "2024-02-01",
    status: "completed",
    _createdAt: "2024-02-01T00:00:00Z",
    _updatedAt: "2024-02-01T00:00:00Z",
  },
  {
    _id: "3",
    title: "hospital ",
    slug: { current: "hospital portfoliyo" },
    description: "hospital management system.",
    image: { asset: { _ref: "/images/database.jpeg", _type: "reference" } },
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Biometric Auth"],
    category: "Mobile Application",
    featured: true,
    githubUrl: "https://github.com/Krishnamurari7/virat-hospital",
    liveUrl: "https://vimsedu.in/",
    startDate: "2024-03-01",
    status: "completed",
    _createdAt: "2024-03-01T00:00:00Z",
    _updatedAt: "2024-03-01T00:00:00Z",
  },
  {
    _id: "4",
    title: "Task Management System",
    slug: { current: "task-management" },
    description: "A collaborative task management system with real-time updates, team collaboration, and project tracking capabilities.",
    image: { asset: { _ref: "/images/ui.jpeg", _type: "reference" } },
    technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "Redis"],
    category: "Web Application",
    featured: false,
    githubUrl: "https://github.com/Krishnamurari7/jry_backend",
    liveUrl: "https://jrynet.com/about",
    startDate: "2024-04-01",
    status: "completed",
    _createdAt: "2024-04-01T00:00:00Z",
    _updatedAt: "2024-04-01T00:00:00Z",
  },
  {
    _id: "5",
    title: "restaurant",
    slug: { current: "restaurant" },
    description: "A restaurant management system with real-time updates, team collaboration, and project tracking capabilities.",
    image: { asset: { _ref: "/images/api.jpeg", _type: "reference" } },
    technologies: ["Python", "Django", "PostgreSQL", "Chart.js", "Docker"],
    category: "Data Visualization",
    featured: false,
    githubUrl: "https://github.com/Krishnamurari7/resturent",
    liveUrl: "https://weather-analytics-demo.com",
    startDate: "2024-05-01",
    status: "completed",
    _createdAt: "2024-05-01T00:00:00Z",
    _updatedAt: "2024-05-01T00:00:00Z",
  },
];

const categories = ["All", "Web Application", "Mobile Application", "Data Visualization"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development,
            from concept to deployment.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-border hover:bg-accent transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {allProjects.length}
            </div>
            <div className="text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {allProjects.filter(p => p.status === "completed").length}
            </div>
            <div className="text-muted-foreground">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {allProjects.filter(p => p.featured).length}
            </div>
            <div className="text-muted-foreground">Featured</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
