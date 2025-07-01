'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2 } from 'lucide-react'; // Loading icon
import { cn } from '@/lib/utils'; // Import cn utility

// Define the schema for your contact form using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message cannot exceed 500 characters.' }),
});

interface ContactFormProps {
  className?: string; // Allow passing className from parent
}

export default function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState<'success' | 'error' | null>(null);

  // Initialize react-hook-form with Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset status

    // Simulate API call (replace with actual fetch to your backend/email service)
    console.log('Form data:', values); // Log values for debugging

    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
      setSubmissionStatus('success');
      form.reset(); // Clear the form on success
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        "bg-card/70 backdrop-blur-md rounded-xl border border-border p-8 shadow-lg",
        "w-full max-w-2xl mx-auto", // Ensure component takes full width up to a max, and is centered
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center md:text-left">
        Send Me a Message
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </motion.div>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </motion.div>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}>
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Project Inquiry, Collaboration, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </motion.div>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}>
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your detailed message..." rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </motion.div>
            )}
          />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </motion.div>

          {submissionStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-green-500 font-medium"
            >
              Your message has been sent successfully!
            </motion.p>
          )}
          {submissionStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-destructive font-medium"
            >
              Failed to send message. Please try again later.
            </motion.p>
          )}
        </form>
      </Form>
    </motion.div>
  );
}
