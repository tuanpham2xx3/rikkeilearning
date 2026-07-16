# Bài 4 — Matchers
`toContainEqual({name:'Admin', active:true})` sẽ fail nếu object có `lastLoginDate` khác. Dùng `expect.objectContaining` trong `arrayContaining` để kiểm tra đúng thuộc tính nghiệp vụ; giải pháp vòng lặp `some` cũng phù hợp.
