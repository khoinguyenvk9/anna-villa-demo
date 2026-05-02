import createNextIntlPlugin from 'next-intl/plugin';

// Use a relative path as required by Turbopack
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
