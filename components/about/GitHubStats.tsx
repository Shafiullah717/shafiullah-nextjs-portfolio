'use client';

import { motion } from 'framer-motion';
import Container from '../shared/Container';
import { Github, Star, GitCommit, Users } from 'lucide-react'; // Import Lucide icons

// Placeholder for GitHub stats data
// In a real application, you would fetch this data from GitHub API
// (e.g., using a Next.js API route or server component)
const githubStats = {
  totalRepos: 30,
  totalStars: 50,
  totalCommits: 500,
  followers: 10,
};

export default function GitHubStats() {
  // Removed statVariants object as we are inlining animations.
  // const statVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
            My GitHub Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Showcasing my contributions and engagement in the open-source community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Total Repos */}
          <motion.div
            // Inlining animation properties instead of using variants
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="bg-card/70 backdrop-blur-md rounded-xl border border-border p-6 shadow-lg flex flex-col items-center text-center space-y-3"
          >
            <Github className="h-10 w-10 text-secondary" />
            <p className="text-4xl font-bold text-foreground">{githubStats.totalRepos}</p>
            <p className="text-muted-foreground text-lg">Total Repositories</p>
          </motion.div>

          {/* Total Stars */}
          <motion.div
            // Inlining animation properties instead of using variants
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="bg-card/70 backdrop-blur-md rounded-xl border border-border p-6 shadow-lg flex flex-col items-center text-center space-y-3"
          >
            <Star className="h-10 w-10 text-accent" />
            <p className="text-4xl font-bold text-foreground">{githubStats.totalStars}</p>
            <p className="text-muted-foreground text-lg">Total Stars</p>
          </motion.div>

          {/* Total Commits */}
          <motion.div
            // Inlining animation properties instead of using variants
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            className="bg-card/70 backdrop-blur-md rounded-xl border border-border p-6 shadow-lg flex flex-col items-center text-center space-y-3"
          >
            <GitCommit className="h-10 w-10 text-primary" />
            <p className="text-4xl font-bold text-foreground">{githubStats.totalCommits}</p>
            <p className="text-muted-foreground text-lg">Total Commits</p>
          </motion.div>

          {/* Followers */}
          <motion.div
            // Inlining animation properties instead of using variants
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className="bg-card/70 backdrop-blur-md rounded-xl border border-border p-6 shadow-lg flex flex-col items-center text-center space-y-3"
          >
            <Users className="h-10 w-10 text-secondary" />
            <p className="text-4xl font-bold text-foreground">{githubStats.followers}</p>
            <p className="text-muted-foreground text-lg">Followers</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
