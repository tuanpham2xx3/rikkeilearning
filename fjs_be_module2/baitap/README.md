# Bài tập FJS Backend Module 2

Thư mục này chứa lời giải cho `baitap_all.txt`, được chia theo 7 buổi:

- `buoi1`: PostgreSQL và SQL nâng cao.
- `buoi2`: Custom provider, module, dynamic module, async provider và monorepo.
- `buoi3`: Middleware, exception, interceptor, guard, rate limit và xử lý lỗi DB.
- `buoi4`: DTO validation, query parameter, HATEOAS và upload file.
- `buoi5`: GraphQL nâng cao.
- `buoi6`: JWT, password, refresh token, serialization, blacklist và ABAC.
- `buoi7`: Swagger, unit/e2e test, GitHub Actions, Testcontainers và mutation testing.

Mỗi nhóm NestJS có `package.json`, `tsconfig.json`, source trong `src/` và README riêng. Cài dependency trong từng nhóm bằng `npm install`, sau đó dùng các script được ghi trong README của nhóm.

## Cấu trúc tách từng bài

Ngoài project tổng hợp theo buổi, mỗi bài đã có thư mục riêng theo dạng `buoiX/baiY`. Source riêng của các project Nest nằm trong `buoiX/baiY/src/solution/`; bài SQL dùng `solution.sql`, còn bài monorepo nằm tại `buoi2/bai6/` với cây `apps/` và `libs/`.

> Các file `.env` thật, database thật và `node_modules` không được tạo trong lời giải.
