import express from 'express';
import multer from 'multer';
import { uploadAvatar } from './middlewares/upload.js';

const app = express();

app.use(express.json());

// Endpoint upload avatar
app.post('/upload/avatar', (req, res, next) => {
  uploadAvatar(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          message: 'File vượt quá dung lượng cho phép (2MB)'
        });
      }
      if (err.code === 'INVALID_FILE_TYPE') {
        return res.status(400).json({
          message: err.message
        });
      }
      return res.status(400).json({
        message: err.message || 'Lỗi khi upload file'
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: 'Vui lòng chọn file qua trường "avatar"'
      });
    }

    return res.status(200).json({
      message: 'Upload thành công',
      filename: req.file.filename,
      size: req.file.size
    });
  });
});

export default app;
