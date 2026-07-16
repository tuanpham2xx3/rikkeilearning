# Bài 3 — Request interceptor
Interceptor đọc token; có token thì tiêm `Authorization: Bearer ...`, không có token thì trả config nguyên vẹn để server xử lý 401.
