import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Trong ES Module, __filename và __dirname không có sẵn sẵn mà phải khởi tạo từ import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

export const PROCESSING_DELAY_MS = parseInt(process.env.PROCESSING_DELAY_MS, 10) || 2000;
export const LOG_TIMEZONE = process.env.LOG_TIMEZONE || 'Asia/Ho_Chi_Minh';

export default {
  PROCESSING_DELAY_MS,
  LOG_TIMEZONE
};
