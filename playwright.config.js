const { defineConfig } = require('@playwright/test');
const capabilities = require('./config/capabilities');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io",
    trace: 'on-first-retry',
  },
  projects: capabilities.map(capability => ({
    name: capability['LT:Options']['name'],
    use: {
      browserName: capability.browserName,
      ...capability['LT:Options'],
    },
  })),
  workers: 3
});
