import NextFederationPlugin from '@module-federation/nextjs-mf';
//npm install @module-federation/nextjs-mf

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    hero_component: `hero_component@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    camp_component: `camp_component@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
    guide_component: `guide_component@http://localhost:3004/_next/static/${location}/remoteEntry.js`,
    feature_component: `feature_component@http://localhost:3005/_next/static/${location}/remoteEntry.js`,
    getapp_component: `getapp_component@http://localhost:3006/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host_app',
        remotes: remotes(isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false, // `false` by default
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
