SELECT
  s.full_name AS student,
  d.name AS department,
  s.gpa,
  RANK() OVER (PARTITION BY s.dept_id ORDER BY s.gpa DESC) AS department_rank
FROM students AS s
JOIN departments AS d ON d.id = s.dept_id
ORDER BY d.name, department_rank, s.full_name;
