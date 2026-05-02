import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withNextIntl(nextConfig);
