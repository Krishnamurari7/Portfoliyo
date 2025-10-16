"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Code, Database, Palette, Wrench, Star } from "lucide-react";
import { Skill, Experience, Testimonial } from "@/types";
import Image from "next/image";

// Metadata moved to layout.tsx for client components

// Mock data - replace with actual Sanity queries
const skills: Skill[] = [
  // Frontend
  { _id: "1", name: "React", category: "frontend", level: "expert", icon: "react" },
  { _id: "2", name: "Next.js", category: "frontend", level: "intermediate", icon: "nextjs" },
  { _id: "3", name: "JavaScript", category: "frontend", level: "expert", icon: "javascript" },
  { _id: "4", name: "TypeScript", category: "frontend", level: "beginner", icon: "typescript" },

  { _id: "5", name: "Tailwind CSS", category: "frontend", level: "expert", icon: "tailwind" },
  { _id: "6", name: "Framer Motion", category: "frontend", level: "advanced", icon: "framer" },

  // Backend
  { _id: "7", name: "Node.js", category: "backend", level: "advanced", icon: "nodejs" },

  { _id: "8", name: "Python", category: "backend", level: "intermediate", icon: "python" },
  { _id: "9", name: "Express.js", category: "backend", level: "advanced", icon: "express" },
  { _id: "10", name: "FastAPI", category: "backend", level: "intermediate", icon: "fastapi" },
  { _id: "11", name: "Django", category: "backend", level: "beginner", icon: "django" },
  // Database
  { _id: "12", name: "PostgreSQL", category: "database", level: "advanced", icon: "postgresql" },
  { _id: "13", name: "MySQL", category: "database", level: "beginner", icon: "mysql" },
  { _id: "14", name: "MongoDB", category: "database", level: "advanced", icon: "mongodb" },
  { _id: "15", name: "Firebase", category: "database", level: "intermediate", icon: "firebase" },
  // { _id: "16", name: "Redis", category: "database", level: "beginner", icon: "redis" },

  // Design
  { _id: "17", name: "Figma", category: "design", level: "intermediate", icon: "figma" },
  { _id: "18", name: "Canva", category: "design", level: "intermediate", icon: "canva" },

  // Tools
  { _id: "19", name: "Git", category: "tools", level: "intermediate", icon: "git" },
  { _id: "20", name: "GitHub", category: "tools", level: "expert", icon: "github" },
  // { _id: "21", name: "Docker", category: "tools", level: "intermediate", icon: "docker" },
  { _id: "22", name: "AWS", category: "tools", level: "intermediate", icon: "aws" },
  { _id: "23", name: "Vercel", category: "tools", level: "intermediate", icon: "vercel" },
];

const experience: Experience[] = [
  {
    _id: "1",
    title: "Audit Executive",
    company: "BLS International",
    location: "sector 62, Noida",
    startDate: "2024-03-09",
    endDate: "2025-12-03",
    current: false,
    description: "I am responsible for conducting audits of the company's financial statements and ensuring compliance with laws and regulations.",
    achievements: [
      "Conducted audits of the company's financial statements and ensured compliance with laws and regulations",
      "Prepared audit reports and presented them to the management",
      "Worked closely with the management to ensure the accuracy of the financial statements"
    ],
    technologies: ["Audit", "Financial Statements", "Compliance", "Management"],
    type: "full-time"
  },
  {
    _id: "2",
    title: "Full-Stack Developer",
    company: "Festiflick",
    location: "Remote",
    startDate: "2024-11-08",
    endDate: "2025-12-02",
    current: false,
    description: "Developed full-stack applications from concept to deployment, working closely with product and design teams.",
    achievements: [
      "Built and launched 3 successful web applications",
      "Reduced page load times by 50% through optimization",
      "Implemented automated testing increasing code quality",
      "Collaborated with cross-functional teams in agile environment"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Nuxt.js", "Canva"],
    type: "internship"
  },
  {
    _id: "3",
    title: "Software Developer",
    company: "Techviro Solutions",
    location: "patna, Bihar",
    startDate: "2025-01-06",
    current: true,
    description: "I am responsible for developing software solutions for the company's clients.",
    achievements: [
      "Developed and launched 3 successful web applications",
      "Reduced page load times by 50% through optimization",
      "Implemented automated testing increasing code quality",
      "Collaborated with cross-functional teams in agile environment",
      "Worked with clients to understand requirements and deliver solutions"
    ],
    technologies: ["React", "JavaScript", "CSS3", "canva", "next.js"],
    type: "full-time"
  }
];

// const testimonials: Testimonial[] = [
//   {
//     _id: "1",
//     name: "Sarah Johnson",
//     role: "Product Manager",
//     company: "TechCorp Solutions",
//     content: "Working with this developer has been an absolute pleasure. Their attention to detail, problem-solving skills, and ability to deliver high-quality code consistently is impressive. They&apos;re a true asset to any development team.",
//     rating: 5,
//     featured: true,
//     _createdAt: "2024-01-15T00:00:00Z"
//   },
//   {
//     _id: "2",
//     name: "Michael Chen",
//     role: "CTO",
//     company: "StartupXYZ",
//     content: "Exceptional developer with a deep understanding of modern web technologies. They consistently delivered beyond expectations and helped us scale our platform efficiently. Highly recommended!",
//     rating: 5,
//     featured: true,
//     _createdAt: "2024-02-20T00:00:00Z"
//   },
//   {
//     _id: "3",
//     name: "Emily Rodriguez",
//     role: "Design Director",
//     company: "Digital Agency Pro",
//     content: "A developer who truly understands the balance between functionality and design. Their ability to bring complex designs to life while maintaining performance is remarkable.",
//     rating: 5,
//     featured: true,
//     _createdAt: "2024-03-10T00:00:00Z"
//   }
// ];

const skillCategories = [
  { name: "Frontend", icon: Code, color: "text-blue-500" },
  { name: "Backend", icon: Database, color: "text-green-500" },
  { name: "Database", icon: Database, color: "text-purple-500" },
  { name: "Tools", icon: Wrench, color: "text-orange-500" },
  { name: "Design", icon: Palette, color: "text-pink-500" },
];

export default function AboutPage() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert": return "text-green-500";
      case "advanced": return "text-blue-500";
      case "intermediate": return "text-yellow-500";
      case "beginner": return "text-gray-500";
      default: return "text-gray-500";
    }
  };

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
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through innovative web development.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card p-8 rounded-xl border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">My Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I&apos;m Krishna Murari, a Creative Full-Stack Developer with over 1 year of experience building 
                  scalable web applications and digital solutions. My journey began with a curiosity 
                  about how websites work, which quickly evolved into a passion for creating 
                  innovative solutions that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in modern web technologies and have a proven track record of delivering 
                  high-quality projects from concept to deployment. When I&apos;m not coding, you can 
                  find me exploring new technologies, contributing to open-source projects, or 
                  sharing knowledge with the developer community.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  {/* <span className="text-4xl font-bold text-primary">KM</span>
                   */}
                  <motion.img src="/images/kri.png" alt="Krishna Murari" width={128} height={128} className="rounded-full"  />
                </div>
                <div className="text-center">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    Noida, India
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    1 year experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => {
              const categorySkills = getSkillsByCategory(category.name.toLowerCase());
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category.name} className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center mb-4">
                    <category.icon className={`h-5 w-5 mr-2 ${category.color}`} />
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </div>
                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={skill._id} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {new Date(job.startDate).toLocaleDateString()} - 
                        {job.current ? "Present" : new Date(job.endDate!).toLocaleDateString()}
                      </p>
                      <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {job.type.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-card p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just want to say hello, 
              don&apos;t hesitate to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors duration-200"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
