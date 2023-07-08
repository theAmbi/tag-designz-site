/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
}

module.exports = nextConfig
