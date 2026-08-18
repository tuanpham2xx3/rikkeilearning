import express from 'express';
import jwt from 'jsonwebtoken';
import { authenticateToken } from './middlewares/authenticate.js';

const app = express();
app.use(express.json());

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret_key_123456';

// 1. Route công khai: Tạo nhanh token để test
app.post('/api/auth/token', (req, res) => {
  const { userId = 1, email = 'user@example.com', role = 'user' } = req.body;
  const token = jwt.sign({ userId, email, role }, JWT_ACCESS_SECRET, { expiresIn: '15m' });
  res.status(200).json({ success: true, token });
});

// 2. Route công khai: Không cần token
app.get('/api/public', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Tài nguyên công khai, ai cũng có thể truy cập.'
  });
});

// 3. Route bảo mật: Yêu cầu middleware authenticateToken
app.get('/api/profile', authenticateToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Truy cập tài nguyên bảo mật thành công!',
    user: req.user
  });
});

export default app;
