### Dự đoán
```
A: Bắt đầu
B: Kết thúc đồng bộ
nextTick
Promise
setTimeout
setImmediate
```

### Kết quả thực tế
```
A: Bắt đầu
B: Kết thúc đồng bộ
nextTick
Promise
setImmediate
setTimeout
```

### Giải thích
- Đồng bộ chạy trước: JS engine đọc từ trên xuống, log A rồi log B trong Callstack.
- Khi callstack rỗng, event loop ưu tiên giải quyết hàng đợi microtask. Trong đó callback của `process.nextTick` luôn được ưu tiên xử lý trước Promise `.then()`.
- Cuối cùng mới tới macrotask (`setTimeout` và `setImmediate`). Vì chạy trực tiếp ở main module nên thứ tự giữa 2 hàm này có thể dao động tùy vào thời điểm khởi động timer của hệ điều hành.
