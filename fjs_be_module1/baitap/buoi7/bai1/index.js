import config from './config.js';

console.log('=== THÔNG TIN CẤU HÌNH SERVER & BẢO MẬT ===');
console.log(`Port: ${config.port}`);
console.log(`Environment: ${config.env}`);
console.log(`MongoDB URI: ${config.mongoUri.replace(/:([^:@]+)@/, ':****@')}`); // Ẩn mật khẩu khi log
console.log(`JWT Access Token Secret: ${config.jwt.accessSecret ? 'Đã cấu hình (An toàn)' : 'Chưa cấu hình'}`);
console.log(`JWT Access Expires In: ${config.jwt.accessExpiresIn}`);
console.log(`JWT Refresh Token Secret: ${config.jwt.refreshSecret ? 'Đã cấu hình (An toàn)' : 'Chưa cấu hình'}`);
console.log(`JWT Refresh Expires In: ${config.jwt.refreshExpiresIn}`);
console.log('===========================================');
