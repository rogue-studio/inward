import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/human/go-takada",
        destination: "/human/go-takada/index.html",
      },
    ];
  },
};

export default nextConfig;
