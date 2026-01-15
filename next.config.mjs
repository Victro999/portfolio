/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hum7264a4z.ufs.sh",
                port: "",
                pathname: "/f/**",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: "",
                pathname: "/wikipedia/commons/**",
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.mmd$/,
            type: "asset/source",
        });
        return config;
    },
};

export default nextConfig;
