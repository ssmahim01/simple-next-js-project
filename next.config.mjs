/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/auth/:path*',
                destination: 'https://saymanshakilmahim.kinde.com/:path*',
            },
        ];
    },
};

export default nextConfig;
