/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Note: If you are using Next.js Image component (<Image />), 
  // you must also disable image optimization for static exports:
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
