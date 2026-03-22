# Key takeaways lession 03
## Git
### Undo:
- Thay đổi commit message cho commit gần nhất: git commit --amend -m" message mới "
- Unstage một file: git restore --staged <tên file>
- Unstage tất cả file: git restore --staged .
- Reset commit cuối về vùng staging: git reset --soft HEAD~1
- Reset commit cuối về working directory: git reset HEAD~1
- Xử lý lỗi (resolve conflict, rebase, squash)

### Branching
- Tạo branch để nhiều người làm việc độc lập, ko đè lên nhau

#### Câu lệnh
- Xem danh sách nhánh: git branch
- Tạo nhánh: git branch feature/login // Tạo nhánh feature/login
- Chuyển sang nhánh: git checkout <branch_name>
- Vừa tạo vừa chuyển nhánh: git checkout - b feature/login
- Xóa nhánh: git branch -D <branch_name>    // Lưu ý: đứng ở nhánh khác trước khi xóa
- Push nhánh lên online repo: git push origin <branch_name>
- Xóa nhánh trên online repo: git push -D origin <branch_name>

### Git-ignore
- Bỏ các file nặng, thư viện
- Bỏ các file credentials
- Muốn ignore file nào thì điền file name đó vô file ".gitignore"


## JS
