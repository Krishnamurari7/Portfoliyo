"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";

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

export function AboutSnippet() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I&apos;m a passionate Full-Stack Developer with expertise in modern web technologies. 
            I love creating innovative solutions that solve real-world problems and deliver exceptional user experiences.
          </p>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
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

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Learn More About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
