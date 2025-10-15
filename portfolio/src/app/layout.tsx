import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/context/theme-context";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { AIChatbot } from "@/components/ui/ai-chatbot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
      title: {
        default: "Krishna Murari - Full-Stack Developer",
        template: "%s | Krishna Murari",
      },
      description: "Full-Stack Developer passionate about building innovative solutions and creating exceptional user experiences.",
  keywords: ["developer", "full-stack", "web development", "portfolio", "react", "next.js"],
  authors: [{ name: "Krishna Murari" }],
  creator: "Krishna Murari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnamurari.com",
    title: "Krishna Murari - Full-Stack Developer",
    description: "Full-Stack Developer passionate about building innovative solutions and creating exceptional user experiences.",
    siteName: "Krishna Murari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Murari - Full-Stack Developer",
    description: "Full-Stack Developer passionate about building innovative solutions and creating exceptional user experiences.",
    creator: "@krishnamurari",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <AIChatbot />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
