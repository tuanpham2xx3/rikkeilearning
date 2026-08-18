const logger = require('./logger');

function run() {
  console.log('--- App 1 chạy ---');
  logger.info('App1: Khởi động thành công (info)');
  logger.warn('App1: Cảnh báo bộ nhớ (warn)');
  logger.error('App1: Lỗi kết nối DB (error)');
}

module.exports = { run, logger };
