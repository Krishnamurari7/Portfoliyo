import { BlogPost } from "@/types";
import { buildingScalableReactApplicationsNextjs14 } from "./posts/building-scalable-react-applications-nextjs-14";
import { futureWebDevelopmentAiIntegration } from "./posts/future-web-development-ai-integration";
import { masteringTypescriptAdvancedPatterns } from "./posts/mastering-typescript-advanced-patterns";
import { responsiveUisTailwindFramerMotion } from "./posts/responsive-uis-tailwind-framer-motion";
import { databaseDesignPatternsModernWebApps } from "./posts/database-design-patterns-modern-web-apps";
import { journeyJuniorToSeniorDeveloper } from "./posts/journey-junior-to-senior-developer";

// All blog posts array
export const blogPosts: BlogPost[] = [
  buildingScalableReactApplicationsNextjs14,
  futureWebDevelopmentAiIntegration,
  masteringTypescriptAdvancedPatterns,
  responsiveUisTailwindFramerMotion,
  databaseDesignPatternsModernWebApps,
  journeyJuniorToSeniorDeveloper,
];

// Helper functions
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug.current === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === "all") return blogPosts;
  return blogPosts.filter(post => post.categories.includes(category.toLowerCase().replace(/\s+/g, "-")));
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
};

export const getFeaturedPost = (): BlogPost => {
  return blogPosts[0]; // Return the first post as featured
};

export const getLatestPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post._id === currentPostId);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post._id !== currentPostId)
    .filter(post => 
      post.categories.some(cat => currentPost.categories.includes(cat)) ||
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
};

// Categories with counts
export const getCategories = () => {
  const categoryCount = blogPosts.reduce((acc, post) => {
    post.categories.forEach(category => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  return [
    { name: "All", count: blogPosts.length },
    { name: "Web Development", count: categoryCount["web-development"] || 0 },
    { name: "Tutorial", count: categoryCount["tutorial"] || 0 },
    { name: "Design", count: categoryCount["design"] || 0 },
    { name: "Opinion", count: categoryCount["opinion"] || 0 },
  ];
};

// Export individual posts for direct import
export {
  buildingScalableReactApplicationsNextjs14,
  futureWebDevelopmentAiIntegration,
  masteringTypescriptAdvancedPatterns,
  responsiveUisTailwindFramerMotion,
  databaseDesignPatternsModernWebApps,
  journeyJuniorToSeniorDeveloper,
};
