const { chromium } = require('playwright');

const connectToBrowser = async (capability) => {
  console.log('Initializing test:: ', capability['LT:Options']['name']);
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  });
  return browser;
};

module.exports = { connectToBrowser };
