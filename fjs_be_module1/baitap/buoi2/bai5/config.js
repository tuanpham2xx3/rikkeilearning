const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const config = {
  PROCESSING_DELAY_MS: parseInt(process.env.PROCESSING_DELAY_MS, 10) || 2000,
  LOG_TIMEZONE: process.env.LOG_TIMEZONE || 'Asia/Ho_Chi_Minh'
};

module.exports = config;
