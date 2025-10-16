"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Clock } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";

// Metadata moved to layout.tsx for client components

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
} as const;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "ayaankumar7488@gmail.com",
    href: "mailto:ayaankumar7488@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    content: "Connect with me on LinkedIn",
    href: "https://linkedin.com/in/krishnamurari7",
  },
  {
    icon: Github,
    title: "GitHub",
    content: "Check out my code on GitHub",
    href: "https://github.com/krishnamurari7",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Usually within 24 hours",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            Let&apos;s create something amazing together!
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h2>
              <p className="text-muted-foreground mb-8">
            I&apos;m always interested in new opportunities and exciting projects.
            Whether you have a question, want to collaborate, or just want to say hello,
            don&apos;t hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="group flex items-center justify-between p-5 rounded-xl border border-border/60 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 text-primary transition-opacity">→</span>
                </motion.a>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
