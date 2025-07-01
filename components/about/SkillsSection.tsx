'use client';

import { motion } from 'framer-motion';
import Container from '../shared/Container';
import { skillCategories } from '@/lib/data'; // Import skill categories data
import { Dot } from 'lucide-react'; // Placeholder icon if no specific icon is needed

export default function SkillsSection() {
  // Removed categoryVariants object as we are inlining animations.
  // const categoryVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: 'easeOut',
  //     },
  //   },
  // };

  return (
    <section className="py-20 bg-muted/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            My Skillset
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A comprehensive overview of the technologies and tools I master.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              // Inlining animation properties instead of using variants
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: catIndex * 0.15 // Stagger categories
              }}
              className="bg-card/70 backdrop-blur-md rounded-xl border border-border p-6 shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 border-b pb-2 w-full">
                {category.category}
              </h3>
              <ul className="space-y-2 text-muted-foreground flex-grow w-full">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center justify-center text-md">
                    {/* Placeholder for specific skill icons if needed later */}
                    <Dot className="h-4 w-4 mr-2 text-secondary" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
