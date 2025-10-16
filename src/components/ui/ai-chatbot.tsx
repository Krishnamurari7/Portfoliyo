"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I'm Krishna's AI assistant ✨ I can help you learn more about his skills, experience, and projects. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
      // Focus input when opening
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const expandChat = () => {
    setIsMinimized(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsTyping(true);

    // Simulate AI response for static export with realistic typing delay
    setTimeout(() => {
      setIsTyping(false);
      const responses = {
        "hello": "Hello! I'm your AI assistant. I can help you learn more about my skills, experience, and projects. What would you like to know?",
        "skills": "Krishna Murari is skilled in React, Next.js, TypeScript, Node.js, Python, and modern web technologies. He specializes in full-stack development with a focus on creating exceptional user experiences.",
        "projects": "Krishna has worked on several impressive projects including an E-Commerce Platform, AI-Powered Dashboard, and Mobile Banking App. You can find more details on the Projects page.",
        "contact": "You can reach Krishna Murari at krishna74880908@gmail.com or connect with him on GitHub and LinkedIn. He's always open to discussing new opportunities.",
        "experience": "Krishna Murari is a Full-Stack Developer with 1+ years of experience building scalable web applications and digital solutions.",
        "about": "Krishna Murari is a passionate Full-Stack Developer from India with 1+ years of experience. He loves creating exceptional user experiences and solving complex problems.",
        "default": "Hi! I'm Krishna Murari's AI assistant. I can tell you about his skills, projects, experience, and contact information. What would you like to know?",
        "introduction": "Krishna Murari is a passionate Full-Stack Developer from India with 1+ years of experience. He loves creating exceptional user experiences and solving complex problems.",

      };

      const message = input.toLowerCase();
      let response = responses.default;
      
      if (message.includes("skill") || message.includes("technology")) {
        response = responses.skills;
      } else if (message.includes("project") || message.includes("work")) {
        response = responses.projects;
      } else if (message.includes("contact") || message.includes("email")) {
        response = responses.contact;
      } else if (message.includes("experience") || message.includes("background")) {
        response = responses.experience;
      } else if (message.includes("about") || message.includes("who")) {
        response = responses.about;
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }]);
      setIsLoading(false);
    }, Math.random() * 1000 + 1500); // Random delay between 1.5-2.5s for realism
  };

  return (
    <>
      {/* Chat Button with Pulse Animation */}
      <motion.div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <motion.button
          onClick={toggleChat}
          className="relative p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 backdrop-blur-sm"
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open AI Chat"
        >
          {/* Pulse Ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="relative z-10"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                {/* Notification Dot */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Window with Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
            className={`fixed z-30 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-2xl transition-all duration-300 flex flex-col ${
              isMinimized 
                ? "bottom-20 right-4 sm:right-6 w-80 h-16" 
                : "bottom-20 right-4 sm:right-6 w-[90vw] max-w-md h-[min(480px,calc(100vh-180px))] sm:w-96 sm:h-[min(480px,calc(100vh-160px))]"
            }`}
          >
            {/* Chat Header with Gradient */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-white/10 dark:border-gray-700/30 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-4 w-4 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Krishna&apos;s AI</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {isTyping ? "Typing..." : "Online"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {!isMinimized && (
                  <motion.button
                    onClick={minimizeChat}
                    className="p-2 hover:bg-white/20 dark:hover:bg-gray-700/30 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Minimize chat"
                  >
                    <Minimize2 className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </motion.button>
                )}
                {isMinimized && (
                  <motion.button
                    onClick={expandChat}
                    className="p-2 hover:bg-white/20 dark:hover:bg-gray-700/30 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Expand chat"
                  >
                    <Maximize2 className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </motion.button>
                )}
                <motion.button
                  onClick={toggleChat}
                  className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </motion.button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages with Custom Scrollbar */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent min-h-0">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        type: "spring",
                        damping: 20 
                      }}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-end space-x-2 max-w-[85%] ${
                          message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <motion.div
                          className={`p-2 rounded-full shadow-lg ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {message.role === "user" ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </motion.div>
                        <motion.div
                          className={`px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md"
                              : "bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 rounded-bl-md"
                          }`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                          <p className={`text-xs mt-1 opacity-70 ${
                            message.role === "user" ? "text-white/70" : "text-gray-500 dark:text-gray-400"
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Enhanced Typing Indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end space-x-2">
                        <div className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-lg">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                          <div className="flex space-x-1">
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced Input with Gradient Border */}
                <form onSubmit={handleSubmit} className="flex-shrink-0 p-4 border-t border-white/10 dark:border-gray-700/30 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-b-2xl">
                  <div className="flex space-x-3">
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything about Krishna "
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                        disabled={isLoading}
                        maxLength={500}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                        {input.length}/500
                      </div>
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Send message"
                    >
                      <Send className="h-5 w-5" />
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}