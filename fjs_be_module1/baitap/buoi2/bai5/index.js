const config = require('./config');
const OrderService = require('./orderService');
const { registerLogger } = require('./logger');

const orderService = new OrderService();
registerLogger(orderService);

console.log(`=== BẮT ĐẦU HỆ THỐNG XỬ LÝ ĐƠN HÀNG (DELAY: ${config.PROCESSING_DELAY_MS}ms) ===`);

// Tạo 2 đơn hàng mẫu
const orders = [
  { id: 101, total: 250000 },
  { id: 102, total: 540000 }
];

// Tạo đơn 1 ngay lập tức
orderService.createOrder(orders[0]);

// Tạo đơn 2 sau 500ms để kiểm tra tính độc lập và thứ tự xử lý của Event Loop
setTimeout(() => {
  orderService.createOrder(orders[1]);
}, 500);
