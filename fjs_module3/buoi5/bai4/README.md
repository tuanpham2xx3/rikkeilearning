# Bài 4 — Global error
| Cách | Ưu | Nhược |
|---|---|---|
| catch từng API | tùy biến từng màn | lặp code, dễ sót |
| response interceptor | tập trung, nhất quán | không phù hợp lỗi UI đặc thù |

Code chọn interceptor tập trung cho 401.
