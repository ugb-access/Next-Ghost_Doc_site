/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        ghostApiUrl: "https://ankush.disdicilo.it",
        ghostAdminKey:
            "62e14e0af5d1160001567855:303f7fc5f50a64ac780b19cfbef4188461ada5a41624f7dd14fae73ae8bca63d",
        ghostContentKey: "6ab350c76571c142b5953fa984",
    },
};

module.exports = nextConfig;
