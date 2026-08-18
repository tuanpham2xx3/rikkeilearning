import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret_key_123456';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh_secret_key_654321';

// Dữ liệu người dùng mẫu
const sampleUsers = [
  { id: 1, email: 'admin@company.com', password: 'Password@123', role: 'admin', name: 'Quản trị viên' },
  { id: 2, email: 'user@company.com', password: 'Password@123', role: 'user', name: 'Nguyễn Văn User' }
];

// POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Vui lòng cung cấp đầy đủ email và mật khẩu'
    });
  }

  // Đối chiếu tài khoản
  const user = sampleUsers.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Email hoặc mật khẩu không chính xác'
    });
  }

  // 1. Tạo Access Token (Tuổi thọ ngắn: 15 phút) - Payload KHÔNG chứa mật khẩu
  const accessPayload = {
    userId: user.id,
    email: user.email,
    role: user.role
  };
  const accessToken = jwt.sign(accessPayload, JWT_ACCESS_SECRET, {
    expiresIn: '15m'
  });

  // 2. Tạo Refresh Token (Tuổi thọ dài: 7 ngày)
  const refreshPayload = {
    userId: user.id
  };
  const refreshToken = jwt.sign(refreshPayload, JWT_REFRESH_SECRET, {
    expiresIn: '7d'
  });

  return res.status(200).json({
    success: true,
    message: 'Đăng nhập thành công!',
    tokens: {
      accessToken,
      refreshToken,
      tokenType: 'Bearer',
      expiresIn: '15m'
    },
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
});

export default app;
