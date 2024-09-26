/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_KEY: 'yourAPIkeyhere',
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
