import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import SkillsSection from '@/components/about/SkillsSection';
import TechStack from '@/components/about/TechStack';
import GitHubStats from '@/components/about/GitHubStats';

// Import personal info from data file
import { personalInfo } from '@/lib/data';

// Metadata for the About page
export const metadata: Metadata = {
  title: `About ${personalInfo.name}`,
  description: personalInfo.longBio.substring(0, 160) + '...', // Use a snippet of the long bio for description
  openGraph: {
    title: `About ${personalInfo.name} | Portfolio`,
    description: personalInfo.longBio.substring(0, 160) + '...',
    url: 'https://yourportfolio.com/about', // Replace with your actual URL
    siteName: 'Your Name Portfolio',
    images: [personalInfo.profilePictureUrl], // Use profile picture for OG image
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${personalInfo.name} | Portfolio`,
    description: personalInfo.longBio.substring(0, 160) + '...',
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
    images: [personalInfo.profilePictureUrl],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 py-16"> {/* Consistent vertical spacing for sections */}
      <AboutHero />
      <JourneyTimeline />
      <SkillsSection />
      <TechStack />
      <GitHubStats />
    </div>
  );
}
