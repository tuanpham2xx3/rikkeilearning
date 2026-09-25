ALTER TABLE students
  ADD COLUMN IF NOT EXISTS extra_info JSONB NOT NULL DEFAULT '{}'::jsonb;

UPDATE students
SET extra_info = '{"skills":["Giao tiếp","Làm việc nhóm"],"toeic":750}'::jsonb
WHERE id = 1;

UPDATE students
SET extra_info = '{"skills":["SQL","Phân tích dữ liệu"],"toeic":820}'::jsonb
WHERE id = 3;

SELECT id, full_name,
       extra_info->'skills' AS skills,
       (extra_info->>'toeic')::INTEGER AS toeic
FROM students
WHERE COALESCE((extra_info->>'toeic')::INTEGER, 0) >= 700;
