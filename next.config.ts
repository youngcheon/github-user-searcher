import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/search',
				permanent: true,
			},
		];
	},
	images: {
		domains: ['github.com', 'avatars.githubusercontent.com'],
	},
};

export default nextConfig;
