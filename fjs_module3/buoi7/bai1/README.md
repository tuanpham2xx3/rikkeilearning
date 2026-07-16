# Bài 1 — Slice + RTK Query
UI dispatch `setSearch(value.trim())`; `useProductsQuery(q, { skip: !q })` chỉ gọi server khi keyword không rỗng.
