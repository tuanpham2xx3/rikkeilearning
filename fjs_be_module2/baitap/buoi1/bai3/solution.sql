-- Chạy trong psql. ON_ERROR_STOP phải tắt để psql tiếp tục sau lỗi INSERT.
\set ON_ERROR_STOP off

BEGIN;

-- Ví dụ chuyển sinh viên 2 từ Python sang Cơ sở dữ liệu.
DELETE FROM enrollments
WHERE student_id = 2
  AND course_id = (SELECT id FROM courses WHERE name = 'Lập trình Python');

SAVEPOINT before_new_enrollment;

-- Cố tình sai: score > 10 vi phạm CHECK constraint.
INSERT INTO enrollments (student_id, course_id, score)
VALUES (
  2,
  (SELECT id FROM courses WHERE name = 'Cơ sở dữ liệu'),
  11
);

-- Cứu transaction sau lỗi, rồi đưa đăng ký cũ trở lại.
ROLLBACK TO SAVEPOINT before_new_enrollment;
ROLLBACK;

\set ON_ERROR_STOP on
