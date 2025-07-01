'use client';

import { motion, easeOut } from 'framer-motion';
import Container from '../shared/Container';
import { journeyEvents } from '@/lib/data'; // Import journey events data
import { Briefcase, GraduationCap, Laptop, Code } from 'lucide-react'; // Import relevant Lucide icons

// Map icon names from data to actual Lucide components
const IconComponents = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Laptop: Laptop,
  Code: Code,
};

// Fallback Dot icon component
const Dot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx="10" cy="10" r="5" />
  </svg>
);

export default function JourneyTimeline() {
  // Animation variants for timeline items
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            My Journey & Milestones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A chronological look at my professional and learning path.
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-20 border-l-2 border-primary/20">
          {journeyEvents.map((event, index) => {
            const Icon = event.icon ? IconComponents[event.icon as keyof typeof IconComponents] : Dot; // Fallback to Dot if icon not found
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }} // Staggered animation for each event
                className="mb-10 flex items-start last:mb-0"
              >
                {/* Icon on the timeline */}
                <div className="absolute -left-3.5 md:-left-4 mt-2 p-2 rounded-full bg-primary text-primary-foreground shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                {/* Timeline Event Content */}
                <div className="ml-6 md:ml-8 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.year}</p>
                  <p className="text-md text-foreground mt-2 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
