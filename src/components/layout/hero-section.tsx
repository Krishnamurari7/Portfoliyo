"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import { useTheme } from "../../context/theme-context";

export function HeroSection() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        isDark
          ? "bg-slate-950"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/krish.png')",
          filter: isDark ? "brightness(0.9)" : "brightness(0.8)",
        }}
      ></div>

      {/* Overlay for readability */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-black/40 backdrop-blur-[1px]"
            : "bg-white/40 backdrop-blur-[1px]"
        }`}
      ></div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {isDark ? (
          <>
            <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
            <div
              className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </>
        ) : (
          <>
            <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-15 -top-48 -left-48 animate-pulse"></div>
            <div
              className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-15 -bottom-48 -right-48 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-15 top-1/2 left-1/2 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </>
        )}
      </div>

      {/* Animated grid */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px] ${
          isDark ? "opacity-20" : "opacity-10"
        }`}
      ></div>

      {/* Mouse-follow glow */}
      <div
        className="absolute pointer-events-none w-96 h-96 rounded-full blur-3xl opacity-30 transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(139,92,246,0.3), transparent)"
            : "radial-gradient(circle, rgba(59,130,246,0.2), transparent)",
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-12">
          {/* Badge */}
          <div className="inline-block mb-6 animate-bounce">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50"
                  : "bg-gradient-to-r from-blue-400/20 to-purple-400/20 border border-blue-400/50"
              }`}
            >
              <Sparkles
                className={`w-4 h-4 ${
                  isDark ? "text-purple-400" : "text-blue-500"
                }`}
              />
              <span
                className={`text-sm ${
                  isDark ? "text-purple-300" : "text-blue-600"
                }`}
              >
                Welcome to my portfolio
              </span>
            </div>
          </div>

          {/* Greeting */}
          <div
            className="space-y-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p
              className={`text-lg sm:text-xl font-light ${
                isDark ? "text-slate-300" : "text-black"
              }`}
            >
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span
                className={`bg-clip-text text-transparent animate-shimmer ${
                  isDark
                    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
                    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                }`}
              >
                Krishna Murari
              </span>
            </h1>

            <p
              className={`text-2xl sm:text-3xl lg:text-4xl font-light bg-clip-text text-transparent ${
                isDark
                  ? "bg-gradient-to-r from-slate-300 to-slate-400"
                  : "bg-gradient-to-r from-black to-gray-800"
              }`}
            >
              Full-Stack Developer
            </p>
          </div>

          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light ${
              isDark ? "text-slate-300" : "text-black"
            }`}
          >
            Crafting beautiful, high-performance web experiences with modern
            technologies. Specializing in full-stack development, clean code,
            and innovative solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="/projects"
              className={`group px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-purple-500/50"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50"
              }`}
            >
              View My Work
            </a>
            <a
              href="/contact"
              className={`px-8 sm:px-10 py-3 sm:py-4 border-2 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto text-center ${
                isDark
                  ? "border-purple-500/50 text-white hover:bg-purple-500/10 hover:border-purple-400"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
              }`}
            >
              Get In Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 sm:gap-6 pt-8">
            {socialLinks.map((social, idx) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 hover:border-purple-400 text-slate-300 hover:text-white hover:shadow-lg hover:shadow-purple-500/50"
                    : "bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-blue-400/30 hover:border-blue-500 text-slate-700 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-400/50"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <span
            className={`text-xs mb-2 hidden sm:block ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Scroll to explore
          </span>
          <ArrowDown
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              isDark ? "text-purple-400" : "text-blue-500"
            }`}
          />
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer { background-size: 200% auto; animation: shimmer 3s linear infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}
