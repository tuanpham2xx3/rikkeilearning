const NotificationCenter = require('./notificationCenter');

const emitter = new NotificationCenter();

console.log('=== BẮT ĐẦU CHẠY KỊCH BẢN TEST PUB/SUB ===\n');

// Sự kiện 1: Đăng ký thành viên mới
console.log('1. Phát sự kiện user:registered');
emitter.emit('user:registered', { id: 101, username: 'nguyenvana', email: 'vana@example.com' });
console.log('');

// Sự kiện 2: Tạo đơn hàng #1 (hợp lệ)
console.log('2. Phát sự kiện order:created');
emitter.emit('order:created', { id: 501, total: 350000 });
console.log('');

// Sự kiện 3: Hủy đơn hàng #2 (hợp lệ <= 1.000.000)
console.log('3. Phát sự kiện order:cancelled (Đơn hợp lệ)');
emitter.emit('order:cancelled', { id: 502, total: 200000 });
console.log('');

// Sự kiện 4: Hủy đơn hàng #3 (GÂY LỖI do total > 1.000.000)
console.log('4. Phát sự kiện order:cancelled (Đơn giá trị cao > 1tr - Kích hoạt error event)');
emitter.emit('order:cancelled', { id: 503, total: 2500000 });
console.log('');

// Sự kiện 5: Tạo đơn hàng #4 (chứng minh hệ thống vẫn chạy bình thường sau khi có lỗi)
console.log('5. Phát sự kiện order:created sau lỗi để kiểm tra hệ thống không bị dừng');
emitter.emit('order:created', { id: 504, total: 600000 });
console.log('');

console.log('=== KỊCH BẢN TEST HOÀN TẤT THÀNH CÔNG ===');
