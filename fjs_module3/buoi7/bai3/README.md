# Bài 3 — Optimistic Like
`onQueryStarted` cập nhật cache ngay để nút Like xanh tức thì; nếu mutation lỗi thì `patch.undo()` rollback. Pessimistic dễ hơn nhưng người dùng chờ server lâu; chọn Optimistic.
