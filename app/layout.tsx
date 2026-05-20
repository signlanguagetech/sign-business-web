import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';
import Header from '@/components/header';
import { SidebarProvider } from '@/components/sidebar';
import Footer from '@/components/footer';
import Main from './main';
import Script from 'next/dist/client/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_TITLE =
  'AI-Enabled Full-Stack Engineering | Frontend · Backend · Cloud · AI/ML';
const SITE_DESCRIPTION =
  'From AI-enabled planning to production delivery: type-safe frontend & backend engineering (React, Angular, Next.js, NestJS), cloud & DevOps, agentic AI, machine learning, and database engineering — tailored to your business needs.';

export const metadata: Metadata = {
  // Adjust domain before production deploy
  metadataBase: new URL('https://example.com'), // TODO: replace with real site URL
  title: {
    default: SITE_TITLE,
    template: '%s | AI-Enabled Full-Stack Engineering',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'AI-Enabled Full-Stack Engineering',
  authors: [{ name: 'Sign Solutions Engineering Team' }],
  category: 'Software Engineering Services',
  keywords: [
    // Core stack
    'TypeScript',
    'React',
    'Angular',
    'Next.js',
    'Astro',
    'NestJS',
    'Node.js',
    'Express',
    'RxJS',
    'Effect-TS',
    'Zustand',
    // Service themes
    'Frontend Engineering',
    'Backend APIs',
    'Full-Stack Development',
    'Software Architecture',
    'Reactive State Management',
    // Cloud & DevOps
    'Cloud Engineering',
    'DevOps',
    'AWS',
    'GCP',
    'Azure',
    'Infrastructure as Code',
    'CI/CD',
    // AI / ML
    'AI-Enabled Delivery',
    'Agentic Frameworks',
    'AI Engineering',
    'Machine Learning',
    'LLM Integration',
    // Data
    'Database Engineering',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'Data Pipelines',
    // Business
    'Software Consulting',
    'Embedded Engineering Team',
    'Product Development',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: 'AI-Enabled Full-Stack Engineering',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI-Enabled Full-Stack Engineering — Frontend, Backend, Cloud, AI/ML',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@yourhandle', // TODO: replace with real handle
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )} 
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <Main>{children}</Main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
