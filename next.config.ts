import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    position: "bottom-left",
  },
  experimental: {
    transitionIndicator: true,
  },
};

export default nextConfig;
