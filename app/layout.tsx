import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Shafiullah | Full-stack Developer Portfolio',
    template: '%s | Shafiullah Portfolio',
  },
  icons: {
    icon: '/Favicon.png',
  },
  description:
    'Full-stack developer building fast, modern websites with Next.js, Tailwind CSS, and TypeScript. Available for freelance and remote work.',
  keywords: [
    'full-stack developer',
    'Shafiullah',
    'Cheema',
    'muhammadshafiullah',
    'web development',
    'portfolio',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Framer Motion',
    'TypeScript',
    'freelance',
    'remote work',
  ],
  authors: [
    {
      name: 'Shafiullah',
      url: 'https://muhammadshafiullah.space',
    },
  ],
   metadataBase: new URL('https://muhammadshafiullah.space'),
  openGraph: {
    title: 'Shafiullah | Full-stack Developer Portfolio',
    description:
      'A modern and visually stunning full-stack developer portfolio showcasing projects, skills, and experience.',
    url: 'https://muhammadshafiullah.space',
    siteName: 'Shafiullah Portfolio',
    images: [
      {
        url: 'https://muhammadshafiullah.space/pictures/og-image.png', // Ensure this exists
        width: 1200,
        height: 630,
        alt: 'Shafiullah Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shafiullah | Full-stack Developer Portfolio',
    description:
      'A modern and visually stunning full-stack developer portfolio showcasing projects, skills, and experience.',
    images: ['https://muhammadshafiullah.space/pictures/og-image.png'],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Shafiullah",
              "url": "https://muhammadshafiullah.space",
              "sameAs": [
                "https://github.com/Shafiullah717",
                "https://www.linkedin.com/in/shafi-ullah-086b83284/"
              ],
              "jobTitle": "Full-stack Developer",
              "description": "Full-stack developer building fast, modern websites with Next.js, Tailwind CSS, and TypeScript.",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            }),
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          inter.variable,
          plusJakartaSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
