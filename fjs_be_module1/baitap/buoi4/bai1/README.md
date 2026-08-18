### Kết quả test 3 URL

1. Đủ tham số (`GET /api/v1/users/2/orders?status=paid&limit=2`):
```json
{
  "success": true,
  "data": [
    { "id": 4, "userId": 2, "status": "paid", "total": 950000 },
    { "id": 5, "userId": 2, "status": "paid", "total": 310000 }
  ],
  "meta": { "total": 2, "filteredCount": 3, "limit": 2 }
}
```

2. Không tham số (`GET /api/v1/users/1/orders`):
```json
{
  "success": true,
  "data": [
    { "id": 1, "userId": 1, "status": "paid", "total": 250000 },
    { "id": 2, "userId": 1, "status": "pending", "total": 120000 },
    { "id": 3, "userId": 1, "status": "cancelled", "total": 450000 }
  ],
  "meta": { "total": 3, "filteredCount": 3, "limit": 5 }
}
```

3. userId không tồn tại (`GET /api/v1/users/99/orders`):
```json
{
  "success": false,
  "code": "USER_NOT_FOUND",
  "message": "Người dùng với ID 99 không tồn tại trong hệ thống"
}
```
