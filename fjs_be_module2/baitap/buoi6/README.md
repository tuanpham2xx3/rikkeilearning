# Buổi 6 - JWT và Security

```bash
npm install
npm run start:dev
```

Đây là demo in-memory để có thể chạy ngay không cần database. `AuthService` dùng Argon2, JWT access token có `departmentId`/`avatarUrl`, refresh-token rotation, blacklist logout và `SalaryOwnershipGuard` cho ABAC.

Các endpoint chính: `POST /auth/register`, `POST /auth/login`, `POST /auth/refresh`, `POST /auth/logout`, `GET /auth/profile`, `GET /salary/:ownerId`.
