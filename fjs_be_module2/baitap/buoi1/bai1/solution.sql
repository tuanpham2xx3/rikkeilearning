SELECT
  c.name AS course_name,
  COUNT(DISTINCT e.student_id) AS enrolled_students,
  ROUND(AVG(e.score), 2) AS average_score
FROM courses AS c
JOIN enrollments AS e ON e.course_id = c.id
JOIN students AS s ON s.id = e.student_id
GROUP BY c.id, c.name
ORDER BY average_score DESC, c.name;
