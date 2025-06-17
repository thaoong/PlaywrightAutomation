import { test, expect } from '@playwright/test';
require('dotenv').config();

test('Access page with X_API-KEY token and check title', async ({ browser }) => {
  const token = process.env.X_API_KEY;
  const url = 'https://ai-insights.opswat.com/Case/00112233';
  const expectedTitle = '00112233 | Case | AI Insights'

  const context = await browser.newContext({
    extraHTTPHeaders: {
      "X-API-KEY": token
    }
  });

  const page = await context.newPage();
  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');

  const title = await page.title();
  console.log('Page title:', title);
  expect(title).toBe(expectedTitle);

});
