'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from './Container';
import { personalInfo } from '@/lib/data';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const footerNavLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const SocialIcons: { [key: string]: React.ElementType } = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  Instagram: Instagram,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gradient-to-t from-background via-background/90 to-background/80 border-t border-border/30 pt-12 pb-6"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Branding section */}
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              {personalInfo.name.split(' ')[0]}
            </Link>
            <p className="mt-3 text-muted-foreground max-w-xs">
              Building exceptional digital experiences with modern web technologies.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity mr-2"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {personalInfo.socialLinks.map((social) => {
                const Icon = SocialIcons[social.icon as keyof typeof SocialIcons];
                if (!Icon) return null;
                return (
                  <motion.div
                    key={social.name}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center border border-border/50 hover:border-primary/30 transition-all group"
                      aria-label={`Link to my ${social.name}`}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright + Divider */}
        <div className="flex flex-col items-center border-t border-border/20 pt-6">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Crafted with passion in Next.js
          </p>
        </div>
      </Container>
    </motion.footer>
  );
}