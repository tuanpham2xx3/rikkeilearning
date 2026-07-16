# Bài 2 — PUT vs PATCH
`PUT` nhận toàn bộ resource và ghi đè representation; thiếu field có thể làm mất/reset field đó trên REST server chuẩn. `PATCH` chỉ nhận `{ phone }`, phù hợp cập nhật một phần. Cả hai là idempotent khi gửi cùng payload nhiều lần.
