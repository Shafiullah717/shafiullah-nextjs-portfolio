# My Personal Portfolio

![Portfolio Preview Image - Placeholder](/public/Preview.png)

A sleek, modern, and highly responsive personal portfolio website designed to showcase my projects, skills, and professional journey as a Full-stack Developer. Built with Next.js, powered by React, and styled with Tailwind CSS, this portfolio aims to provide an engaging and intuitive user experience.

---

## 🚀 Features

This portfolio is packed with features to effectively present my work and make it easy for visitors to connect:

* **Modern & Responsive Design:** Crafted with Tailwind CSS and `shadcn/ui` for a beautiful, consistent, and responsive layout that looks great on any device.
* **Dynamic Hero Section:** A captivating introduction with animated elements and a gradient-text name.
* **About Me Section:**
    * Detailed personal biography.
    * Showcase of key skill categories (Frontend, Backend, Databases, Tools & DevOps).
    * Interactive professional journey timeline.
* **Comprehensive Projects Showcase:**
    * Dedicated page to list all projects with concise descriptions.
    * Detailed view for each project (if `longDescription` is used).
    * Links to live demos and GitHub repositories.
    * Highlights featured projects on the homepage.
* **Direct Contact Information:**
    * Easy access to email, phone, LinkedIn, and GitHub.
    * Convenient copy-to-clipboard functionality for contact details.
    * Real-time availability status.
* **Smooth Animations:** Utilizes Framer Motion for delightful and subtle animations, enhancing the user experience.
* **Type-Safe Development:** Built entirely with TypeScript for robust and maintainable code.
* **SEO Friendly:** Leverages Next.js's capabilities for optimized performance and search engine visibility.

---

## 🛠️ Technologies Used

This project is built using a modern and powerful stack:

* **Next.js 14+:** A React framework for production, providing server-side rendering, static site generation, and API routes.
* **React.js:** For building interactive user interfaces.
* **TypeScript:** For type safety and improved developer experience.
* **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling.
* **Framer Motion:** A production-ready animation library for React.
* **Lucide React:** A beautiful and consistent icon library.
* **shadcn/ui:** Reusable UI components built with Radix UI and Tailwind CSS.

---

## ⚙️ Installation & Local Setup

Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn or pnpm

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Shafiullah717/Your-Portfolio-Repo-Name.git](https://github.com/Shafiullah717/Your-Portfolio-Repo-Name.git)
    cd Your-Portfolio-Repo-Name # Replace with your actual repository name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    # OR
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # OR
    yarn dev
    # OR
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📂 Project Structure

A brief overview of the main directories and files:

portfolio-dev/
├── app/                  # Next.js App Router root
│   ├── (main)/           # Main layout and pages
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About page
│   │   │   └── page.tsx
│   │   ├── contact/      # Contact page
│   │   │   └── page.tsx
│   │   ├── projects/     # Projects page
│   │   │   └── page.tsx
│   │   └── layout.tsx    # Root layout for all pages
│   └── favicon.ico       # Favicon
├── components/           # Reusable React components
│   ├── home/             # Components specific to the homepage (Hero, AboutPreview, ContactCTA)
│   ├── shared/           # Components used across multiple pages (Container, Navbar, Footer)
│   └── ui/               # shadcn/ui components (Button, Input, Textarea, etc.)
├── lib/                  # Utility functions and data
│   ├── data.ts           # All static portfolio data (personal info, skills, projects, journey)
│   └── utils.ts          # Utility functions (e.g., for Tailwind CSS class merging)
├── public/               # Static assets (images, fonts, etc.)
│   ├── pictures/         # Your profile picture and project screenshots
│   └── Projects/         # More project specific images
├── .env.local.example    # Example environment variables (if any are used)
├── next.config.mjs       # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file

## 🚀 Deployment

This portfolio is designed for easy deployment to platforms like Vercel (recommended for Next.js applications), Netlify, or any other static hosting service.

1.  **Build the project for production:**
    ```bash
    npm run build
    # OR
    yarn build
    # OR
    pnpm build
    ```
    This will create an optimized `out` directory (for static export) or `.next` directory (for server-side rendering).

2.  **Deploy to Vercel:**
    * Connect your GitHub repository to a new project on [Vercel](https://vercel.com/).
    * Vercel will automatically detect that it's a Next.js project and configure the build process.
    * Ensure your environment variables (if any) are set up in Vercel.

**Important:** Remember to update the `metadataBase` in your `app/layout.tsx` file to your actual deployed domain for correct social media image sharing.

```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // ...
  metadataBase: new URL('[https://your-portfolio-domain.com](https://your-portfolio-domain.com)'), // <-- UPDATE THIS!
  // ...
};
