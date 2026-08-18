const OrderService = require('./orderService');

const service = new OrderService();

const sampleOrders = [
  { id: 1, total: 100000 },
  { id: 2, total: 250000 },
  { id: 3, total: 75000 }
];

console.log('--- BẮT ĐẦU TẠO CÁC ĐƠN HÀNG ---');
sampleOrders.forEach((order) => {
  service.createOrder(order);
});
