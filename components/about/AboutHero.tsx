'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../shared/Container';
import { personalInfo } from '@/lib/data'; // Import personal info

export default function AboutHero() {
  // Animation for elements
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <Container className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left Column: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                     border-4 border-primary shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <Image
            src={personalInfo.profilePictureUrl}
            alt={`${personalInfo.name}'s Profile Picture`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </motion.div>

        {/* Right Column: Introduction Text */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, ease: ['easeOut'], delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-tight text-primary"
          >
            A Glimpse Into My World
          </motion.h1>
          <motion.p
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            // Explicitly list properties to avoid spread operator issue
            transition={{
              duration: fadeIn.transition.duration,
              ease: ['easeOut'],
              delay: 0.4
            }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl md:max-w-none mx-auto leading-relaxed"
          >
            {personalInfo.longBio}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
