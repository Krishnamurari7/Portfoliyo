"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { HeroScene } from "@/components/3d/hero-scene";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/krishnamurari7",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/krishnamurari7",
    icon: Linkedin,
  },
];

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-30">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="gradient-text">Krishna Murari</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light"
          >
            Full-Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions and delivering exceptional user experiences 
            through modern technologies and clean, efficient code.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
    </section>
  );
}
