const config = require('./config');
const OrderService = require('./orderService');
const { registerLogger } = require('./logger');

const orderService = new OrderService();
registerLogger(orderService);

console.log(`[CJS] === BẮT ĐẦU HỆ THỐNG XỬ LÝ ĐƠN HÀNG (DELAY: ${config.PROCESSING_DELAY_MS}ms) ===`);

const orders = [
  { id: 201, total: 300000 },
  { id: 202, total: 700000 }
];

orderService.createOrder(orders[0]);

setTimeout(() => {
  orderService.createOrder(orders[1]);
}, 500);
