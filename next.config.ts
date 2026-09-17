import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/mariagabriela" : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
};

export default nextConfig;
