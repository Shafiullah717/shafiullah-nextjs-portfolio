'use client';

import * as React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 py-12 md:py-16">
      <ContactHero />
      
      {/* Improved responsive grid layout */}
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-30">
            <ContactForm />
          </div>
          <div className="lg:col-span-30 lg:sticky top-24 h-fit">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}