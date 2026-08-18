const EventEmitter = require('events');
const config = require('./config');

class OrderService extends EventEmitter {
  createOrder(order) {
    // 1. Phát sự kiện đơn hàng đã tạo ngay lập tức
    this.emit('order:created', order);

    // 2. Giả lập tác vụ xử lý bất đồng bộ (thanh toán, kho vận...)
    setTimeout(() => {
      this.emit('order:processed', order);
    }, config.PROCESSING_DELAY_MS);
  }
}

module.exports = OrderService;
