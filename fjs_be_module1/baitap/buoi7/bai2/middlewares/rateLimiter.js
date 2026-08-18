import rateLimit from 'express-rate-limit';

// Cấu hình chốt chặn Rate Limit riêng cho chức năng đăng nhập
export const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Khung thời gian 15 phút
  max: 5, // Tối đa 5 lần thử
  standardHeaders: true, // Trả về thông tin RateLimit-* trong header
  legacyHeaders: false,
  message: {
    success: false,
    code: 'TOO_MANY_REQUESTS',
    message: 'Bạn đã thử đăng nhập sai quá nhiều lần. Vui lòng thử lại sau 15 phút để bảo vệ tài khoản.'
  }
});

export default loginRateLimiter;
