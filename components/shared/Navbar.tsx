'use client'; // This component must be a Client Component

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get current path for active link styling
import { Menu, X } from 'lucide-react'; // Icons for mobile menu toggle
import { cn } from '@/lib/utils'; // Utility for merging Tailwind classes
import Container from './Container'; // Your shared Container component
import { ThemeToggle } from '@/components/ThemeToggle' // Corrected import path (assuming ThemeToggle is in the same 'shared' directory)
import { Button } from '@/components/ui/button'; // Import the Button component
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence for animations

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  // { name: 'Resume', href: '/resume' }, // Optional: uncomment if you want a resume page
];

export default function Navbar() {
  const pathname = usePathname(); // Get the current path
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // State for mobile menu visibility

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 bg-background/80 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300">
      <Container className="flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="text-2xl font-heading font-bold text-primary hover:text-primary/90 transition-colors">
          Shafiullah {/* Your name/brand */}
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-lg font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground' // Active link styling
              )}
            >
              {link.name}
            </Link>
          ))}
          {/* Theme Toggle for desktop */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle /> {/* Theme Toggle for mobile, next to hamburger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>
      </Container>

      {/* Mobile Menu Overlay - Wrapped in AnimatePresence for exit animations */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Framer motion exit animation
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0
                       bg-background/95 backdrop-blur-lg
                       flex flex-col items-center justify-start py-8 z-40
                       h-screen pt-[calc(var(--navbar-height)+2rem)] space-y-8" /* Adjusted for full height and proper top padding */
            style={{ '--navbar-height': '64px' } as React.CSSProperties} // Define the actual navbar height
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-3xl font-heading font-bold transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground'
                )}
                onClick={handleLinkClick} // Use the new handler to close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
