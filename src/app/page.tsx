import { HeroSection } from "@/components/layout/hero-section";
import { AboutSnippet } from "@/components/layout/about-snippet";
import { FeaturedProjects } from "@/components/layout/featured-projects";
import { Project } from "@/types";

// Mock data for now - replace with actual Sanity queries
const mockProjects: Project[] = [
  {
    _id: "1",
    title: "E-Commerce Platform",
    slug: { current: "ecommerce-platform" },
    description: "A full-stack e-commerce solution built with Next.js, featuring advanced search, payment integration, and admin dashboard.",
    image: { asset: { _ref: "image-1", _type: "reference" } },
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    category: "Web Application",
    featured: true,
    githubUrl: "https://github.com/krishnamurari7/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    startDate: "2024-01-01",
    status: "completed",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    _id: "2",
    title: "AI-Powered Dashboard",
    slug: { current: "ai-dashboard" },
    description: "An intelligent analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics.",
    image: { asset: { _ref: "image-2", _type: "reference" } },
    technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    category: "Data Visualization",
    featured: true,
    githubUrl: "https://github.com/krishnamurari7/ai-dashboard",
    liveUrl: "https://ai-dashboard-demo.com",
    startDate: "2024-02-01",
    status: "completed",
    _createdAt: "2024-02-01T00:00:00Z",
    _updatedAt: "2024-02-01T00:00:00Z",
  },
  {
    _id: "3",
    title: "Mobile Banking App",
    slug: { current: "mobile-banking" },
    description: "A secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.",
    image: { asset: { _ref: "image-3", _type: "reference" } },
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Biometric Auth"],
    category: "Mobile Application",
    featured: true,
    githubUrl: "https://github.com/krishnamurari7/mobile-banking",
    liveUrl: "https://mobile-banking-demo.com",
    startDate: "2024-03-01",
    status: "completed",
    _createdAt: "2024-03-01T00:00:00Z",
    _updatedAt: "2024-03-01T00:00:00Z",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <FeaturedProjects projects={mockProjects} />
    </>
  );
}
