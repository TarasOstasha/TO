/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Static export for PHP/shared hosting.
   * Generates an `out/` folder via `next build`.
   */
  output: "export",
  images: {
    // required for static export (no Next image optimizer on PHP hosting)
    unoptimized: true
  }
};

module.exports = nextConfig;

