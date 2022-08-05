/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    swcMinify: true,
    env: {
        ghostApiUrl: "https://usman.ghost.io",
        ghostAdminKey:
            "62ed2b31276fc8003d62a405:208a33882ca3158725733200d1ed9ca860e0ad810ee3794c3df7c7f500f098a9",
        ghostContentKey: "b38963942a5af962cc3f7fa552",
        NEXT_PUBLIC_AUTH_URL: "",
        NEXT_PUBLIC_AUTH_REALM: "",
        NEXT_PUBLIC_AUTH_CLIENT_ID: "",
    },
};

module.exports = nextConfig;
