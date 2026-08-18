import jwt from 'jsonwebtoken';

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret_key_123456';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      code: 'MISSING_TOKEN',
      message: 'Không tìm thấy token xác thực trong header Authorization'
    });
  }

  // Bóc tách token từ định dạng "Bearer <token>"
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7).trim()
    : authHeader.trim();

  if (!token) {
    return res.status(401).json({
      success: false,
      code: 'INVALID_TOKEN_FORMAT',
      message: 'Định dạng token không hợp lệ (Yêu cầu: Bearer <token>)'
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_ACCESS_SECRET);
    req.user = decoded; // Gán thông tin đã giải mã vào req.user
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        code: 'TOKEN_EXPIRED',
        message: 'Token đã hết hạn sử dụng. Vui lòng làm mới token.'
      });
    }
    return res.status(401).json({
      success: false,
      code: 'INVALID_TOKEN',
      message: 'Token không hợp lệ hoặc chữ ký không chính xác'
    });
  }
};

export default authenticateToken;
