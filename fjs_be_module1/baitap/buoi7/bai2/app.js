import express from 'express';
import { loginRateLimiter } from './middlewares/rateLimiter.js';

const app = express();
app.use(express.json());

// Gắn middleware rate limit riêng cho route login
app.post('/api/auth/login', loginRateLimiter, (req, res) => {
  const { email, password } = req.body;

  // Giả lập logic kiểm tra thông tin
  if (email === 'admin@example.com' && password === '123456') {
    return res.status(200).json({
      success: true,
      message: 'Đăng nhập thành công!',
      user: { email, role: 'admin' }
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Email hoặc mật khẩu không chính xác'
  });
});

export default app;
