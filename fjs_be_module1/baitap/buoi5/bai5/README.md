### So sánh N+1 Query vs Eager Loading
| Endpoint | Kỹ thuật | Số query | Thời gian trung bình |
|---|---|---|---|
| `/api/v1/report/slow` | Vòng lặp N+1 | 51 queries | ~180ms |
| `/api/v1/report/fast` | Eager Loading (`include`) | 1 query | ~25ms |

### Ghi chú về bộ nhớ & `separate: true`
- Dùng `include` thông thường sẽ sinh câu lệnh `LEFT JOIN`. Nếu bảng con có quá nhiều dòng (ví dụ 1 category có hàng nghìn product), dữ liệu bảng cha bị lặp lại trong kết quả trả về, làm tốn RAM để parse.
- Khi quan hệ 1-N có lượng bản ghi con rất lớn hoặc cần phân trang (`limit`/`offset`) trên bảng con, nên dùng `separate: true` để Sequelize tách thành 2 câu `SELECT` độc lập, tránh bị phình dữ liệu bộ nhớ.
