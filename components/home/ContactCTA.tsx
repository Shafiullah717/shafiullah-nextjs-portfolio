'use client';

import { motion } from 'framer-motion';
import Container from '../shared/Container';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react'; // Import Lucide icons

export default function ContactCTA() {
  return (
    // Section with padding, a subtle background, and a smooth entry animation
    <section className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Subtle background radial gradient for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center space-y-6 max-w-2xl mx-auto" // Increased max-width
        >
          <h2 className="sr-only">Contact Muhammad Shafiullah — Full Stack Developer</h2>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you have a groundbreaking project in mind, want to discuss a freelance opportunity,
            or just want to say hello, feel free to reach out! I&apos;m always open to new connections.
          </p>

          {/* Main CTA Button */}
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105">
            <Link href="/contact">
              Get in Touch <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* Social Links (Optional, if you want them here) */}
          <div className="flex justify-center gap-6 pt-4 text-muted-foreground">
            <Link href="mailto:your.shafiullahcheema@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1">
              <Mail className="h-5 w-5" /> Email
            </Link>
            <Link href="https://www.linkedin.com/in/shafi-ullah-086b83284/" target="_blank" rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </Link>
            <Link href="https://github.com/Shafiullah717" target="_blank" rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1">
              <Github className="h-5 w-5" /> GitHub
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}