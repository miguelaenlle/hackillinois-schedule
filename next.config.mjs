/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination: 'https://adonix.hackillinois.org/:path*',
            },
        ];
    }
};

export default nextConfig;
