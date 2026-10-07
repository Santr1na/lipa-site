import type { NextConfig } from "next";

function pagesBasePath() {
  const value = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (!value || value === "/") return undefined;
  return value.startsWith("/") ? value.replace(/\/$/, "") : `/${value}`;
}

const basePath = pagesBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
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
