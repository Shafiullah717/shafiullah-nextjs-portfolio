'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Github, Copy, Check, Instagram,  } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ContactInfoProps {
  className?: string;
}

export default function ContactInfo({ className }: ContactInfoProps) {
  const [copied, setCopied] = React.useState(false);
  const [copiedItem, setCopiedItem] = React.useState<string | null>(null);

  const SocialIcons: { [key: string]: React.ElementType } = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail,
    Instagram: Instagram,
    Phone: Phone,
  };

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setCopiedItem(name);
    setTimeout(() => {
      setCopied(false);
      setCopiedItem(null);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      className={cn(
        "bg-card/70 backdrop-blur-md rounded-xl border border-border p-8 shadow-lg flex flex-col",
        "w-full max-w-2xl mx-auto",
        className
      )}
    >
      <div className="space-y-6 flex-grow">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center md:text-left">
          My Contact Details
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m always happy to discuss new projects, job opportunities, or just chat about tech!
          </p>
        </motion.div>

        {/* Enhanced Contact Details */}
        <div className="space-y-4 pt-4">
          {personalInfo.socialLinks.map((contact, index) => {
            const Icon = SocialIcons[contact.icon as keyof typeof SocialIcons];
            const displayText = contact.href.replace('mailto:', '').replace('tel:', '');

            return (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
                className="group relative border-b border-border/50 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-secondary/10 group-hover:bg-primary/10 transition-colors">
                    <Icon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.name}</p>
                    <Link
                      href={contact.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors break-all"
                    >
                      {displayText}
                    </Link>
                  </div>
                </div>

                {/* Copy Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(displayText, contact.name)}
                >
                  {copied && copiedItem === contact.name ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Availability Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className="mt-8 pt-6 border-t border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Availability</h3>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-muted-foreground">Currently available for freelance work</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Typical response time: <span className="text-foreground">within 24 hours</span>
          </p>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="pt-8 border-t border-border mt-8">
        <h3 className="text-xl font-semibold text-foreground mb-4 text-center md:text-left">
          Connect with me
        </h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {personalInfo.socialLinks.filter(link => link.name !== 'Email' && link.name !== 'Phone').map((social, index) => {
            const Icon = SocialIcons[social.icon as keyof typeof SocialIcons];
            if (!Icon) return null;
            return (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-lg group"
                >
                  <Icon className="h-6 w-6 text-secondary transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">{social.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}