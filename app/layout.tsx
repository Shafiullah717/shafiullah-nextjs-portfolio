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
    default: 'Muhammad Shafiullah Cheema | Full-stack Developer',
    template: '%s | Muhammad Shafiullah Cheema Portfolio',
  },
  description:
    'Full-stack developer building fast, modern websites with Next.js, Tailwind CSS, and TypeScript. Available for freelance and remote work.',
  keywords: [
    'full-stack developer',
    'Muhammad Shafiullah',
    'Shafiullah Cheema',
    'Muhammad Shafiullah',
    'Muhammad Shafiullah Cheema',
    'Cheema developer',
    'muhammadshafiullah',
    'web development',
    'portfolio',
    'Next.js developer',
    'React developer',
    'Tailwind CSS',
    'Framer Motion',
    'TypeScript',
    'freelance developer',
    'remote work',
    'Khairpur mirs',
    'Khairpur Developer',
  ],
  icons: {
    icon: '/Favicon.png',
  },
  metadataBase: new URL('https://muhammadshafiullah.space'),
  authors: [
    {
      name: 'Muhammad Shafiullah Cheema',
      url: 'https://muhammadshafiullah.space',
    },
  ],
  openGraph: {
    title: 'Muhammad Shafiullah Cheema | Full-stack Developer Portfolio',
    description:
      'A modern and visually stunning full-stack developer portfolio showcasing projects, skills, and experience.',
    url: 'https://muhammadshafiullah.space',
    siteName: 'Muhammad Shafiullah Portfolio',
    images: [
      {
        url: 'https://muhammadshafiullah.space/pictures/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Shafiullah Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Shafiullah Cheema | Full-stack Developer Portfolio',
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
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0D0D0D" />
        <link rel="canonical" href="https://muhammadshafiullah.space" />
        <link rel="alternate" hrefLang="en" href="https://muhammadshafiullah.space" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Muhammad Shafiullah Cheema',
              url: 'https://muhammadshafiullah.space',
              image: 'https://muhammadshafiullah.space/pictures/Profile.png',
              sameAs: [
                'https://github.com/Shafiullah717',
                'https://www.linkedin.com/in/shafi-ullah-086b83284/',
              ],
              jobTitle: 'Full-stack Developer',
              description:
                'Full-stack developer building fast, modern websites with Next.js, Tailwind CSS, and TypeScript.',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'PK',
              },
              knowsAbout: [
                'Next.js',
                'React',
                'Tailwind CSS',
                'TypeScript',
                'Game Development',
                'Artificial Intelligence',
              ],
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
