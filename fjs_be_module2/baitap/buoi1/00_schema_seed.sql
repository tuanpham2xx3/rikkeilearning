DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  gpa NUMERIC(4,2) NOT NULL CHECK (gpa BETWEEN 0 AND 10),
  dept_id INTEGER NOT NULL REFERENCES departments(id),
  extra_info JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  score NUMERIC(4,2) NOT NULL CHECK (score BETWEEN 0 AND 10),
  UNIQUE (student_id, course_id)
);

INSERT INTO departments (name) VALUES
  ('Công nghệ thông tin'), ('Kinh tế'), ('Ngoại ngữ');

INSERT INTO students (full_name, email, gpa, dept_id) VALUES
  ('Nguyễn An', 'an@example.com', 8.70, 1),
  ('Trần Bình', 'binh@example.com', 7.20, 1),
  ('Lê Chi', 'chi@example.com', 9.10, 2),
  ('Phạm Dũng', 'dung@example.com', 6.80, 3),
  ('Vũ Hà', 'ha@example.com', 8.20, 1);

INSERT INTO courses (name) VALUES
  ('Lập trình Python'), ('Cơ sở dữ liệu'), ('Web Backend');

INSERT INTO enrollments (student_id, course_id, score) VALUES
  (1, 1, 9.00), (2, 1, 7.00), (3, 1, 9.50),
  (1, 2, 8.50), (2, 2, 7.50), (4, 2, 6.00),
  (1, 3, 8.80), (5, 3, 8.00);
