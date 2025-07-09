'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from '../shared/Container';
import { ArrowRight, MessageSquareText, ChevronsDown, Download, MessageCircle } from 'lucide-react';
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
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-12 md:py-0">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 dark:opacity-10"></div>
        
        {/* Floating blobs with different animations */}
        <motion.div 
          className="absolute top-1/4 left-[15%] w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-20 dark:opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-[15%] w-[40vw] h-[40vw] max-w-[350px] max-h-[350px] bg-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-20 dark:opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        ></motion.div>
      </div>

      <Container className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 h-full">
        {/* Left Column - Content */}
        <motion.div 
          className="flex-1 text-center md:text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Muhammad Shafiullah Cheema
          </motion.h1>

          {/* Animated Services */}
          <motion.div 
            className="h-20 sm:h-24 md:h-28 flex items-center justify-center md:justify-start overflow-hidden"
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
                className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-6"
              >
                <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                  {services[currentService]}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mt-2 mb-8 mx-auto md:mx-0"
          >
            Crafting <span className="font-semibold text-primary">visually impressive</span> and <span className="font-semibold text-secondary">highly functional</span> web experiences
          </motion.p>

          {/* Action Buttons - Improved mobile layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg group">
                <Link href="#projects">
                  <span className="flex items-center justify-center">
                    <span>View Projects</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="outline" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg group">
                <Link href="#contact">
                  <span className="flex items-center justify-center">
                    <span>Get in Touch</span>
                    <MessageSquareText className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="w-full group" variant="secondary">
                <Link href="/Resume.pdf" download>
                  <span className="flex items-center justify-center">
                    <span>Download CV</span>
                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg group">
                <Link href="https://wa.me/923027176662" target="_blank">
                  <span className="flex items-center justify-center">
                    <span>WhatsApp</span>
                    <MessageCircle className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div 
          className="flex-1 flex justify-center relative w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full aspect-square">
            {/* Floating elements */}
            {floatingShapes.map((shape, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-full ${shape.color} ${shape.size} opacity-70`}
                style={{
                  top: shape.top,
                  left: shape.left,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5,
                }}
              />
            ))}
            
            {/* Holographic gradient background */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(99,102,241,0.1)_0%,rgba(168,85,247,0.1)_25%,rgba(236,72,153,0.1)_50%,rgba(99,102,241,0.1)_75%,rgba(168,85,247,0.1)_100%)] animate-spin-slow"></div>
            </div>
            
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-primary via-purple-500 to-secondary p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {/* Digital glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-secondary/20 blur-xl animate-pulse-slow"></div>
                
                {/* Personal image with hover effect */}
                <motion.div 
                  className="relative rounded-full overflow-hidden w-full h-full border-8 border-background"
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Replace with your actual image path */}
                  <Image 
                    src="/pictures/og-image.png" 
                    alt="Muhammad Shafiullah Cheema"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>
            {/* absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-foreground/80 dark:bg-foreground/90 text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg */}
            
            {/* Tech icons floating around */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background px-3 py-1.5 rounded-full shadow-md border text-sm md:text-base"
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="font-bold text-primary">Full Stack</span>
              <span className="text-muted-foreground"> Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator - Centered and responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <ChevronsDown className="h-5 w-5" />
          <span className="text-xs mt-1">Explore more</span>
        </motion.div>
      </motion.div>
    </section>
  );
}