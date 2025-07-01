'use client';

import { motion } from 'framer-motion';
import Container from '../shared/Container';

export default function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <Container className="text-center space-y-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondary/10 blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          Let&apos;s Connect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          I&apos;m always open to new opportunities, collaborations, and discussions. Feel free to reach out with any questions or just to say hello!
        </motion.p>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className="pt-4"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="text-lg font-medium">Get in touch today!</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}