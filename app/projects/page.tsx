'use client'; // This page needs to be a client component to manage filter state

import * as React from 'react'; // Import React
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectFilters from '@/components/projects/ProjectFilters';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

// Import personal info (only accessible in server components or global scope if not imported by a client component)
// For client components, personalInfo should ideally be passed as props from a parent Server Component
// or fetched client-side if it's dynamic user data. For static data like a name, it's generally fine.


// Removed 'export const metadata' block from this client component
// Metadata should be defined in a Server Component (e.g., a parent layout.tsx)
// or fetched dynamically in a Server Component and passed down if truly dynamic
// export const metadata: Metadata = {
//   title: `My Projects | ${personalInfo.name}`,
//   description: `Explore the diverse portfolio of ${personalInfo.name}, a full-stack developer. Featuring web applications, open-source contributions, and more.`,
//   openGraph: {
//     title: `My Projects | ${personalInfo.name} Portfolio`,
//     description: `Explore the diverse portfolio of ${personalInfo.name}, a full-stack developer.`,
//     url: 'https://yourportfolio.com/projects', // Replace with your actual URL
//     siteName: `${personalInfo.name} Portfolio`,
//     images: [
//       {
//         url: 'https://placehold.co/1200x630/6366f1/ffffff?text=Projects+Portfolio', // Placeholder for OG image
//         width: 1200,
//         height: 630,
//         alt: `${personalInfo.name}'s Projects`,
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: `My Projects | ${personalInfo.name} Portfolio`,
//     description: `Explore the diverse portfolio of ${personalInfo.name}, a full-stack developer.`,
//     creator: '@yourtwitterhandle', // Replace with your Twitter handle
//     images: ['https://placehold.co/1200x675/6366f1/ffffff?text=Projects+Portfolio'], // Placeholder for Twitter image
//   },
// };

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = React.useState('All'); // State to manage the active filter

  // Handler for filter change
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="flex flex-col gap-20 py-16"> {/* Consistent vertical spacing for sections */}
      <ProjectHero />
      <ProjectFilters onFilterChange={handleFilterChange} activeFilter={activeFilter} />
      <ProjectsGrid activeFilter={activeFilter} />
    </div>
  );
}
