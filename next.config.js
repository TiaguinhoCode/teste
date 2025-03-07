/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint não bloqueará o build em caso de erros
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
