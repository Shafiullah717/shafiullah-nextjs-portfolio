'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Link as LinkIcon } from 'lucide-react';
import { Project } from '@/lib/data'; // Import the Project interface

interface ProjectCardProps {
  project: Project;
  index: number; // For staggered animation
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }} // Using 'animate' directly as it's part of a parent grid animation
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }} // Staggered animation
      whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }}
      className="relative rounded-2xl overflow-hidden border border-border p-6 shadow-lg transition-all
                 bg-card/70 backdrop-blur-md hover:border-secondary dark:hover:border-secondary/50 flex flex-col"
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
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
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
  );
}
