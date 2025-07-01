'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../shared/Container';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import { allProjects, Project } from '@/lib/data'; // Import allProjects data and Project interface

interface ProjectsGridProps {
  activeFilter: string;
}

export default function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
  const filteredProjects = React.useMemo(() => {
    if (activeFilter === 'All') {
      return allProjects;
    }
    return allProjects.filter(project => project.category.includes(activeFilter));
  }, [activeFilter]);

  // Framer Motion container variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for individual project cards
      },
    },
  };

  return (
    <section className="py-8 bg-background">
      <Container>
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-muted-foreground text-lg py-10"
          >
            No projects found for the selected category.
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* AnimatePresence for smooth exit/entry when filtering changes */}
            <AnimatePresence>
              {filteredProjects.map((project: Project, index: number) => (
                // Use key for AnimatePresence to track items
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
