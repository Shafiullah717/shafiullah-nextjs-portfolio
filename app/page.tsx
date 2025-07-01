// app/page.tsx
import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ContactCTA from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
}
