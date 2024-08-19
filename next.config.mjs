/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:slug',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-max-age=123',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
