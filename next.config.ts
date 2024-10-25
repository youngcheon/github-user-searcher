import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
