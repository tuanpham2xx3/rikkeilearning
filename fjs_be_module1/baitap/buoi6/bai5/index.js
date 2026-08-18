import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '..', 'atlas-credentials.env') });
dotenv.config({ path: path.join(__dirname, '.env') });

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shop_db';

// Khai báo Schema với strict: false để mô phỏng dữ liệu cũ không có trường stock
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
    stock: Number
  },
  { timestamps: true, strict: false }
);

const Product = mongoose.model('Product', productSchema);

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Kết nối MongoDB thành công!\n');

    // Xóa sạch và chèn dữ liệu cũ chưa có trường stock
    await Product.deleteMany({});

    // Dùng native collection để chèn trực tiếp document thiếu field stock
    await Product.collection.insertMany([
      {
        name: 'Laptop Dell Cũ',
        price: 10000,
        category: 'Laptop',
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0
      },
      {
        name: 'iPhone 12 Pro Cũ',
        price: 15000,
        category: 'Mobile',
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0
      }
    ]);

    // 1. Kiểm tra trước khi cập nhật
    console.log('[1] TRƯỚC KHI CHẠY SCRIPT (Bạn sẽ thấy 2 sản phẩm đầu không có trường "stock"):');
    const beforeUpdate = await Product.find({}).lean();
    console.log(beforeUpdate);

    // 2. Chạy script tìm các document thiếu trường stock và cập nhật stock: 10
    const updateResult = await Product.updateMany(
      { stock: { $exists: false } },
      { $set: { stock: 10 } }
    );
    console.log(`\n=> Đã cập nhật ${updateResult.modifiedCount} sản phẩm thiếu trường stock.\n`);

    // 3. Kiểm tra sau khi cập nhật
    console.log('[2] SAU KHI CHẠY SCRIPT (Tất cả sản phẩm cũ đã được bổ sung "stock: 10"):');
    const afterUpdate = await Product.find({}).lean();
    console.log(afterUpdate);

  } catch (error) {
    console.error('Lỗi:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nĐã đóng kết nối MongoDB.');
  }
}

run();
