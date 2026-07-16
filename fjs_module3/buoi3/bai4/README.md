# Bài 4 — Optimistic Update

| Cách làm | Tốc độ phản hồi | Rủi ro |
|---|---|---|
| Pessimistic | Chờ API | Chậm với server xa |
| Optimistic | Đổi UI ngay khi click | Có dữ liệu ảo nếu API lỗi |

Chọn Optimistic Update. `onMutate` backup/chèn cache mới; `onError` rollback; `onSettled` invalidate để đồng bộ lại server.
