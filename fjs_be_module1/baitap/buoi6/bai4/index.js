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

const orderSchema = new mongoose.Schema(
  {
    orderNumber: String,
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: Number
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Kết nối MongoDB thành công!');
    console.log('\n--- ĐANG TẠO DỮ LIỆU MẪU ---');

    // Tạo sản phẩm mẫu
    const product = await Product.create({
      name: 'iPhone 15 Pro Max',
      price: 30000,
      category: 'Mobile'
    });
    console.log(`=> Đã tạo Sản phẩm: ${product.name}`);

    // Tạo đơn hàng tham chiếu tới sản phẩm
    const order = await Order.create({
      orderNumber: 'ORD-2023-001',
      product_id: product._id,
      quantity: 2
    });
    console.log(`=> Đã tạo Đơn hàng: ${order.orderNumber}`);

    // 1. Truy vấn thông thường (không populate)
    console.log('\n--- [1] KẾT QUẢ KHI KHÔNG DÙNG POPULATE ---');
    const orderWithoutPopulate = await Order.findById(order._id);
    console.log(orderWithoutPopulate);

    // 2. Truy vấn với .populate('product_id')
    console.log('\n--- [2] KẾT QUẢ SAU KHI DÙNG POPULATE (BÀI 11) ---');
    const orderWithPopulate = await Order.findById(order._id).populate('product_id');
    console.log(orderWithPopulate);

  } catch (error) {
    console.error('Lỗi:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nĐã đóng kết nối MongoDB.');
  }
}

run();
