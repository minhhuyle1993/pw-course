import { test } from '@playwright/test';

test('Test 1: Nhập thông tin cho các field', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click vào Bài học 1", async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });

    await test.step("Step 3: Nhập thông tin cho các field", async () => {
        await page.locator("//input[@id='username']").fill("Huy Le");
        await page.locator("//input[@id='email']").fill("huyle@gmail.com");
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();
        //await page.locator("//select[@id='country']").selectOption("usa");  //Or selectOption({ Label: "United States" })
        await page.locator("//select[@id='country']").selectOption({ label: "Canada" }); 
        await page.locator("//input[@id='dob']").fill("1993-01-12");
        await page.locator("//input[@id='profile']").setInputFiles("C:/Users/minhh/Documents/K22-Playwright-Class/profile.jpg");
        await page.locator("//textarea[@id='bio']").fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");
    });

    await test.step("Step 4: Bấm nút register", async () => {
        await page.locator("//button[@type = 'submit']").click();
    });

});
