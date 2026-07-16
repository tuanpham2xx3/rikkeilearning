# Bài 6 — Checkout flow
`RTK Query getProducts → UI → cartSlice`; form dispatch `addressSlice`; thanh toán tạo payload `{items, address}` cho RTK Query mutation. Khi mutation `unwrap()` thành công, dispatch `clear()` cart; lúc pending khóa nút để chịu được mạng chậm.
