'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from '../shared/Container';
import { ArrowRight, MessageSquareText, ChevronsDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] flex items-center justify-center text-center relative overflow-hidden py-40">
      {/* Background with subtle gradient blobs */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-[15%] w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-[15%] w-[40vw] h-[40vw] max-w-[350px] max-h-[350px] bg-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-10 max-w-4xl mx-auto"
        >
          {/* Single-line heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight
                          text-foreground"
            >
              Hi, I&apos;m{' '}
              <motion.span
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                className="inline-block relative z-10
                           bg-[length:300%_300%] bg-clip-text text-transparent
                           bg-gradient-to-r from-primary via-purple-500 to-secondary
                           drop-shadow-md"
              >
                Shafiullah
              </motion.span>
            </motion.h1>
          </div>

          {/* Description text with increased spacing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mt-10"
          >
            Crafting <span className="font-semibold text-primary">visually impressive</span> and <span className="font-semibold text-secondary">highly functional</span> web experiences
          </motion.p>

          {/* Buttons with increased spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-12"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white shadow-lg transition-all"
              >
                <Link href="/projects">
                  <span className="flex items-center">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary shadow-lg transition-colors"
              >
                <Link href="/contact">
                  <span className="flex items-center">
                    Get in Touch
                    <MessageSquareText className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator positioned lower */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <ChevronsDown className="h-6 w-6" />
          <span className="text-xs mt-2">Explore more</span>
        </motion.div>
      </motion.div>
    </section>
  );
}