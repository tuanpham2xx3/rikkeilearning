# Bài 2 — Vòng đời Cache

`Fetching` khi gọi API lần đầu → `Fresh` trong 5 phút (`staleTime: 5 * 60 * 1000`) → `Stale` sau 5 phút → `Inactive` khi tab Doanh thu không còn dùng query.

Nút **Làm mới dữ liệu** gọi `refetch()`, nên ép gọi API ngay và không chờ `staleTime`.
