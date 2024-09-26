/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_KEY: '1c7a6b8445c7ffc7121cf1bf02bd1e59',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
            },
        ],
    },
};

export default nextConfig;
