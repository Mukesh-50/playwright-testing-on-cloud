const { test, expect } = require('@playwright/test');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown');

test('Login and Logout Test', async ({ browserName }) => 
{
  const capabilities = require('../config/capabilities');
  const capability = capabilities.find(cap => cap.browserName === browserName);

  if (!capability) {
    throw new Error(`No capability found for browser: ${browserName}`);
  }

  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();

  try {
    await page.goto('/index.php?route=account/login');
    await page.fill('#input-email', 'mukeshotwani.50@gmail.com');
    await page.fill('#input-password', 'Sample@1234');
    await page.click('input[type="submit"][value="Login"]');
    await expect(page).toHaveURL(/account/);
    await page.click("//a[contains(text(),'Logout')]");
    await expect(page).toHaveURL(/logout/);
    await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`);
  } catch (e) {
    await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`);
    throw e;
  } finally {
    await teardown(page, browser);
  }
});
