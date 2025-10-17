"use client";

import { Github, Linkedin, ArrowRight, Code2, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";

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

const skills = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Globe,
    title: "Web Standards",
    description: "Following best practices and standards",
  },
];

export function AboutSnippet() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`relative py-32 transition-colors duration-500 ${
      isDark ? "bg-slate-950" : "bg-white"
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        {isDark ? (
          <>
            <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 -top-40 -right-40 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 -bottom-40 -left-40 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '4s'}}></div>
          </>
        ) : (
          <>
            <div className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 -top-40 -right-40 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40 -bottom-40 -left-40 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '4s'}}></div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <div className="inline-block mb-4 px-4 py-2 rounded-full backdrop-blur-sm border" 
            style={{
              background: isDark 
                ? "rgba(139, 92, 246, 0.1)" 
                : "rgba(59, 130, 246, 0.1)",
              borderColor: isDark 
                ? "rgba(139, 92, 246, 0.3)" 
                : "rgba(59, 130, 246, 0.3)"
            }}>
            <span className={`text-2xl font-medium ${
              isDark ? "text-purple-300" : "text-blue-600"
            }`}>
              About <span className="text-2xl font-bold">Me</span>
            </span>
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Passionate Developer & <span className="bg-clip-text text-transparent" style={{
              backgroundImage: isDark
                ? "linear-gradient(to right, #a855f7, #ec4899, #06b6d4)"
                : "linear-gradient(to right, #2563eb, #7c3aed, #db2777)"
            }}>Problem Solver</span>
          </h2>

          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}>
            I craft beautiful, high-performance web experiences using cutting-edge technologies. 
            With a focus on clean code and user-centric design, I transform ideas into reality.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
                    : "bg-gradient-to-br from-white to-blue-50/30 border-blue-200/50 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20"
                }`}
              >
                <Icon className={`w-10 h-10 mb-4 ${
                  isDark ? "text-purple-400" : "text-blue-600"
                }`} />
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {skill.title}
                </h3>
                <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-12">
          {socialLinks.map((social, idx) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all duration-300 hover:scale-110 border backdrop-blur-sm ${
                isDark
                  ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-purple-500/30 hover:border-purple-400 text-slate-300 hover:text-white hover:shadow-lg hover:shadow-purple-500/50"
                  : "bg-gradient-to-br from-blue-400/20 to-purple-400/20 border-blue-400/30 hover:border-blue-500 text-slate-700 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-400/50"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/about"
            className={`group relative px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden ${
              isDark
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-purple-500/50"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Learn More About Me
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}