# Bài 1 — Đồng bộ Client State & Server State

## Luồng dữ liệu (I/O)

`UI (input / nút trạng thái)` → `Zustand filterStore` → `useQuery.queryKey` → `getOrders(filters)` → `UI bảng đơn hàng`.

- `setKeyword()` gọi `trim()` ngay tại Zustand, vì vậy query key và API không bao giờ nhận khoảng trắng đầu/cuối.
- `status` và `keyword` nằm trong `queryKey: ['orders', { status, keyword }]`.
- Khi bộ lọc đổi, key đổi; TanStack Query tự gọi lại `queryFn`. Không cần `useEffect`.

## Chạy bài

```bash
npm install
npm run dev
```
