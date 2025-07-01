'use client';

import { motion } from 'framer-motion';
import Container from '../shared/Container';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon, ArrowRight } from 'lucide-react';

// Import allProjects from your data file
import { allProjects, Project } from '@/lib/data'; // Import Project interface as well

export default function FeaturedProjects() {
  // Filter for only featured projects to display on the home page
  const featuredProjects = allProjects.filter(project => project.featured);

  return (
    <section className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project: Project, idx: number) => ( // Use Project type for clarity
              <motion.div
                key={project.id} // Use unique project ID as key
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }}
                className="relative rounded-2xl overflow-hidden border border-border p-6 shadow-lg transition-all
                           bg-card/70 backdrop-blur-md hover:border-secondary dark:hover:border-secondary/50"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-border">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium
                                 bg-secondary text-secondary-foreground dark:bg-secondary/20 dark:text-secondary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links with Icons */}
                <div className="flex gap-4 text-sm font-medium">
                  <Link
                    href={project.link}
                    className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="h-4 w-4" /> Live
                  </Link>
                  <Link
                    href={project.github}
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* "View All Projects" CTA Button */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
