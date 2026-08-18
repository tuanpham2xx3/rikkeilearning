### Lựa chọn Module System: CommonJS
- Bài tập này em chọn dùng CommonJS vì project backend nhỏ gọn, require thư viện và import cấu hình .env có sẵn `__dirname` tiện hơn, không cần phải cấu hình thêm "type": "module" hay xử lý url.

### Kết quả log chạy thử nghiệm
```
=== BẮT ĐẦU HỆ THỐNG XỬ LÝ ĐƠN HÀNG (DELAY: 2000ms) ===
[2026-08-18T05:05:28.911Z] Đơn hàng #101 - created (Tổng tiền: 250,000 VNĐ)
[2026-08-18T05:05:29.441Z] Đơn hàng #102 - created (Tổng tiền: 540,000 VNĐ)
[2026-08-18T05:05:30.938Z] Đơn hàng #101 - processed (Xử lý thành công)
[2026-08-18T05:05:31.456Z] Đơn hàng #102 - processed (Xử lý thành công)
```
Thời gian giữa lúc created và processed của mỗi đơn lệch nhau đúng 2000ms theo file .env.
