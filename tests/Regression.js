// tests/login.spec.js
import { test, expect } from '@playwright/test';

test('Direct login to website', async ({ page }) => {
  // 1 Go directly to login page
  await page.goto('https://web.tubeonai.com/login?email=true');  

  // 2️ Fill in credentials
  await page.fill('input[type="email"], input[name="email"]', 'User_Email');
  await page.fill('input[type="password"], input[name="password"]', '1234567890');

  // 3️ Click the login button
  await page.getByRole('button', { name: /sign in/i }).click();
  // 4️ Wait for successful navigation 
  await page.waitForLoadState('networkidle');
  // 5 Fillup the placeholder and enter
   await page.fill('input[placeholder="Search Youtube or Paste any public URL"]', 'https://www.youtube.com/watch?v=fLeJJPxua3E');
   await page.getByPlaceholder(/Search Youtube or Paste any public URL/i).press('Enter');
  
  await page.waitForSelector('text=Best Short Motivational Speech', { timeout: 40000 });

  // 6 Click Play Audio
  await page.waitForSelector('button:has-text("Play Audio")', { timeout: 40000 });
  await page.click('button:has-text("Play Audio")');
   
  // 7 Click profile image to open dropdown
  await page.waitForSelector('img[alt*="profile"], img[alt*="avatar"], img[src*="https"]', { timeout: 45000 });
  await page.click('img[alt*="profile"], img[alt*="avatar"], img[src*="https"]');

  // 8 Wait for dropdown menu to appear
  await page.waitForSelector('text=Log out', { timeout: 10000 });

  // 9 Click "Log out"
  await page.click('text=Log out');
});
