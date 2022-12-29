/** @type {import('next').NextConfig} */
module.exports = {
    output: 'standalone',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dungeons/ruby-life-pools',
                permanent: true,
            },
        ];
    },
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
