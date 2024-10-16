const defaultAuthConfig = {
  cacheLocation: 'localstorage',
  authorizationParams: {
    scope: 'openid profile email',
  },
};

const config = {
  auth: {
    ...defaultAuthConfig,
    domain: 'gold-python-27340.cic-demo-platform.auth0app.com',
    clientId: 'XspdotQsy5xGDzWRE2xLRuI71p9lWJXf',
    // UNCOMMENT the following line to test the private API
    audience: ['api://authrocks/'],
  },
  app: {
    enableSilentAuth: false,
    port: 3000,
  },
  server: {
    permissions: ['authRocks'],
  },
};

export default config;
