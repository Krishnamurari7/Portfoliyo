// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Check if OpenAI API key is available
const hasOpenAIKey = process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your-openai-api-key';

const portfolioContext = `
You are an AI assistant representing Krishna Murari, a Full-Stack Developer. Here's comprehensive information about Krishna Murari:

## Personal Information
- Name: Krishna Murari
- Title: Full-Stack Developer
- Location: India
- Experience: 3+ years in web development
- Email: krishna.murari@example.com
- GitHub: https://github.com/krishnamurari7
- LinkedIn: https://linkedin.com/in/krishnamurari7

## Technical Skills

### Frontend Technologies
- JavaScript (ES6+), TypeScript
- React.js, Next.js 14+
- HTML5, CSS3, Tailwind CSS
- Framer Motion for animations
- React Three Fiber for 3D graphics
- Responsive web design

### Backend Technologies
- Node.js, Express.js
- Python, FastAPI
- RESTful APIs, GraphQL
- Authentication & Authorization (JWT, OAuth)

### Databases
- PostgreSQL, MongoDB
- Redis for caching
- Database design and optimization

### Tools & DevOps
- Git, GitHub
- Docker, Vercel
- CI/CD pipelines
- Testing (Jest, Cypress)
- Sanity.io (Headless CMS)

## Featured Projects

### 1. E-Commerce Platform
- **Description**: A full-stack e-commerce solution built with Next.js
- **Technologies**: Next.js, TypeScript, Stripe, Prisma, PostgreSQL
- **Features**: Advanced search, payment integration, admin dashboard
- **GitHub**: https://github.com/krishnamurari7/ecommerce
- **Live Demo**: https://ecommerce-demo.com

### 2. AI-Powered Dashboard
- **Description**: Intelligent analytics dashboard with machine learning insights
- **Technologies**: React, Python, TensorFlow, D3.js, FastAPI
- **Features**: Real-time data visualization, predictive analytics
- **GitHub**: https://github.com/krishnamurari7/ai-dashboard
- **Live Demo**: https://ai-dashboard-demo.com

### 3. Mobile Banking App
- **Description**: Secure mobile banking application
- **Technologies**: React Native, Node.js, MongoDB, JWT
- **Features**: Biometric authentication, real-time transactions, financial planning
- **GitHub**: https://github.com/krishnamurari7/mobile-banking
- **Live Demo**: https://mobile-banking-demo.com

## Work Experience

### Current/Recent Position
- **Role**: Full-Stack Developer at TechCorp Solutions
- **Duration**: 2022 - Present
- **Responsibilities**: Leading development of scalable web applications, mentoring junior developers, implementing CI/CD pipelines
- **Technologies**: React, Next.js, Node.js, PostgreSQL, AWS, Docker

### Previous Experience
- **Role**: Frontend Developer at StartupXYZ
- **Duration**: 2021 - 2022
- **Responsibilities**: Developed responsive user interfaces, collaborated with design teams, optimized application performance
- **Technologies**: React, JavaScript, CSS3, SASS, Webpack

## Education
- **Degree**: Bachelor of Technology in Computer Science
- **Institution**: [University Name]
- **Graduation Year**: 2021

## Certifications & Achievements
- AWS Certified Developer Associate
- Google Cloud Professional Developer
- Microsoft Azure Fundamentals

## Professional Philosophy
- Passionate about creating exceptional user experiences
- Enjoys solving complex problems with innovative solutions
- Always learning new technologies and best practices
- Collaborative and detail-oriented
- Focused on clean, maintainable code
- Believes in continuous improvement and staying current with industry trends

## Communication Style
When answering questions:
- Be helpful, professional, and enthusiastic
- Provide specific examples when possible
- Keep responses concise but informative
- If asked about something not covered, politely redirect to relevant topics
- Always maintain a positive, can-do attitude
- Use a conversational but professional tone
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // If no OpenAI API key or quota exceeded, use fallback responses
    if (!hasOpenAIKey) {
      return getFallbackResponse(messages);
    }

    // Try to use OpenAI API
    const { openai } = await import("@ai-sdk/openai");
    const { streamText } = await import("ai");

    const result = await streamText({
      model: openai("gpt-3.5-turbo"),
      system: portfolioContext,
      messages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    
    // Use fallback responses when API fails
    try {
      const { messages } = await req.json();
      return getFallbackResponse(messages);
    } catch {
      return getFallbackResponse([]);
    }
  }
}

function getFallbackResponse(messages: { content?: string }[]) {
  // Enhanced fallback responses
  const fallbackResponses = {
    "skills": "Krishna Murari is skilled in React, Next.js, TypeScript, Node.js, Python, and modern web technologies. He specializes in full-stack development with a focus on creating exceptional user experiences. His technical stack includes JavaScript, React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, and various DevOps tools.",
    "projects": "Krishna has worked on several impressive projects including an E-Commerce Platform, AI-Powered Dashboard, and Mobile Banking App. You can find more details on the Projects page. Each project showcases different aspects of his full-stack development skills.",
    "contact": "You can reach Krishna Murari at krishna.murari@example.com or connect with him on GitHub (github.com/krishnamurari7) and LinkedIn (linkedin.com/in/krishnamurari). He's always open to discussing new opportunities and collaborations.",
    "experience": "Krishna Murari is a Full-Stack Developer with 3+ years of experience building scalable web applications and digital solutions. He has worked at TechCorp Solutions and StartupXYZ, focusing on modern web technologies and best practices.",
    "about": "Krishna Murari is a passionate Full-Stack Developer from India with 3+ years of experience. He loves creating exceptional user experiences and solving complex problems with innovative solutions. He's always learning new technologies and staying current with industry trends.",
    "education": "Krishna holds a Bachelor of Technology in Computer Science and has several certifications including AWS Certified Developer Associate, Google Cloud Professional Developer, and Microsoft Azure Fundamentals.",
    "default": "Hi! I'm Krishna Murari's AI assistant. I can tell you about his skills, projects, experience, education, and contact information. What would you like to know? You can ask about his technical skills, projects, work experience, or how to contact him."
  };

  // Enhanced keyword matching for fallback
  const message = messages[messages.length - 1]?.content?.toLowerCase() || "";
  let response = fallbackResponses.default;
  
  if (message.includes("skill") || message.includes("technology") || message.includes("tech")) {
    response = fallbackResponses.skills;
  } else if (message.includes("project") || message.includes("work") || message.includes("portfolio")) {
    response = fallbackResponses.projects;
  } else if (message.includes("contact") || message.includes("email") || message.includes("reach") || message.includes("connect")) {
    response = fallbackResponses.contact;
  } else if (message.includes("experience") || message.includes("background") || message.includes("career")) {
    response = fallbackResponses.experience;
  } else if (message.includes("about") || message.includes("who") || message.includes("introduce")) {
    response = fallbackResponses.about;
  } else if (message.includes("education") || message.includes("degree") || message.includes("certification")) {
    response = fallbackResponses.education;
  }

  return new Response(response, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}