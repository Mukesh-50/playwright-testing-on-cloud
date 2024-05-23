const { test, expect } = require('@playwright/test');
const { chromium, playwright } = require('playwright')
const cp = require('child_process');

const parallelTests = async (capability) => 
{
  console.log('Initialising test:: ', capability['LT:Options']['name'])

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  })

  const page = await browser.newPage()
  try 
  {
      await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
      await page.fill('#input-email', 'mukeshotwani.50@gmail.com');
      await page.fill('#input-password', 'Sample@1234');
      await page.click('input[type="submit"][value="Login"]');
      expect(page.url()).toContain('account');
      await page.click("//a[contains(text(),'Logout')]");
      expect(page.url()).toContain('logout');
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
    await teardown(page, browser)
  } catch (e) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`)
    await teardown(page, browser)
    throw e.stack
  }
}

async function teardown(page, browser) {
  await page.close();
  await browser.close();
}

const capabilities = [
  {
    'browserName': 'MicrosoftEdge', 
    'browserVersion': '122.0',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Test With Lambdatest',
      'name': 'Playwright Test With Lambdatest on Windows 10 - Chrome',
      'user': 'enter your lambdatest username',
      'accessKey': 'enter your lambdatest accesskey',
      'network': true,
      'video': true,
      'console': true
    }
  }
  ]

capabilities.forEach(async (capability) => {
  await parallelTests(capability)
})
