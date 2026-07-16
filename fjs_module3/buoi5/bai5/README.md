# Bài 5 — Cancellation
`Input mới` → `controller.abort()` request cũ → tạo controller mới → Axios GET mới. Catch kiểm tra `axios.isCancel`/`ERR_CANCELED` để không log lỗi mạng giả.
