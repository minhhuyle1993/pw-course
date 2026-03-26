import { test } from '@playwright/test';




test('Test 2: Thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click vào Bài học 2: Product Page", async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    });

    await test.step("Step 3: Thêm 100 Todo", async () => {
        var i: number;
        for (i = 1; i < 10; i++) {
            await page.locator('//input[@id="new-task"]').fill("Todo " + i);
            await page.locator('//button[@id="add-task"]').click();
        }
    });


    await test.step("Step 4: Xóa các todo lẻ", async () => {

        var i: number;
        var toBeDeleted: string;
        for (i = 1; i < 2; i++) {
            toBeDeleted = "todo-"+i.toString()+"-delete";
            //console.log(toBeDeleted);
            await page.locator('//button[@id=toBeDeleted]').click();
        }
    });
})    