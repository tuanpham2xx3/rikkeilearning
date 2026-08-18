import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '..', 'atlas-credentials.env') });
dotenv.config({ path: path.join(__dirname, '.env') });

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shop_db';

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Kết nối MongoDB thành công!\n');

    // Dọn dẹp và nạp dữ liệu mẫu
    await Product.deleteMany({});
    await Product.insertMany([
      { name: 'Dell XPS 13', price: 15000, category: 'Laptop' },
      { name: 'iPhone 14 Pro', price: 18000, category: 'Mobile' },
      { name: 'MacBook Pro M3 Max', price: 45000, category: 'Laptop' },
      { name: 'Samsung Galaxy S24 Ultra', price: 29000, category: 'Mobile' },
      { name: 'Tủ lạnh Inverter 400L', price: 12000, category: 'HomeAppliance' }
    ]);

    // Truy vấn: Thuộc danh mục "Laptop" HOẶC "Mobile", VÀ có giá bán < 20.000
    const queryCondition = {
      category: { $in: ['Laptop', 'Mobile'] },
      price: { $lt: 20000 }
    };

    const products = await Product.find(queryCondition);

    console.log('=> Danh sách Sản phẩm (Laptop / Mobile) có giá < 20.000:');
    console.log(products);

  } catch (error) {
    console.error('Lỗi khi thực thi:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nĐã đóng kết nối MongoDB.');
  }
}

run();
