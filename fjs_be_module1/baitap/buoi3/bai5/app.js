import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import AppError from './utils/AppError.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount routes
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Bắt các route không tồn tại (404)
app.all('*', (req, res, next) => {
  next(new AppError(`Không tìm thấy endpoint ${req.originalUrl}`, 404));
});

// Middleware xử lý lỗi toàn cục tập trung
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      message: 'File vượt quá dung lượng cho phép (2MB)'
    });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Lỗi máy chủ nội bộ'
  });
});

export default app;
