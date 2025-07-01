'use client';

import { motion } from 'framer-motion';
import Container from '../shared/Container';

export default function ProjectHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <Container className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-tight text-primary"
        >
          My Creative Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          A collection of my work, ranging from full-stack applications to intricate frontend designs. Each project reflects my passion for crafting robust and user-centric web experiences.
        </motion.p>
      </Container>
    </section>
  );
}
