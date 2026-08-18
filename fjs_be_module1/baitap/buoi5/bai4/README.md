### Kết quả test Transaction

1. Đặt hàng thành công (đủ tồn kho):
- Request: `POST /api/v1/orders` với item 1 (qty 2) và item 2 (qty 1)
- Response: `201 Created` và trừ stock tương ứng (item 1 còn 3, item 2 còn 9).

2. Đặt hàng thiếu tồn kho (Rollback):
- Request: `POST /api/v1/orders` với item 5 (qty 5, trong khi tồn kho chỉ có 1)
- Response: `409 Conflict` ("Sản phẩm không đủ tồn kho...").
- Bảng `Order` và `OrderItem` không bị ghi thêm dòng nào.
