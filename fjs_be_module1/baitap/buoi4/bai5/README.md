### HATEOAS (Level 3)
- Level 2: Client chỉ nhận data và phải tự nhớ/hardcode URL các thao tác tiếp theo.
- Level 3 (HATEOAS): Server trả về kèm object `_links` chỉ dẫn các hành động hợp lệ dựa trên trạng thái của đơn hàng (`self`, `cancel`, `payment`, `customer`). Khi đơn hàng chuyển sang `cancelled`, server tự động ẩn link `cancel`.

### Response mẫu (pending vs cancelled)
- Khi `status = "pending"`:
```json
{
  "id": 17,
  "status": "pending",
  "_links": {
    "self": { "href": "/api/v2/orders/17", "method": "GET" },
    "cancel": { "href": "/api/v2/orders/17/cancellation", "method": "POST" },
    "customer": { "href": "/api/v2/users/3", "method": "GET" }
  }
}
```
- Khi `status = "cancelled"` (bỏ action cancel):
```json
{
  "id": 18,
  "status": "cancelled",
  "_links": {
    "self": { "href": "/api/v2/orders/18", "method": "GET" },
    "customer": { "href": "/api/v2/users/3", "method": "GET" }
  }
}
```
