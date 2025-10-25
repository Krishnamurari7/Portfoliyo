"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Tag, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { BlogPost } from "@/types";
import { blogPosts, getCategories } from "@/data/blog";

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

// Blog posts are now imported from separate files

// Categories are now imported from the data layer
const categories = getCategories();

// Utility function to get blog cover image
const getBlogCoverImage = (post: BlogPost): string => {
  // If coverImage asset ref starts with /images/, use it directly
  if (post.coverImage?.asset?._ref?.startsWith('/images/')) {
    return post.coverImage.asset._ref;
  }
  
  // Map blog post titles to available images in public/images
  const imageMap: Record<string, string> = {
    'Building Scalable React Applications with Next.js 14': '/images/nexjs.jpeg',
    'Future of Web Development: AI Integration': '/images/ai.jpeg',
    'Mastering TypeScript: Advanced Patterns': '/images/typescript.png',
    'Responsive UIs with Tailwind CSS and Framer Motion': '/images/tail.png',
    'Database Design Patterns for Modern Web Apps': '/images/database.jpeg',
    'Journey from Junior to Senior Developer': '/images/developer.jpeg',
  };
  
  return imageMap[post.title] || '/images/developer.jpeg';
};


export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [email, setEmail] = useState<string>("");
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const toKey = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    const key = toKey(activeCategory);
    return blogPosts.filter((p) => p.categories.includes(key));
  }, [activeCategory]);

  const hasPosts = filteredPosts.length > 0;
  const featured = hasPosts ? filteredPosts[0] : null;
  const rest = hasPosts ? filteredPosts.slice(1) : [];

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      setSubscriptionStatus("error");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setSubscriptionStatus("error");
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus("idle");
    setErrorMessage("");

    try {
      // Simulate API call - replace with actual subscription logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just simulate success
      // In a real app, you'd call your newsletter API here
      console.log("Subscribing email:", email);
      
      setSubscriptionStatus("success");
      setEmail("");
    } catch (error) {
      setErrorMessage("Failed to subscribe. Please try again.");
      setSubscriptionStatus("error");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology trends, 
            and my journey as a full-stack developer.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.name;
            return (
              <motion.button
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                onClick={() => setActiveCategory(category.name)}
                className={`px-5 sm:px-6 py-2 rounded-full border transition-colors flex items-center gap-2 ${
                  isActive
                    ? "border-primary/60 bg-primary/10 text-primary"
                    : "border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:border-primary/40"
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isActive ? "bg-primary/20 text-primary" : "bg-secondary text-secondary-foreground"
                }`}>
                  {category.count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured Post */}
        <motion.div className="mb-16" variants={containerVariants} initial="hidden" animate="show">
          <h2 className="text-2xl font-semibold mb-8">Featured Post</h2>
          {featured ? (
            <motion.div variants={itemVariants} className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <Image
                    src={getBlogCoverImage(featured)}
                    alt={featured.coverImage?.alt || featured.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-6xl font-bold text-muted-foreground">
                      {featured.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      {featured.categories[0].replace("-", " ")}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featured.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {featured.readingTime} min read
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    <Link 
                      href={`/blog/${featured.slug.current}`}
                      className="hover:text-primary transition-colors"
                    >
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${featured.slug.current}`}
                    className="group inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.p variants={itemVariants} className="text-muted-foreground">No posts found in this category.</motion.p>
          )}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <h2 className="text-2xl font-semibold mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <motion.article
                key={post._id}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group rounded-2xl border border-border/60 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 overflow-hidden shadow-sm transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={getBlogCoverImage(post)}
                    alt={post.coverImage?.alt || post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-4xl font-bold text-muted-foreground">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {post.categories[0].replace("-", " ")}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readingTime} min
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div className="mt-16 text-center" variants={containerVariants} initial="hidden" animate="show">
          <motion.div variants={itemVariants} className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 max-w-2xl mx-auto shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-2xl font-semibold">Stay Updated</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Get notified when I publish new articles about web development, 
              technology trends, and programming insights.
            </p>
            
            {subscriptionStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center text-green-600 dark:text-green-400 mb-4"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">Successfully subscribed! Thank you for joining.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (subscriptionStatus === "error") {
                          setSubscriptionStatus("idle");
                          setErrorMessage("");
                        }
                      }}
                      placeholder="Enter your email"
                      disabled={isSubscribing}
                      className={`w-full px-4 py-2 border rounded-lg bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
                        subscriptionStatus === "error" 
                          ? "border-red-500 focus:ring-red-500" 
                          : "border-border focus:ring-primary"
                      } ${isSubscribing ? "opacity-50 cursor-not-allowed" : ""}`}
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubscribing || !email.trim()}
                    className="group relative px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium overflow-hidden hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                  >
                    {isSubscribing ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        Subscribe
                      </>
                    )}
                  </button>
                </div>
                
                {subscriptionStatus === "error" && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center text-red-600 dark:text-red-400 mt-3 text-sm"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errorMessage}
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
