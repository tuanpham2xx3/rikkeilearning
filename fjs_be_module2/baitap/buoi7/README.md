# Buổi 7 - Documentation và Testing

```bash
npm install
npm test
npm run test:e2e
npm run start:dev
```

Swagger: `http://localhost:3007/docs`.

`test/real-db.e2e-spec.ts` là mẫu Testcontainers và được skip mặc định để CI không cần Docker ở mọi môi trường. Có thể chạy riêng khi Docker đã sẵn sàng. `stryker.conf.json` cấu hình mutation testing cho `UsersService`.
