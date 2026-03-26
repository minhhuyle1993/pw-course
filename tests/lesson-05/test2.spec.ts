import { test } from '@playwright/test';

test('Test 2: Thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click vào Bài học 2: Product Page", async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    });

    await test.step("Step 3: Thêm sản phẩm vào giỏ hàng", async () => {
        await page.locator('//button[@data-product-id="1"]').dblclick();
        //await page.locator('//button[@data-product-id="2"]').dblclick();
        await page.locator('//button[@data-product-id="2"]').click( {clickCount: 3} );
        await page.locator('//button[@data-product-id="3"]').click();
    });
})    