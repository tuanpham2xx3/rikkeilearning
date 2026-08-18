const EventEmitter = require('events');

class NotificationCenter extends EventEmitter {
  constructor() {
    super();

    // 1. Lắng nghe sự kiện lỗi hệ thống để tránh crash app
    this.on('error', (err) => {
      console.error(`[ERROR HANDLER] Đã bắt và xử lý lỗi: ${err.message}`);
    });

    // 2. Sự kiện 'user:registered' - 2 listener độc lập
    this.on('user:registered', (user) => {
      console.log(`[EMAIL] Gửi email chào mừng thành viên mới: ${user.username} (${user.email})`);
    });

    this.on('user:registered', (user) => {
      console.log(`[ANALYTICS] Ghi nhận người dùng mới tham gia hệ thống: ID ${user.id}`);
    });

    // 3. Sự kiện 'order:created' - 2 listener độc lập
    this.on('order:created', (order) => {
      console.log(`[EMAIL] Gửi xác nhận đơn hàng #${order.id}`);
    });

    this.on('order:created', (order) => {
      console.log(`[STATS] Cập nhật doanh thu: +${order.total.toLocaleString()} VNĐ`);
    });

    // 4. Sự kiện 'order:cancelled' - 2 listener độc lập
    this.on('order:cancelled', (order) => {
      console.log(`[EMAIL] Thông báo hủy đơn hàng #${order.id}`);
    });

    this.on('order:cancelled', (order) => {
      try {
        if (order.total > 1000000) {
          throw new Error(`Đơn hàng #${order.id} có giá trị ${order.total.toLocaleString()} VNĐ vượt hạn mức tự động hủy (1.000.000 VNĐ)`);
        }
        console.log(`[INVENTORY] Hoàn trả tồn kho cho đơn hàng #${order.id}`);
      } catch (err) {
        // Chuyển lỗi về sự kiện 'error' của EventEmitter
        this.emit('error', err);
      }
    });
  }
}

module.exports = NotificationCenter;
