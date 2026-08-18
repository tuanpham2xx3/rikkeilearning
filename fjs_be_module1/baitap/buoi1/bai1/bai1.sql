-- ==============================================================================
-- Bài 1 - [Khá] Khởi tạo Database và Cấu trúc bảng
-- ==============================================================================

-- 1. Tạo Database LibraryDB nếu chưa tồn tại
CREATE DATABASE IF NOT EXISTS LibraryDB
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- 2. Chọn và sử dụng Database LibraryDB
USE LibraryDB;

-- 3. Tạo bảng Books với đầy đủ các thuộc tính và ràng buộc theo yêu cầu:
--    - BookID: INT, PRIMARY KEY, AUTO_INCREMENT
--    - Title: VARCHAR(255), NOT NULL
--    - Author: VARCHAR(100)
--    - PublishedYear: INT
CREATE TABLE IF NOT EXISTS Books (
    BookID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Author VARCHAR(100),
    PublishedYear INT
);

-- 4. Kiểm tra cấu trúc bảng vừa tạo
DESCRIBE Books;
