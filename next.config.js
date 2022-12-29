/** @type {import('next').NextConfig} */
module.exports = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.icy-veins.com',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
};
