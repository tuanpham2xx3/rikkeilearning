import { Sequelize, DataTypes, Op } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false
});

export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true
});

// Nạp dữ liệu mẫu khi khởi động CSDL
export async function initDb() {
  await sequelize.sync({ force: true });

  const sampleProducts = [
    { name: 'Sách Lập trình Node.js thực chiến', price: 150000 },
    { name: 'Sách Clean Code tiếng Việt', price: 220000 },
    { name: 'Sách Thiết kế Microservices', price: 280000 },
    { name: 'Bàn phím cơ Bluetooth', price: 1200000 },
    { name: 'Chuột không dây công thái học', price: 850000 },
    { name: 'Sách Refactoring Code', price: 190000 },
    { name: 'Tai nghe chụp tai chống ồn', price: 3500000 },
    { name: 'Sách Cấu trúc dữ liệu và giải thuật', price: 160000 },
    { name: 'Màn hình 27 inch 4K IPS', price: 7900000 },
    { name: 'Sách Tư duy lập trình hiện đại', price: 135000 },
    { name: 'Giá đỡ laptop nhôm tản nhiệt', price: 250000 },
    { name: 'Sách Kiến trúc phần mềm căn bản', price: 210000 }
  ];

  await Product.bulkCreate(sampleProducts);
  console.log('✅ Đã nạp thành công 12 sản phẩm mẫu vào CSDL Sequelize');
}

export { Op };
export default Product;
