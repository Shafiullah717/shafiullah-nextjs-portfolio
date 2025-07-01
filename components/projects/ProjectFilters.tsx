'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Container from '../shared/Container';
import { allProjects } from '@/lib/data'; // Import allProjects data

interface ProjectFiltersProps {
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

export default function ProjectFilters({ onFilterChange, activeFilter }: ProjectFiltersProps) {
  // Get all unique categories from all projects
  const categories = React.useMemo(() => {
    const allCategories = new Set<string>();
    allProjects.forEach(project => {
      project.category.forEach(cat => allCategories.add(cat));
    });
    return ['All', ...Array.from(allCategories).sort()]; // Add 'All' option and sort alphabetically
  }, []);

  return (
    <section className="py-8 bg-background">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              className={
                activeFilter === category
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md'
                  : 'border-muted-foreground/30 text-muted-foreground hover:bg-muted/30 dark:border-muted/50 dark:hover:bg-muted/10'
              }
              onClick={() => onFilterChange(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
