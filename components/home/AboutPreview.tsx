'use client';

import { motion } from 'framer-motion';
import Container from '../shared/Container';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Layout, Server, Database } from 'lucide-react';

export default function AboutPreview() {
  const skills = [
    { name: 'Frontend', icon: <Layout size={20} /> },
    { name: 'Backend', icon: <Server size={20} /> },
    { name: 'Databases', icon: <Database size={20} /> },
    { name: 'GameDev', icon: <Code size={20} /> },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5">
        <div className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-[15%] w-32 h-32 rounded-full bg-secondary blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px]">
              <div className="absolute -inset-3 rounded-xl bg-muted/20 blur-md"></div>
              <div className="relative border-4 border-background rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/pictures/Profile.png" // Replace with your actual image path
                  alt="Developer Avatar"
                  width={400}
                  height={400}
                  className="aspect-square object-cover transition-all duration-500 hover:scale-105"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-background px-3 py-1.5 rounded-full shadow-md border text-sm md:text-base">
                <span className="font-bold text-primary">3+ Years</span>
                <span className="text-muted-foreground"> Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <div className="w-full md:w-3/5 space-y-5 md:space-y-6">
          <h2 className="sr-only">About Muhammad Shafiullah — Full Stack Developer</h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary"
            >
              Crafting Digital Experiences
            </motion.h2>
            

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-base md:text-lg text-muted-foreground"
            >
              I&apos;m <strong>Muhammad Shafiullah Cheema</strong>, a passionate full-stack developer specializing in creating intuitive,
              high-performance web applications. With expertise in both{' '}
              <span className="font-semibold text-foreground">frontend design</span> and{' '}
              <span className="font-semibold text-foreground">backend architecture</span>,
              I bridge the gap between design and functionality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-base md:text-lg text-muted-foreground"
            >
              My approach combines cutting-edge technology with user-centric design to
              deliver solutions that not only look great but also scale effortlessly.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-background border rounded-lg p-3 hover:shadow-sm transition-all"
                >
                  <div className="text-foreground">{skill.icon}</div>
                  <span className="font-medium text-foreground text-sm sm:text-base">{skill.name}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="pt-3"
            >
              <Button asChild className="group">
                <Link href="/about" className="font-medium">
                  Explore My Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}