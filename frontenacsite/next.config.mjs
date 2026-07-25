/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "FrontenacRoofing";

const nextConfig = {
  reactStrictMode: true,
  output: "export",                              // emit static HTML into out/
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : "",           // serve under /FrontenacRoofing on Pages
  assetPrefix: isPages ? `/${repo}/` : "",
};

export default nextConfig;
