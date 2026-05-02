import createNextIntlPlugin from 'next-intl/plugin';

// Use a relative path as required by Turbopack
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

// Set by actions/configure-pages when deploying to GitHub Pages project site
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true, // Crucial for GitHub Pages to support clean URLs
};

let config = withNextIntl(nextConfig);

// Manually add images config to the processed config object to avoid mis-merging
config.images = {
  unoptimized: true,
};

// Cleanup experimental keys mis-merged by next-intl in some environments
if (config.experimental && typeof config.experimental === 'object') {
  delete config.experimental.images;
}

export default config;
