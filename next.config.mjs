/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com"
      },
      {
        protocol: "https",
        hostname: "images-api.printify.com"
      }
    ]
  },
  webpack(config, { isServer }) {
    if (isServer) {
      config.output.chunkFilename = "chunks/[name].js";
    }

    return config;
  }
};

export default nextConfig;
