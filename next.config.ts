import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 1080, 1600],
    imageSizes: [320],
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
