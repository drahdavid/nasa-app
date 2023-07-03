/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["mars.nasa.gov", "mars.jpl.nasa.gov"],
	},
};

module.exports = nextConfig;
