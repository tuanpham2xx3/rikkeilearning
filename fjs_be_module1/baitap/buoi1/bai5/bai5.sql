-- ==============================================================================
-- Bài 5 - [Xuất sắc] Thiết kế mối quan hệ Database hệ thống
-- ==============================================================================

-- 1. Tạo Database SalesDB phục vụ quản lý bán hàng
CREATE DATABASE IF NOT EXISTS SalesDB
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE SalesDB;

-- 2. Tạo bảng Customers (Khách hàng)
CREATE TABLE IF NOT EXISTS Customers (
    CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    FullName VARCHAR(150) NOT NULL,
    Email VARCHAR(100)
);

-- 3. Tạo bảng Orders (Đơn hàng) có liên kết Khóa Ngoại (Foreign Key) tới bảng Customers
CREATE TABLE IF NOT EXISTS Orders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    CustomerID INT NOT NULL,
    CONSTRAINT FK_Orders_Customers FOREIGN KEY (CustomerID) 
        REFERENCES Customers(CustomerID)
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
);

-- 4. Chèn dữ liệu mẫu:
--    - Thêm 2 khách hàng vào bảng Customers
INSERT INTO Customers (FullName, Email) VALUES 
('Nguyen Van An', 'an.nguyen@example.com'),
('Tran Thi Binh', 'binh.tran@example.com');

--    - Thêm 3 đơn hàng vào bảng Orders:
--      (Đơn hàng 1 & 2 thuộc về khách hàng có CustomerID = 1, Đơn hàng 3 thuộc về CustomerID = 2)
INSERT INTO Orders (OrderDate, CustomerID) VALUES 
('2024-03-01 10:30:00', 1),
('2024-03-02 14:15:00', 1),
('2024-03-03 09:00:00', 2);

-- 5. Truy vấn hiển thị danh sách đơn hàng gồm: Mã đơn hàng, Ngày đặt hàng và Tên khách hàng sở hữu đơn
SELECT 
    o.OrderID AS `Mã Đơn Hàng`,
    o.OrderDate AS `Ngày Đặt Hàng`,
    c.FullName AS `Tên Khách Hàng`,
    c.Email AS `Email Khách Hàng`
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
ORDER BY o.OrderID ASC;
