'use client';

import { motion } from 'framer-motion';
import Container from '../shared/Container';
import { skillCategories } from '@/lib/data'; // Reusing skillCategories for tech stack display
import {
  Gift, Code, Database, Cloud, Settings, // General icons
  /* Specific icons with corrected names or alternatives */
  SquareTerminal, // For CI/CD
  //  // For AI
  Sparkles, // For Framer Motion or general design/animation
  Type, // For TypeScript/JavaScript or text
  Component, // For React/frameworks
  Server, // For Node.js/backend
  HardDrive, // For Databases
  Palette, // For Tailwind CSS
  Layers, // For Redux
  Webhook, // For API
  FileCode, // For general code
  // Python, // Specific for Python (lucide-react does not export Python)
  LaptopMinimal, // For general development/laptop
  // For general network/backend
  GraduationCap, // For GraduationCap icon
  Briefcase, // For Briefcase icon
} from 'lucide-react'; // Import relevant Lucide icons (some are placeholders)

// Map string names from data to actual Lucide components.
// Using more generic but appropriate icons where direct matches don't exist.
const TechIcons: { [key: string]: React.ElementType } = {
  'React.js': Component, // Using Component for frameworks
  'Next.js': LaptopMinimal, // Using LaptopMinimal for Next.js (web framework)
  'TypeScript': Type, // Using Type for TypeScript
  'JavaScript': FileCode, // Using FileCode for JavaScript
  'Tailwind CSS': Palette, // Using Palette for Tailwind CSS
  'Framer Motion': Sparkles, // Using Sparkles for Framer Motion
  'Redux': Layers, // Using Layers for Redux
  'Express.js': Server, // Using Server for backend framework
  'Node.js': Server, // Using Server for Node.js
  'Python': Code, // Use Code icon for Python (no Python icon in lucide-react)
  'Django': Code, // General code for Django
  'Next.js API Routes': Webhook, // Using Webhook for API routes
  'RESTful APIs': Webhook, // Using Webhook for APIs
  'MongoDB': HardDrive, // Using HardDrive for databases
  'PostgreSQL': HardDrive, // Using HardDrive for databases
  'Firebase Firestore': Cloud, // Using Cloud for Firebase
  'SQL': Database, // Using Database for SQL
  'Git': Gift, // Specific Git icon (using Gift as suggested)
  'Docker': Settings, // Using Settings for Docker/tools
  'Vercel': Cloud, // Using Cloud for Vercel
  'Netlify': Cloud, // Using Cloud for Netlify
  'AWS Basics': Cloud, // Using Cloud for AWS
  'CI/CD': SquareTerminal, // Using SquareTerminal for CI/CD
  'Briefcase': Briefcase, // from JourneyTimeline (if still used directly here)
  'GraduationCap': GraduationCap, // from JourneyTimeline
  'Laptop': LaptopMinimal, // Using LaptopMinimal from Navbar
  'Api': Webhook, // Using Webhook for general API
};


export default function TechStack() {
  // Aggregate all unique skills from all categories for a flat list of tech
  const uniqueTech = Array.from(new Set(
    skillCategories.flatMap(category =>
      category.skills.map(skill => skill.name)
    )
  )).sort(); // Sort alphabetically for consistent display

  // Removed itemVariants object as we are inlining animations.
  // const itemVariants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  // };

  return (
    <section className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            My Go-To Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            The core tools and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {uniqueTech.map((techName, index) => {
            // Find the specific icon for the technology
            // The type assertion ensures TypeScript knows Icon will be a React component type
            const Icon = TechIcons[techName] || Code; // Default to 'Code' icon if not found

            return (
              <motion.div
                key={techName}
                // Inlining animation properties instead of using variants
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: index * 0.05 // Faster staggered animation
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30
                           bg-secondary/10 text-foreground font-medium
                           transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-secondary"
              >
                <Icon className="h-5 w-5 text-secondary" />
                {techName}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
