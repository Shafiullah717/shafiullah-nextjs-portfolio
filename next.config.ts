import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    // List of allowed image domains for next/image
    domains: [
      'placehold.co', // Add this line to allow images from placehold.co
      // Add any other external image domains you plan to use here
    ],
  },
};

export default nextConfig;
