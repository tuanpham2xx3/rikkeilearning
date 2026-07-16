# Bài 2 — Debounce
| Cách | Ưu | Nhược |
|---|---|---|
| Debounce | giảm request, UI dễ hiểu | có độ trễ nhỏ |
| Hủy request RTK/Thunk | tránh race condition | phức tạp hơn |
Chọn debounce 400ms; chỉ truyền giá trị debounced vào query hook.
