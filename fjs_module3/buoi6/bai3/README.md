# Bài 3 — Shallow vs mount
| Cách | Ưu | Nhược |
|---|---|---|
| `shallow()` | nhanh, cô lập component cha | không kiểm tra con/DOM sâu |
| `mount()` | phủ tích hợp/DOM đầy đủ | chậm hơn rõ rệt với 10 biểu đồ |
Với test chỉ cần tiêu đề, chọn `shallow`.
