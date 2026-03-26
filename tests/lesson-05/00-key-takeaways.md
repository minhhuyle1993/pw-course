# Key takeaways lession 05
# DOM Terminology - Playwright Basic
## DOM - Document Object Model
### Lý thuyết:
- 1 website sẽ có nhiều thành phần: text, hình ảnh, liên kết, các ô input
- DOM có nhiều element
- Các cặp thẻ <> </>: option, h1, h2, body, 
- Các thẻ tự đóng < img >
- Reset commit cuối về working directory: git reset HEAD~1
- Xử lý lỗi (resolve conflict, rebase, squash)

## Selector
Dùng để tìm các phần tử, để có thể tương tác khi làm automation
### Các loại thông dụng:
- XPath: dùng dc 99% trường hợp, đa dạng, tìm dc phần tử khó nhưng hơi dài. Vd: //button[normalize-space() = ‘Add to cart’]
- CSS Selector: ngắn gọn, performance cao, dùng trong trường hợp dễ tìm, ko linh hoạt. Vd: .add-to-cart
- Playwright Selector: chỉ dùng cho playwright, ngắn gọn, ko phụ thuộc DOM. Hướng tới "người dùng thấy gì" . Vd: page.getByText("Add to cart")
- Khi nào dùng gì? Playwright > CSS > Xpath. Ngoài ra tùy vào dự án. 

## Xpath
### Xpath tuyệt đối
- Đi dọc theo cây DOM. Ko linh hoạt. Vd: /html/body/div/input
- Bắt đầu bằng /

### Xpath tương đối: 
- Bắt đầu bằng //
- Bắt đầu bất kì chỗ nào
- Vd: //input[@id=’user’]


## Playwright basic syntax
### test - đơn vị cơ bản để khai báo 1 test
```
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});
```

### step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
- Step nên map 1-1 với test case để dễ maintain
```
await test.step('Tên step', async () => {
// Code here
});
```

### Navigate: 
```
await

page.goto('https://pw-practice.playwrightvn.c
om/');
```

### Locate: 
- Sử dụng page.locator(“< selector >”) để chọn phần tử
trên trang

```
page.locator(“//input[@id=’email’]”)
```

### Click: 
```
Single click
await page.locator("//button").click();
Double click
await page.locator("//button").dblclick();

Click chuột phải
page.locator("//button").click({
button: 'right'
})
Click chuột kèm bấm phím khác
page.locator("").click({
modifiers: ['Shift'],
})
```
### Input: 
- Fill - Giống việc bạn paste content vào một ô input
```
page.locator("//input").fill('Playwright Viet Nam');
```

- pressSequentially - Giống việc bạn gõ từng chữ cái vào ô input
```
page.locator("//input").pressSequentially('Playwright Viet Nam', {
delay: 100,
});
```

### Radio/checkbox:
- Lấy giá trị hiện tại (check hay ko check)
```
const isChecked =
page.locator("//input").isChecked();
```

- Check/ uncheck
```
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

### Select: 
```
await page.locator('//select[@id=”country”]')
.selectOption({ label: 'USA' })
```

### Upload file:
```
await page.locator("//input[@id='profile']")
.setInputFiles("<file-path>");
```

