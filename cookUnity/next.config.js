module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home?tab=confirm',
        permanent: true,
      },
    ];
  },
};
