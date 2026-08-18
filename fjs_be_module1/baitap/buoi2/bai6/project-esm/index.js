import config from './config.js';
import { OrderService } from './orderService.js';
import { registerLogger } from './logger.js';

const orderService = new OrderService();
registerLogger(orderService);

console.log(`[ESM] === BẮT ĐẦU HỆ THỐNG XỬ LÝ ĐƠN HÀNG (DELAY: ${config.PROCESSING_DELAY_MS}ms) ===`);

const orders = [
  { id: 201, total: 300000 },
  { id: 202, total: 700000 }
];

orderService.createOrder(orders[0]);

setTimeout(() => {
  orderService.createOrder(orders[1]);
}, 500);
