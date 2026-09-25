WITH school_average AS (
  SELECT AVG(gpa) AS average_gpa
  FROM students
)
SELECT s.id, s.full_name, s.email, s.gpa,
       ROUND(a.average_gpa, 2) AS school_average_gpa
FROM students AS s
CROSS JOIN school_average AS a
WHERE s.gpa > a.average_gpa
ORDER BY s.gpa DESC;
