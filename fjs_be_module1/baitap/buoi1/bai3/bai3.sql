-- ==============================================================================
-- Bài 3 - [Giỏi] Truy vấn dữ liệu với bộ lọc nâng cao
-- ==============================================================================

USE LibraryDB;

-- Bổ sung thêm dữ liệu mẫu phong phú để kiểm tra câu lệnh truy vấn
INSERT INTO Books (Title, Author, PublishedYear) VALUES
('Lập trình Node.js Toàn Tập', 'Nguyen Van A', 2022),
('Lập trình Python Cơ Bản', 'Le Thi C', 2018),
('Thiết kế Hệ thống Phân tán', 'Nguyen Van A', 2019),
('Lập trình ReactJS & TypeScript', 'Pham Van D', 2023),
('Cấu trúc dữ liệu và giải thuật', 'Hoang Van E', 2023),
('Nhập môn Cơ sở dữ liệu', 'Vu Thi F', 2015);

-- ------------------------------------------------------------------------------
-- Yêu cầu 1: Tìm và hiển thị tất cả các cuốn sách được xuất bản sau năm 2020
-- ------------------------------------------------------------------------------
SELECT * 
FROM Books 
WHERE PublishedYear > 2020;

-- ------------------------------------------------------------------------------
-- Yêu cầu 2: Tìm các cuốn sách có tên tác giả là 'Nguyen Van A' 
--            HOẶC có tiêu đề bắt đầu bằng cụm từ 'Lập trình'
-- ------------------------------------------------------------------------------
SELECT * 
FROM Books 
WHERE Author = 'Nguyen Van A' 
   OR Title LIKE 'Lập trình%';

-- ------------------------------------------------------------------------------
-- Yêu cầu 3: Liệt kê danh sách sách, sắp xếp:
--            - Giảm dần theo năm xuất bản (PublishedYear DESC)
--            - Nếu trùng năm thì tăng dần theo tiêu đề (Title ASC)
--            - Giới hạn chỉ lấy 2 bản ghi đầu tiên (LIMIT 2)
-- ------------------------------------------------------------------------------
SELECT * 
FROM Books 
ORDER BY PublishedYear DESC, Title ASC 
LIMIT 2;
