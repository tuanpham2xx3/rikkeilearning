const logger = require('./logger');

function run() {
  console.log('--- App 3 chạy ---');
  logger.error('App3: Lỗi nghiêm trọng xảy ra (error)');
}

module.exports = { run, logger };
