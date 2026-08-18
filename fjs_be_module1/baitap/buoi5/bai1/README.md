### Kết quả test 4 request
1. `GET /api/v1/products?page=1&limit=3&keyword=Sách&sort=price_asc`
```json
{
  "success": true,
  "data": [
    { "id": 10, "name": "Sách Tư duy lập trình hiện đại", "price": 135000 },
    { "id": 1, "name": "Sách Lập trình Node.js thực chiến", "price": 150000 },
    { "id": 8, "name": "Sách Cấu trúc dữ liệu và giải thuật", "price": 160000 }
  ],
  "meta": { "page": 1, "limit": 3, "total": 7, "totalPages": 3 }
}
```

2. `GET /api/v1/products?keyword=Bluetooth`
```json
{
  "success": true,
  "data": [{ "id": 4, "name": "Bàn phím cơ Bluetooth", "price": 1200000 }],
  "meta": { "page": 1, "limit": 10, "total": 1, "totalPages": 1 }
}
```

3. `GET /api/v1/products?sort=price_desc&limit=2`
```json
{
  "success": true,
  "data": [
    { "id": 9, "name": "Màn hình 27 inch 4K IPS", "price": 7900000 },
    { "id": 7, "name": "Tai nghe chụp tai chống ồn", "price": 3500000 }
  ],
  "meta": { "page": 1, "limit": 2, "total": 12, "totalPages": 6 }
}
```

4. `GET /api/v1/products` (mặc định lấy 10 sản phẩm mới nhất):
```json
{
  "success": true,
  "data": [ ... ],
  "meta": { "page": 1, "limit": 10, "total": 12, "totalPages": 2 }
}
```
