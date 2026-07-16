# Bài 5 — Dynamic fields
`useFieldArray` quản lý mảng `items`; mỗi phần tử có id ổn định nên thêm/xóa liên tục không crash. `register('items.i.name')` tạo output `items: [{name, price}]`; rule `minLength` chặn submit khi mảng rỗng.
