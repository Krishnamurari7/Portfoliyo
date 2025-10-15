# Portfolio Setup Guide

This guide will help you set up your personal portfolio website with all the required features.

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp env.example .env.local
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables Setup

### Required Variables

#### 1. OpenAI API Key (For AI Chatbot)
```bash
OPENAI_API_KEY=your-openai-api-key
```
- Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
- This is required for the AI chatbot functionality

#### 2. Formspree Form ID (For Contact Form)
```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your-formspree-form-id
```
- Create a free account at [Formspree](https://formspree.io/)
- Create a new form and get your form ID
- This handles contact form submissions

### Optional Variables

#### 3. Personal Information
```bash
NEXT_PUBLIC_PERSONAL_NAME="Krishna Murari"
NEXT_PUBLIC_PERSONAL_EMAIL="krishna.murari@example.com"
NEXT_PUBLIC_PERSONAL_GITHUB="https://github.com/krishnamurari7"
NEXT_PUBLIC_PERSONAL_LINKEDIN="https://linkedin.com/in/krishnamurari"
```


#### 5. Analytics (Optional)
```bash
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

## 🤖 AI Chatbot Setup

### Step 1: Update Personal Data

Edit `src/app/api/chat/route.ts` and replace the placeholder information in the `portfolioContext` with your actual details:

```typescript
const portfolioContext = `
You are an AI assistant representing Krishna Murari, a Full-Stack Developer. Here's comprehensive information about Krishna Murari:

## Personal Information
- Name: Krishna Murari
- Title: Full-Stack Developer
- Location: India
- Experience: 3+ years in web development
- Email: krishna.murari@example.com
- GitHub: https://github.com/krishnamurari7
- LinkedIn: https://linkedin.com/in/krishnamurari

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

## Featured Projects
### 1. E-Commerce Platform
- **Description**: A full-stack e-commerce solution built with Next.js
- **Technologies**: Next.js, TypeScript, Stripe, Prisma, PostgreSQL
- **Features**: Advanced search, payment integration, admin dashboard
- **GitHub**: https://github.com/yourusername/ecommerce
- **Live Demo**: https://ecommerce-demo.com

### 2. AI-Powered Dashboard
- **Description**: Intelligent analytics dashboard with machine learning insights
- **Technologies**: React, Python, TensorFlow, D3.js, FastAPI
- **Features**: Real-time data visualization, predictive analytics
- **GitHub**: https://github.com/yourusername/ai-dashboard
- **Live Demo**: https://ai-dashboard-demo.com

### 3. Mobile Banking App
- **Description**: Secure mobile banking application
- **Technologies**: React Native, Node.js, MongoDB, JWT
- **Features**: Biometric authentication, real-time transactions, financial planning
- **GitHub**: https://github.com/yourusername/mobile-banking
- **Live Demo**: https://mobile-banking-demo.com

## Work Experience
### Current/Recent Position
- **Role**: [Your Current Role] at [Company Name]
- **Duration**: [Start Date] - Present
- **Responsibilities**: [Key responsibilities and achievements]
- **Technologies**: [Technologies used in this role]

### Previous Experience
- **Role**: [Previous Role] at [Previous Company]
- **Duration**: [Start Date] - [End Date]
- **Responsibilities**: [Key responsibilities and achievements]
- **Technologies**: [Technologies used in this role]

## Education
- **Degree**: [Your Degree] in [Field of Study]
- **Institution**: [University Name]
- **Graduation Year**: [Year]

## Certifications & Achievements
- [List any relevant certifications]
- [List any awards or achievements]

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
```

### Step 2: Test the Chatbot

1. Start your development server: `npm run dev`
2. Open http://localhost:3000
3. Click the chat icon in the bottom-right corner
4. Test with questions like:
   - "What programming languages do you know?"
   - "Tell me about your experience with React"
   - "What projects have you worked on?"
   - "How can I contact you?"

## 📝 Customization

### 1. Update Personal Information

All instances of `[Your Name Here]` have been replaced with "Krishna Murari" in:
- `src/app/layout.tsx`
- `src/components/layout/navigation.tsx`
- `src/components/layout/footer.tsx`
- `src/components/layout/hero-section.tsx`
- `src/components/layout/about-snippet.tsx`

### 2. Update Social Links

All social links have been updated with Krishna Murari's information in:
- `src/components/layout/navigation.tsx`
- `src/components/layout/footer.tsx`
- `src/components/layout/hero-section.tsx`
- `src/components/layout/about-snippet.tsx`
- `src/app/contact/page.tsx`

### 3. Update Project Data

All project GitHub URLs have been updated with Krishna Murari's GitHub profile in:
- `src/app/page.tsx` (featured projects)
- `src/app/projects/page.tsx` (all projects)

### 4. Update About Page

Customize the about page content in:
- `src/app/about/page.tsx`

## 🎨 Styling Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        // ... your custom colors
      },
    },
  },
}
```

### Animations
Customize animations in `src/app/globals.css` and component files.

## 🚀 Deployment to Vercel

### Step 1: Prepare for Deployment

1. **Update Environment Variables**
   - Add all required environment variables to your Vercel project
   - Go to your Vercel dashboard → Project Settings → Environment Variables

2. **Update Domain References**
   - Replace `http://localhost:3000` with your production domain in:
     - `sanity.config.ts`
     - Any hardcoded localhost references

### Step 2: Deploy

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Or Deploy via GitHub**
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Vercel will automatically deploy on every push

### Step 3: Configure Environment Variables in Vercel

In your Vercel dashboard, add these environment variables:

```
OPENAI_API_KEY=your-openai-api-key
NEXT_PUBLIC_FORMSPREE_FORM_ID=your-formspree-form-id
NEXT_PUBLIC_PERSONAL_NAME="Your Name"
NEXT_PUBLIC_PERSONAL_EMAIL="your.email@example.com"
NEXT_PUBLIC_PERSONAL_GITHUB="https://github.com/yourusername"
NEXT_PUBLIC_PERSONAL_LINKEDIN="https://linkedin.com/in/yourusername"
```

## 🔍 Testing Checklist

Before deploying, test these features:

- [ ] Home page loads correctly
- [ ] Navigation works on all pages
- [ ] Dark/light theme toggle works
- [ ] Contact form submits successfully
- [ ] AI chatbot responds to questions
- [ ] All social links work
- [ ] Responsive design works on mobile
- [ ] Animations work smoothly
- [ ] All pages load without errors

## 🆘 Troubleshooting

### Common Issues

1. **AI Chatbot not working**
   - Check if `OPENAI_API_KEY` is set correctly
   - Verify the API key has sufficient credits
   - Check browser console for errors

2. **Contact form not submitting**
   - Verify `NEXT_PUBLIC_FORMSPREE_FORM_ID` is set
   - Check Formspree form configuration
   - Ensure form fields match Formspree setup

3. **Build errors**
   - Run `npm run build` locally to check for errors
   - Fix any TypeScript or linting errors
   - Ensure all environment variables are set

4. **Styling issues**
   - Clear browser cache
   - Check if Tailwind CSS is compiling correctly
   - Verify all CSS classes are valid

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/)
- [Formspree Documentation](https://formspree.io/docs/)

## 🎯 Next Steps

1. **Add Real Content**: Replace mock data with your actual projects and experience
2. **Customize Design**: Adjust colors, fonts, and layout to match your brand
3. **Add More Features**: Consider adding a blog, testimonials, or case studies
4. **SEO Optimization**: Add meta tags, structured data, and optimize for search engines
5. **Performance**: Optimize images, implement lazy loading, and monitor Core Web Vitals

Your portfolio is now ready to showcase your skills and impress potential employers! 🚀
