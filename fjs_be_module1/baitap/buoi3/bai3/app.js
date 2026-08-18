import express from 'express';
import AppError from './utils/AppError.js';

const app = express();
app.use(express.json());

// Dữ liệu mẫu user
const users = [
  { id: 1, name: 'Nguyen Van A', email: 'vana@example.com' },
  { id: 2, name: 'Tran Thi B', email: 'thib@example.com' }
];

// 1. GET /users - Lấy tất cả user (Tình huống thành công 200)
app.get('/users', (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
});

// 2. GET /users/secret - Route giả lập yêu cầu xác thực qua Header Authorization
app.get('/users/secret', (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return next(new AppError('Chưa xác thực', 401));
  }

  res.status(200).json({
    success: true,
    message: 'Chào mừng bạn đã truy cập tài nguyên bảo mật!',
    secretData: 'SECRET_JWT_KEY_123456'
  });
});

// 3. GET /users/:id - Tìm user theo ID (Bắt lỗi 404 nếu không tìm thấy)
app.get('/users/:id', (req, res, next) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) {
    return next(new AppError('Không tìm thấy user', 404));
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

// 4. POST /users - Tạo user mới (Bắt lỗi 400 nếu thiếu email)
app.post('/users', (req, res, next) => {
  const { name, email } = req.body;
  if (!email) {
    return next(new AppError('Thiếu trường email', 400));
  }

  const newUser = {
    id: users.length + 1,
    name: name || 'Người dùng mới',
    email
  };
  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser
  });
});

// Bắt các route không tồn tại (404)
app.all('*', (req, res, next) => {
  next(new AppError(`Không tìm thấy đường dẫn ${req.originalUrl} trên máy chủ`, 404));
});

// Global Error Handling Middleware (4 tham số: err, req, res, next)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Lỗi máy chủ nội bộ'
  });
});

export default app;
