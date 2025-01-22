import { env } from '@/env';
import { config, withAnalyzer } from '@forge/next';
import { withLogtail, withSentry } from '@forge/observability/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = withLogtail({ ...config });

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
