# Bài 4 — Diagnostic Matrix
| Form | 10 lần gõ trong 1 Field | Nhận xét |
|---|---:|---|
| Formik | Component Formik quản lý state và render lại theo input | Dễ theo dõi state, tốn render hơn |
| RHF | Component RHFForm không render lại theo từng phím | DOM giữ state, phù hợp form rất lớn |

`console.log` được đặt trong thân mỗi component để quan sát thực tế (StrictMode phát sinh thêm log ở development).
