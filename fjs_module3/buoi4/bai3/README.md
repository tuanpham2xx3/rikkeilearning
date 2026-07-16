# Bài 3 — Schema phụ thuộc
Hai cách: (1) tự kiểm tra `status` trong hàm `validate`; (2) dùng `Yup.when()`. Bài chọn `when()`: `company` bắt buộc khi `status = employed`, ngược lại schema bỏ qua trường ẩn.
