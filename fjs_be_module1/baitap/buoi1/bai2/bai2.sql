-- ==============================================================================
-- Bài 2 - [Khá] Thao tác dữ liệu cơ bản với DML
-- ==============================================================================

USE LibraryDB;

-- Bước 1: Thêm cùng lúc 3 dòng dữ liệu mẫu vào bảng Books
INSERT INTO Books (Title, Author, PublishedYear) VALUES 
('Lập trình JavaScript Nâng Cao', 'Nguyen Van A', 2021),
('Clean Code & Design Patterns', 'Robert C. Martin', 2008),
('Học SQL từ Cơ bản đến Nâng cao', 'Tran Thi B', 2019);

-- Bước 2: Kiểm tra dữ liệu sau khi INSERT
SELECT * FROM Books;

-- Bước 3: Cập nhật lại năm xuất bản của cuốn sách có BookID = 1 thành 2023
UPDATE Books 
SET PublishedYear = 2023 
WHERE BookID = 1;

-- Bước 4: Kiểm tra dữ liệu sau khi UPDATE
SELECT * FROM Books WHERE BookID = 1;

-- Bước 5: Xóa một cuốn sách cụ thể có BookID = 3 khỏi bảng Books
DELETE FROM Books 
WHERE BookID = 3;

-- Bước 6: Kiểm tra toàn bộ dữ liệu trong bảng sau các thao tác
SELECT * FROM Books;
