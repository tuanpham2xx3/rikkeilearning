import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { Product } from './models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Nạp thông tin kết nối từ atlas-credentials.env ở thư mục gốc baitap
dotenv.config({ path: path.join(__dirname, '..', '..', 'atlas-credentials.env') });
dotenv.config({ path: path.join(__dirname, '.env') });

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shop_db';

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Kết nối MongoDB thành công!');

    // Xóa sạch dữ liệu test cũ
    await Product.deleteMany({});

    console.log('\n--- TEST 1: LƯU SẢN PHẨM HỢP LỆ ---');
    const validProduct = new Product({
      name: 'Bàn phím cơ không dây',
      price: 1500000,
      category: 'Phụ kiện'
    });
    const saved = await validProduct.save();
    console.log('=> Lưu THÀNH CÔNG sản phẩm hợp lệ:');
    console.log(`ID: ${saved._id}`);
    console.log(`Tạo lúc: ${saved.createdAt}`);

    console.log('\n--- TEST 2: LƯU SẢN PHẨM VI PHẠM VALIDATION ---');
    console.log('=> Đang cố gắng lưu sản phẩm lỗi vào DB...');
    try {
      const invalidProduct = new Product({
        name: 'Dell', // Dưới 5 ký tự
        price: -50000, // Số âm
        category: 'Laptop'
      });
      await invalidProduct.save();
    } catch (err) {
      console.log('\n[!] BẮT ĐƯỢC LỖI VALIDATION:');
      if (err.errors) {
        if (err.errors.name) {
          console.log(`- Lỗi ở trường 'name': ${err.errors.name.message}`);
        }
        if (err.errors.price) {
          console.log(`- Lỗi ở trường 'price': ${err.errors.price.message}`);
        }
      } else {
        console.log(`- Lỗi: ${err.message}`);
      }
    }

  } catch (error) {
    console.error('Lỗi kết nối hoặc xử lý:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('\nĐã đóng kết nối MongoDB.');
  }
}

run();
