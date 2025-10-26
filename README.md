# 🎯 Playwright Automation: Automated Regression test

This project automates a **complete login, content search, playback, and logout flow** for the [TubeonAI](https://web.tubeonai.com/) website using **Playwright**.  
It verifies that a user can log in successfully, search for a YouTube video, play the audio, and log out — ensuring the core user journey works as expected.

---

## 🧠 Test Overview

**Test File:** `tests/login.spec.js`  
**Framework:** [Playwright Test](https://playwright.dev/)  
**Language:** JavaScript  

### ✅ Test Scenario: Direct Login to TubeonAI

1. Navigate directly to the TubeonAI login page.  
2. Fill in valid **email** and **password** credentials.  
3. Click the **Sign In** button.  
4. Wait until the dashboard is fully loaded.  
5. Enter a YouTube URL into the search bar and press **Enter**.  
6. Wait for the video titled _“Best Short Motivational Speech”_ to appear.  
7. Click on the **Play Audio** button to start playback.  
8. Open the **profile dropdown menu**.  
9. Click **Log out** to end the session.

---
### ⚙️ Run Instructions
```bash
npm install
npx playwright install
npx playwright test tests/login.spec.js

## 🧾 Sample Test Code

javascript
import { test, expect } from '@playwright/test';

test('Direct login to website', async ({ page }) => {
  // 1️⃣ Go directly to login page
  await page.goto('https://web.tubeonai.com/login?email=true');

  // 2️⃣ Fill in credentials
  await page.fill('input[type="email"], input[name="email"]', 'User_Email');
  await page.fill('input[type="password"], input[name="password"]', '1234567890');

  // 3️⃣ Click the login button
  await page.getByRole('button', { name: /sign in/i }).click();

  // 4️⃣ Wait for successful navigation
  await page.waitForLoadState('networkidle');

  // 5️⃣ Fill up the search bar and press Enter
  await page.fill('input[placeholder="Search Youtube or Paste any public URL"]', 'https://www.youtube.com/watch?v=fLeJJPxua3E');
  await page.getByPlaceholder(/Search Youtube or Paste any public URL/i).press('Enter');
  await page.waitForSelector('text=Best Short Motivational Speech', { timeout: 40000 });

  // 6️⃣ Click Play Audio
  await page.waitForSelector('button:has-text("Play Audio")', { timeout: 40000 });
  await page.click('button:has-text("Play Audio")');

  // 7️⃣ Click profile image to open dropdown
  await page.waitForSelector('img[alt*="profile"], img[alt*="avatar"], img[src*="https"]', { timeout: 45000 });
  await page.click('img[alt*="profile"], img[alt*="avatar"], img[src*="https"]');

  // 8️⃣ Wait for dropdown menu to appear
  await page.waitForSelector('text=Log out', { timeout: 10000 });

  // 9️⃣ Click "Log out"
  await page.click('text=Log out');
});
```

## 👤 Author

## Md Zakaria Hossen Emon
### Regression Testing Project – 2025
