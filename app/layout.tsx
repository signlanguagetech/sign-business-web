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

export const metadata: Metadata = {
  // Adjust domain before production deploy
  metadataBase: new URL('https://example.com'), // TODO: replace with real site URL
  title: {
    default:
      'Type-Safe Frontend & Backend Engineering | React · Angular · Next.js · NestJS',
    template: '%s | Type-Safe TS Engineering',
  },
  description:
    'Type-safe frontend & backend engineering: React, Angular, Next.js, Astro, RxJS, Effect-TS, Zustand, Node.js, NestJS & Express for performant delivery.',
  keywords: [
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
    'Frontend Engineering',
    'Backend APIs',
    'Full-Stack',
    'Architecture',
  ],
  openGraph: {
    title:
      'Type-Safe Frontend & Backend Engineering | React · Angular · Next.js · NestJS',
    description:
      'Type-safe frontend & backend engineering: React, Angular, Next.js, Astro, RxJS, Effect-TS, Zustand, Node.js, NestJS & Express for performant delivery.',
    url: '/',
    siteName: 'Type-Safe Engineering',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Type-Safe Frontend & Backend Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Type-Safe Frontend & Backend Engineering | React · Angular · Next.js · NestJS',
    description:
      'Type-safe frontend & backend engineering: React, Angular, Next.js, Astro, RxJS, Effect-TS, Zustand, Node.js, NestJS & Express for performant delivery.',
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
