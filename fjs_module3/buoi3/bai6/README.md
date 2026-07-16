# Bài 6 — Luồng quản lý tồn kho

```text
TanStack Query getInventory → bảng kho
Click “Sửa” → Zustand selectedItem → mở Sidebar
Nhập số lượng → mutation updateQuantity → Server
onSuccess → Zustand đóng Sidebar + TanStack invalidate ['inventory'] → bảng mới
```

Sidebar chặn số âm trước khi mutation; API mô phỏng lỗi khi số lượng vượt hạn mức của mặt hàng.
