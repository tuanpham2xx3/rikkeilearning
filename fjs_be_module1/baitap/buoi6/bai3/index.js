import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '..', 'atlas-credentials.env') });
dotenv.config({ path: path.join(__dirname, '.env') });

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shop_db';

// Định nghĩa Schema lồng nhau (Embedded Document)
const locationSchema = new mongoose.Schema(
  {
    street: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true }
  },
  { _id: false } // Không cần sinh _id riêng cho subdocument nếu không cần thiết
);

const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: locationSchema, required: true }
  },
  { timestamps: true }
);

const Store = mongoose.model('Store', storeSchema);

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Kết nối MongoDB thành công!');
    console.log('\n--- ĐANG TẠO MỚI CỬA HÀNG ---');

    const newStore = new Store({
      name: 'Cửa hàng Tiện lợi 24/7',
      location: {
        street: '123 Đường Nguyễn Huệ',
        district: 'Quận 1',
        city: 'Hồ Chí Minh'
      }
    });

    const savedStore = await newStore.save();
    console.log('\n=> Tạo thành công! Cấu trúc JSON trả về thể hiện rõ quan hệ cha-con:');
    console.log(savedStore);

  } catch (error) {
    console.error('Lỗi:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nĐã đóng kết nối MongoDB.');
  }
}

run();
