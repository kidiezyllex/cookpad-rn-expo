/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
	// Giảm thiểu vấn đề file locking trên Windows
	experimental: {
		// Sử dụng file system cache tốt hơn
		optimizePackageImports: ['swiper', 'iconsax-reactjs'],
	},
	// Tắt một số tính năng có thể gây lock file
	swcMinify: true,
	webpack: (config, { dev, isServer }) => {
		config.infrastructureLogging = {
			level: "error",
		};

		// Giảm thiểu vấn đề file locking trên Windows
		if (process.platform === 'win32') {
			config.watchOptions = {
				poll: 1000,
				aggregateTimeout: 300,
				ignored: /node_modules/,
			};
		}

		config.module.rules.push({
			test: /flag-icons.*\.css$/,
			type: "asset/resource",
		});
		return config;
	},
	images: {
		qualities: [25, 50, 75, 100],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
		],
	},
};

export default nextConfig;

