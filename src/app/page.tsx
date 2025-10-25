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
