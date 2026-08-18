const EventEmitter = require('events');

class OrderService extends EventEmitter {
  constructor() {
    super();

    // Lắng nghe mỗi lần có đơn mới được tạo
    this.on('order:created', (order) => {
      console.log(`[EMAIL] Đã gửi email xác nhận cho đơn hàng #${order.id}`);
    });

    // Chỉ chạy duy nhất 1 lần khi có đơn đầu tiên
    this.once('order:created', () => {
      console.log('[SYSTEM] Đơn hàng đầu tiên đã được khởi tạo trong hệ thống');
    });
  }

  createOrder(order) {
    this.emit('order:created', order);
  }
}

module.exports = OrderService;
