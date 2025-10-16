# Portfolio Website

A cutting-edge personal portfolio website built with Next.js 14, featuring modern web development capabilities, AI-powered interactions, and a headless CMS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **3D Graphics**: Interactive 3D models with React Three Fiber & Drei
- **AI Integration**: AI-powered chatbot using Vercel AI SDK and OpenAI
- **Content Management**: Sanity.io headless CMS for dynamic content
- **SEO Optimized**: Dynamic sitemap, metadata API, and social media previews
- **Responsive Design**: Flawless responsiveness with dark mode support
- **Analytics**: Vercel Analytics integration
- **Performance**: Optimized for speed and user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Drei
- **AI**: Vercel AI SDK & OpenAI API
- **CMS**: Sanity.io
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── layout/         # Layout components
│   │   └── 3d/             # 3D components
│   ├── lib/                # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── hooks/              # Custom React hooks
│   └── context/            # React context providers
├── sanity/                 # Sanity CMS configuration
│   └── schemas/            # Content schemas
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Sanity.io account
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   
   # OpenAI Configuration
   OPENAI_API_KEY=your-openai-api-key
   
   # Contact Form (using EmailJS or similar)
   EMAILJS_SERVICE_ID=your-service-id
   EMAILJS_TEMPLATE_ID=your-template-id
   EMAILJS_PUBLIC_KEY=your-public-key
   
   # Analytics
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
   ```

4. **Set up Sanity CMS**
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```
   
   Follow the prompts to create your Sanity project and configure the schemas.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Sanity Studio

Access your Sanity Studio at `http://localhost:3000/studio` to manage:

- **Projects**: Add and manage your portfolio projects
- **Blog Posts**: Create and publish blog articles
- **Testimonials**: Manage client testimonials
- **Skills**: Organize your technical skills
- **Experience**: Add your work experience

### Content Types

1. **Projects**: Showcase your work with detailed case studies
2. **Blog Posts**: Share your thoughts and tutorials
3. **Testimonials**: Display client feedback
4. **Skills**: Categorize your technical abilities
5. **Experience**: Timeline of your professional journey

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/app/layout.tsx` - Update metadata and site information
- `src/components/layout/navigation.tsx` - Update social links
- `src/components/layout/hero-section.tsx` - Update name and title
- `src/components/layout/footer.tsx` - Update contact information

### Styling

- Modify `tailwind.config.ts` for custom colors and themes
- Update `src/app/globals.css` for global styles
- Customize component styles in individual component files

### 3D Models

Replace the default 3D scene in `src/components/3d/hero-scene.tsx` with your own models or animations.

## 🤖 AI Chatbot

The AI chatbot is powered by OpenAI and can answer questions about:

- Your skills and experience
- Specific projects
- Technical expertise
- Contact information

Customize the chatbot's knowledge base in `src/app/api/chat/route.ts`.

## 📱 Pages

- **Home**: Interactive hero section with 3D model and featured projects
- **About**: Detailed professional story, skills, and experience timeline
- **Projects**: Gallery of all projects with detailed case studies
- **Blog**: List of blog posts with rich formatting
- **Contact**: Contact form with validation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Analytics

Vercel Analytics is integrated for tracking:
- Page views
- User engagement
- Performance metrics
- Real user monitoring

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Type safety and better development experience
- **Prettier**: Code formatting (configure as needed)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, feel free to reach out:

- Email: krishna.murari@example.com
- GitHub: [@krishnamurari7](https://github.com/krishnamurari7)
- LinkedIn: [Krishna Murari](https://linkedin.com/in/krishnamurari)

---

Built with ❤️ using Next.js and modern web technologies.
