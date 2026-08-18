### Kết quả test Header Versioning

1. `Api-Version: v1`
- Response Headers:
```
Deprecation: true
Sunset: Wed, 31 Dec 2025 23:59:59 GMT
```
- Response Body:
```json
{
  "success": true,
  "version": "v1",
  "data": [
    { "id": 1, "title": "Clean Code", "author": "Robert C. Martin" }
  ]
}
```

2. `Api-Version: v2`
```json
{
  "success": true,
  "version": "v2",
  "data": [
    { "id": 1, "title": "Clean Code", "author": { "id": 101, "name": "Robert C. Martin" }, "publishedYear": 2008 }
  ]
}
```

3. `Api-Version: v9` (Lỗi 400)
```json
{
  "success": false,
  "code": "UNSUPPORTED_API_VERSION",
  "message": "Phiên bản API \"v9\" không được hỗ trợ. Chỉ hỗ trợ v1 hoặc v2."
}
```
