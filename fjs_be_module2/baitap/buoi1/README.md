# Buổi 1 - PostgreSQL Fundamentals & Core SQL

Chạy `00_schema_seed.sql` trước trong PostgreSQL. Các file `01` đến `06` tương ứng với 6 bài trong đề.

Ví dụ với `psql`:

```bash
psql "$DATABASE_URL" -f 00_schema_seed.sql
psql "$DATABASE_URL" -f 01_join_aggregation.sql
```

`03_transactions.sql` có phần minh họa lỗi constraint được phục hồi bằng `ROLLBACK TO SAVEPOINT`. `06_indexing.sql` dùng `EXPLAIN (ANALYZE, BUFFERS)` để so sánh trước và sau index.
