# Báo cáo so sánh CommonJS và ES Module trên thực tế

## 1. Khác biệt cấu hình package.json
- Bản CommonJS: Không cần trường "type" hoặc để `"type": "commonjs"`.
- Bản ES Module: Bắt buộc phải có `"type": "module"` trong package.json:
```json
{
  "name": "project-esm",
  "type": "module",
  "dependencies": {
    "dotenv": "^16.4.7"
  }
}
```

## 2. Các lỗi thực tế gặp phải khi viết bản ESM
- **Lỗi 1: Thiếu đuôi file khi import**
  - Khi viết `import config from './config';` bị lỗi `ERR_MODULE_NOT_FOUND`.
  - Khắc phục: Với ESM khi import file cục bộ phải ghi rõ đuôi `.js` (`import config from './config.js';`).
- **Lỗi 2: Không có biến `__dirname` và `__filename`**
  - Khi config dotenv trong file config.js dùng `__dirname` bị lỗi `ReferenceError: __dirname is not defined`.
  - Khắc phục: Phải tạo lại từ `import.meta.url`:
```javascript
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
```

## 3. Trải nghiệm debug
- CommonJS: Nạp file đồng bộ nên có thể gọi `require()` linh hoạt bên trong hàm hoặc khối if để test nhanh.
- ES Module: Bắt lỗi import/syntax ngay từ bước parse tĩnh trước khi code chạy. Stack trace hiển thị đường dẫn dạng URL (`file:///...`).

## 4. Khuyến nghị cho dự án
- Nhóm nên ưu tiên dùng **ES Module** vì:
  1. Hầu hết thư viện npm mới đang chuyển dần sang Pure ESM.
  2. Cú pháp `import/export` đồng nhất với Frontend (React, Vue, Nextjs).
  3. Dễ tích hợp với TypeScript mà không cần cấu hình build phức tạp.
