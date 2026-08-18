const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// Biến đếm số lần module được khởi tạo
let initCount = 0;
initCount++;

const LEVELS = {
  info: 1,
  warn: 2,
  error: 3
};

function shouldLog(level) {
  const currentLevel = (process.env.LOG_LEVEL || 'info').toLowerCase();
  const currentPriority = LEVELS[currentLevel] || LEVELS.info;
  const targetPriority = LEVELS[level] || LEVELS.info;
  return targetPriority >= currentPriority;
}

function info(msg) {
  if (shouldLog('info')) {
    console.log(`[INFO] ${msg}`);
  }
}

function warn(msg) {
  if (shouldLog('warn')) {
    console.log(`[WARN] ${msg}`);
  }
}

function error(msg) {
  if (shouldLog('error')) {
    console.log(`[ERROR] ${msg}`);
  }
}

module.exports = {
  info,
  warn,
  error,
  get initCount() {
    return initCount;
  }
};
