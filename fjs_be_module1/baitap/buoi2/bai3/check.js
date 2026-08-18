const app1 = require('./app1');
const app2 = require('./app2');
const app3 = require('./app3');
const logger = require('./logger');

console.log(`LOG_LEVEL hiện tại: "${process.env.LOG_LEVEL || 'info'}"`);
console.log('-------------------------------------------');

app1.run();
app2.run();
app3.run();

console.log('-------------------------------------------');
console.log(`Giá trị initCount cuối cùng: ${logger.initCount}`);

if (logger.initCount === 1) {
  console.log('=> Cơ chế cache module của CommonJS hoạt động chính xác (chỉ nạp và chạy mã khởi tạo module 1 lần).');
} else {
  console.log('=> Cảnh báo: Module bị nạp nhiều lần!');
}
