# Bài 3 — isLoading và isFetching

| Giải pháp | Ưu điểm | Nhược điểm |
|---|---|---|
| Một spinner toàn màn hình | Code ngắn | Bảng bị nhấp nháy khi refetch |
| Skeleton + chỉ báo nhỏ | Không gián đoạn thao tác | Cần phân biệt 2 cờ |

Chọn giải pháp 2: `isLoading` hiển thị skeleton khi chưa có cache; `isFetching` chỉ hiển thị trạng thái nhỏ khi đang refetch nền.
