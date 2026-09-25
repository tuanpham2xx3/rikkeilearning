-- Chạy câu lệnh đầu tiên trước khi tạo index.
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, full_name, email
FROM students
WHERE email = 'an@example.com';

CREATE UNIQUE INDEX IF NOT EXISTS students_email_unique_idx
  ON students (email);

-- Chạy lại để quan sát kế hoạch truy vấn sau index.
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, full_name, email
FROM students
WHERE email = 'an@example.com';

-- Với bảng nhỏ PostgreSQL có thể vẫn chọn Seq Scan vì chi phí thấp.
-- Khi bảng đủ lớn, index thường chuyển kế hoạch sang Index Scan và giảm Execution Time.
