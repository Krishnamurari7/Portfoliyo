"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <span className="text-4xl font-bold text-muted-foreground">
            {project.title.charAt(0)}
          </span>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
              aria-label="View live project"
            >
              <ExternalLink className="h-5 w-5 text-white" />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
              aria-label="View source code"
            >
              <Github className="h-5 w-5 text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Project Links */}
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${project.slug.current}`}
            className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
          >
            View Details →
          </Link>
          
          <div className="flex space-x-2">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-300"
                aria-label="View live project"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-300"
                aria-label="View source code"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

