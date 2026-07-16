# Bài 5 — Slices Pattern

`useAppStore` là Bound Store gồm `authSlice` (token) và `uiSlice` (toast). File interceptor ngoài React đọc token bằng `useAppStore.getState().token`; khi logout, token là `null` nên không thêm `Authorization` header.
