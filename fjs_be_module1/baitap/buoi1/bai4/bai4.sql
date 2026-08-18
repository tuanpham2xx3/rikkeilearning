-- ==============================================================================
-- Bài 4 - [Giỏi] Thay đổi cấu trúc và dọn dẹp Database
-- ==============================================================================

USE LibraryDB;

-- 1. Bổ sung thêm cột Price (kiểu DECIMAL(10, 2)) vào bảng Books
ALTER TABLE Books 
ADD COLUMN Price DECIMAL(10, 2) DEFAULT 0.00;

-- 2. Nâng cấp chiều dài dữ liệu của cột Author từ VARCHAR(100) lên VARCHAR(255)
ALTER TABLE Books 
MODIFY COLUMN Author VARCHAR(255);

-- Kiểm tra lại cấu trúc bảng Books sau khi cập nhật
DESCRIBE Books;

-- 3. Làm sạch toàn bộ dữ liệu trong bảng Books bằng lệnh TRUNCATE TABLE:
--    - Xóa toàn bộ các dòng dữ liệu.
--    - Đưa giá trị AUTO_INCREMENT của BookID về lại giá trị khởi đầu (1).
--    - Giữ nguyên khung cấu trúc bảng (khác với DROP TABLE là xóa luôn cả cấu trúc bảng).
TRUNCATE TABLE Books;

-- 4. Kiểm tra lại dữ liệu và cấu trúc sau khi TRUNCATE
SELECT * FROM Books;
DESCRIBE Books;
