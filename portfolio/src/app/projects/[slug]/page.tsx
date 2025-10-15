import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Target, CheckCircle } from "lucide-react";
import { Project } from "@/types";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Mock data - replace with actual Sanity queries
const projects: Project[] = [
  {
    _id: "1",
    title: "E-Commerce Platform",
    slug: { current: "ecommerce-platform" },
    description: "A full-stack e-commerce solution built with Next.js, featuring advanced search, payment integration, and admin dashboard.",
    longDescription: "This comprehensive e-commerce platform was built to handle high-volume transactions with a focus on user experience and performance. The platform includes advanced search functionality, secure payment processing, inventory management, and a complete admin dashboard for store management.",
    image: { asset: { _ref: "image-1", _type: "reference" } },
    images: [
      { asset: { _ref: "image-1a", _type: "reference" } },
      { asset: { _ref: "image-1b", _type: "reference" } },
      { asset: { _ref: "image-1c", _type: "reference" } },
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
    category: "Web Application",
    featured: true,
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    problem: "Small businesses needed an affordable, scalable e-commerce solution that could handle growing traffic and provide excellent user experience without the complexity of traditional platforms.",
    solution: "Built a modern, full-stack e-commerce platform using Next.js for optimal performance, integrated Stripe for secure payments, and implemented advanced search and filtering capabilities. The platform is fully responsive and optimized for SEO.",
    role: "Full-stack developer responsible for architecture, frontend development, backend API design, database schema, payment integration, and deployment.",
    outcome: "Successfully launched the platform with 99.9% uptime, processing over $50K in transactions in the first month. Achieved 40% faster page load times compared to competitors and received positive feedback from users.",
    startDate: "2024-01-01",
    endDate: "2024-03-15",
    status: "completed",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-03-15T00:00:00Z",
  },
  {
    _id: "2",
    title: "AI-Powered Dashboard",
    slug: { current: "ai-dashboard" },
    description: "An intelligent analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics.",
    longDescription: "This AI-powered dashboard revolutionizes how businesses analyze their data by providing intelligent insights, predictive analytics, and real-time visualizations. The system processes large datasets and provides actionable recommendations through machine learning algorithms.",
    image: { asset: { _ref: "image-2", _type: "reference" } },
    images: [
      { asset: { _ref: "image-2a", _type: "reference" } },
      { asset: { _ref: "image-2b", _type: "reference" } },
    ],
    technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL", "Docker"],
    category: "Data Visualization",
    featured: true,
    githubUrl: "https://github.com/yourusername/ai-dashboard",
    liveUrl: "https://ai-dashboard-demo.com",
    problem: "Businesses struggled to extract meaningful insights from their data due to complex analytics tools and lack of predictive capabilities.",
    solution: "Developed an intuitive dashboard that combines real-time data visualization with AI-powered insights. The system uses machine learning to identify patterns and provide predictive analytics, making data analysis accessible to non-technical users.",
    role: "Lead developer responsible for frontend architecture, data visualization components, API integration, and machine learning model deployment.",
    outcome: "Reduced data analysis time by 60% and improved decision-making accuracy by 35%. The dashboard is now used by 50+ businesses and has processed over 1TB of data.",
    startDate: "2024-02-01",
    endDate: "2024-04-30",
    status: "completed",
    _createdAt: "2024-02-01T00:00:00Z",
    _updatedAt: "2024-04-30T00:00:00Z",
  },
  {
    _id: "3",
    title: "Mobile Banking App",
    slug: { current: "mobile-banking" },
    description: "A secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.",
    longDescription: "A comprehensive mobile banking application that provides secure financial services with modern UX/UI design. The app includes biometric authentication, real-time transaction processing, budgeting tools, and investment tracking capabilities.",
    image: { asset: { _ref: "image-3", _type: "reference" } },
    images: [
      { asset: { _ref: "image-3a", _type: "reference" } },
      { asset: { _ref: "image-3b", _type: "reference" } },
      { asset: { _ref: "image-3c", _type: "reference" } },
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Biometric Auth", "Stripe", "AWS"],
    category: "Mobile Application",
    featured: true,
    githubUrl: "https://github.com/yourusername/mobile-banking",
    liveUrl: "https://mobile-banking-demo.com",
    problem: "Traditional banking apps lacked modern user experience and comprehensive financial management tools, leading to poor user engagement.",
    solution: "Created a modern mobile banking app with intuitive design, biometric security, and comprehensive financial tools including budgeting, investment tracking, and real-time notifications.",
    role: "Mobile app developer responsible for React Native development, API integration, security implementation, and app store deployment.",
    outcome: "Achieved 4.8/5 rating on app stores with 10K+ downloads in the first month. Reduced transaction processing time by 50% and improved user engagement by 70%.",
    startDate: "2024-03-01",
    endDate: "2024-06-15",
    status: "completed",
    _createdAt: "2024-03-01T00:00:00Z",
    _updatedAt: "2024-06-15T00:00:00Z",
  },
];

// Metadata generation moved to layout.tsx for client components

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug.current === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
            </div>
            {project.featured && (
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors duration-200"
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
            <span className="text-6xl font-bold text-muted-foreground">
              {project.title.charAt(0)}
            </span>
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Long Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Problem & Solution */}
            {project.problem && project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Problem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Role & Outcome */}
            {project.role && project.outcome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    My Role
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.role}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Outcome
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="ml-2">
                    {new Date(project.startDate).toLocaleDateString()} - 
                    {project.endDate ? new Date(project.endDate).toLocaleDateString() : "Present"}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === "completed" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                      : project.status === "in-progress"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="ml-2">{project.category}</span>
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
