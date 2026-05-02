import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const config = withNextIntl(nextConfig);

// Fix mis-merged experimental key in some CI environments/versions
if (config.experimental && config.experimental.images) {
  delete config.experimental.images;
}

export default config;
