import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/AIxEdu" : "",
  assetPrefix: isGitHubPages ? "/AIxEdu/" : ""
};

export default nextConfig;
