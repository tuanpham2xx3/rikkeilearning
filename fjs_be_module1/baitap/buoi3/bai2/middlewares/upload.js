import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Đảm bảo thư mục uploads tồn tại
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Chuẩn hóa tên file: timestamp + tên gốc loại bỏ khoảng trắng
    const cleanName = file.originalname.replace(/\s+/g, '_');
    cb(null, `${Date.now()}-${cleanName}`);
  }
});

const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];

const fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    const err = new Error('Chỉ chấp nhận file ảnh JPEG/PNG/WEBP');
    err.code = 'INVALID_FILE_TYPE';
    cb(err, false);
  }
};

export const uploadAvatar = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB
  },
  fileFilter
}).single('avatar');
