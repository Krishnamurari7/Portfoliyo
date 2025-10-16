"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Share2, User } from "lucide-react";
import { BlogPost } from "@/types";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Blog posts are now imported from separate files

// Metadata generation moved to layout.tsx for client components

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
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
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
              {post.categories[0].replace("-", " ")}
            </span>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {post.readingTime} min read
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-accent transition-colors duration-200">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
            <span className="text-6xl font-bold text-muted-foreground">
              {post.title.charAt(0)}
            </span>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none dark:prose-invert"
        >
          {post.content && typeof post.content === 'object' && 'blocks' in post.content ? (
            <div className="space-y-6">
              {post.content.blocks.map((block: { 
                _type: string; 
                style?: string; 
                children?: { _type: string; text: string }[];
                asset?: { _ref: string; _type: string };
                alt?: string;
                caption?: string;
              }, index: number) => {
                if (block._type === "block") {
                  const text = block.children?.map((child: { _type: string; text: string }) => child.text).join("") || "";
                  
                  switch (block.style) {
                    case "h1":
                      return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{text}</h1>;
                    case "h2":
                      return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{text}</h2>;
                    case "h3":
                      return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{text}</h3>;
                    case "blockquote":
                      return <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">{text}</blockquote>;
                    default:
                      return <p key={index} className="leading-relaxed mb-4">{text}</p>;
                  }
                } else if (block._type === "image") {
                  return (
                    <figure key={index} className="my-8">
                      <img 
                        src={`/images/${block.asset?._ref || 'placeholder.jpg'}`}
                        alt={block.alt || "Blog post image"}
                        className="w-full rounded-lg shadow-lg"
                      />
                      {block.caption && (
                        <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <div className="space-y-6">
              <p className="leading-relaxed">
                This is a sample blog post content. In a real application, this would be 
                rendered from the Sanity CMS content using a rich text renderer like 
                @portabletext/react.
              </p>
              <p className="leading-relaxed">
                The content would include proper formatting, code blocks, images, and 
                other rich media elements as defined in the Sanity schema.
              </p>
              <p className="leading-relaxed">
                For now, this serves as a placeholder to demonstrate the blog post 
                layout and structure.
              </p>
            </div>
          )}
        </motion.article>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Tag className="h-5 w-5 mr-2" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-accent transition-colors duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getRelatedPosts(post._id, 2).map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-semibold mb-2 hover:text-primary transition-colors duration-200">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center mt-3 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(relatedPost.publishedAt).toLocaleDateString()}
                    <Clock className="h-3 w-3 ml-3 mr-1" />
                    {relatedPost.readingTime} min read
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
