import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret_key_123456';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh_secret_key_654321';

// Danh sách Refresh Token hợp lệ (Trong thực tế lưu vào MongoDB / Redis)
let activeRefreshTokens = [];

// Dữ liệu người dùng mẫu
const sampleUsers = [
  { id: 1, email: 'admin@company.com', password: 'Password@123', role: 'admin', name: 'Quản trị viên' },
  { id: 2, email: 'user@company.com', password: 'Password@123', role: 'user', name: 'Nguyễn Văn User' }
];

// 1. Endpoint Đăng nhập: Cấp cặp token và lưu Refresh Token vào Database/Whitelist
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  const user = sampleUsers.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Email hoặc mật khẩu không chính xác'
    });
  }

  const accessToken = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    JWT_ACCESS_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  // Lưu refreshToken vào danh sách active
  activeRefreshTokens.push(refreshToken);

  return res.status(200).json({
    success: true,
    message: 'Đăng nhập thành công',
    tokens: {
      accessToken,
      refreshToken
    }
  });
});

// 2. Endpoint Làm mới Token: POST /api/auth/refresh-token
app.post('/api/auth/refresh-token', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({
      success: false,
      code: 'MISSING_REFRESH_TOKEN',
      message: 'Vui lòng cung cấp refreshToken trong body'
    });
  }

  // Bước 1: Kiểm tra xem token này có nằm trong danh sách active (chưa bị revoke/logout) không
  if (!activeRefreshTokens.includes(refreshToken)) {
    return res.status(403).json({
      success: false,
      code: 'REVOKED_REFRESH_TOKEN',
      message: 'Refresh token không hợp lệ hoặc đã bị thu hồi. Vui lòng đăng nhập lại.'
    });
  }

  // Bước 2: Xác thực chữ ký và thời hạn của Refresh Token
  jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        code: 'INVALID_REFRESH_TOKEN',
        message: 'Refresh token đã hết hạn hoặc không hợp lệ'
      });
    }

    // Bước 3: Tìm user tương ứng
    const user = sampleUsers.find((u) => u.id === decoded.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy người dùng sở hữu token'
      });
    }

    // Bước 4: Ký và cấp phát một Access Token mới
    const newAccessToken = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_ACCESS_SECRET,
      { expiresIn: '15m' }
    );

    return res.status(200).json({
      success: true,
      message: 'Cấp mới Access Token thành công!',
      accessToken: newAccessToken,
      tokenType: 'Bearer',
      expiresIn: '15m'
    });
  });
});

// 3. Endpoint Đăng xuất: Thu hồi Refresh Token
app.post('/api/auth/logout', (req, res) => {
  const { refreshToken } = req.body;
  activeRefreshTokens = activeRefreshTokens.filter((token) => token !== refreshToken);

  res.status(200).json({
    success: true,
    message: 'Đăng xuất và thu hồi Refresh Token thành công'
  });
});

export default app;
