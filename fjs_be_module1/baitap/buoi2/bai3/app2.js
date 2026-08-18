const logger = require('./logger');

function run() {
  console.log('--- App 2 chạy ---');
  logger.info('App2: Đang xử lý dữ liệu (info)');
  logger.warn('App2: Thời gian phản hồi chậm (warn)');
}

module.exports = { run, logger };
