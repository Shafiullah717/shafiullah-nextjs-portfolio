'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from '../shared/Container';
import { MessageSquareText, Download } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const services = [
  "Full Stack Development",
  "Game Development",
  "Artificial Intelligence"
];

const floatingShapes = [
  { top: '20%', left: '10%', size: 'w-4 h-4', color: 'bg-primary' },
  { top: '70%', left: '85%', size: 'w-6 h-6', color: 'bg-secondary' },
  { top: '40%', left: '15%', size: 'w-3 h-3', color: 'bg-accent' },
  { top: '60%', left: '90%', size: 'w-5 h-5', color: 'bg-purple-500' },
  { top: '30%', left: '80%', size: 'w-3.5 h-3.5', color: 'bg-blue-500' },
];

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-12 md:py-0">
      {/* Futuristic background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 dark:opacity-10"></div>
        <motion.div 
          className="absolute top-1/4 left-[15%] w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-20 dark:opacity-15"
          animate={{ scale: [1, 1.2, 1], x: [-20, 0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-[15%] w-[40vw] h-[40vw] max-w-[350px] max-h-[350px] bg-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-20 dark:opacity-15"
          animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>

      <Container className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 h-full">
        {/* LEFT COLUMN */}
        <motion.div 
          className="flex-1 text-center md:text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Muhammad Shafiullah Cheema <span className='sr-only'> Full Stack Developer</span>
          </motion.h1>
          <p className="sr-only">
            Muhammad Shafiullah Cheema is a Pakistani full-stack developer building modern web applications with Next.js, TypeScript, and Tailwind CSS.
          </p>

          {/* SEO-friendly hidden text for crawlers */}
          <span className="sr-only">
            Muhammad Shafiullah Cheema is a Full Stack Developer with expertise in Game Development and Artificial Intelligence, building modern web experiences with Next.js, Tailwind CSS, and TypeScript.
          </span>

          {/* Animated service titles */}
          <motion.h2 
            className="h-20 sm:h-24 md:h-28 flex items-center justify-center md:justify-start overflow-hidden text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, y: 50 * direction }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 * direction }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
              >
                {services[currentService]}
              </motion.div>
            </AnimatePresence>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mt-2 mb-8 mx-auto md:mx-0"
          >
            Crafting <strong className="text-primary">visually impressive</strong> and <strong className="text-secondary">highly functional</strong> web experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg group">
                <Link href="/Resume.pdf" download title="Download Muhammad Shafiullah's Resume">
                  <span className="flex items-center justify-center">
                    <span>Download CV</span>
                    <Download className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="outline" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg group">
                <Link href="/contact" title="Contact Muhammad Shafiullah">
                  <span className="flex items-center justify-center">
                    <span>Get in Touch</span>
                    <MessageSquareText className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN – Image */}
        <motion.div 
          className="flex-1 flex justify-center relative w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full aspect-square">
            {floatingShapes.map((shape, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-full ${shape.color} ${shape.size} opacity-70`}
                style={{ top: shape.top, left: shape.left }}
                animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, repeatType: "reverse", delay: index * 0.5 }}
              />
            ))}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(99,102,241,0.1)_0%,rgba(168,85,247,0.1)_25%,rgba(236,72,153,0.1)_50%,rgba(99,102,241,0.1)_75%,rgba(168,85,247,0.1)_100%)] animate-spin-slow"></div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-primary via-purple-500 to-secondary p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-secondary/20 blur-xl animate-pulse-slow"></div>
                <motion.div 
                  className="relative rounded-full overflow-hidden w-full h-full border-8 border-background"
                  whileHover={{ scale: 1.03 }}
                >
                  <Image 
                    src="/pictures/og-image.png"
                    alt="Portrait of Muhammad Shafiullah Cheema – Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background px-3 py-1.5 rounded-full shadow-md border text-sm md:text-base"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="font-bold text-primary">Full Stack</span>
              <span className="text-muted-foreground"> Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </header>
  );
}
