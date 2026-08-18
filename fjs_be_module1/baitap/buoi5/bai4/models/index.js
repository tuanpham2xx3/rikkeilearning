import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false
});

export const Product = sequelize.define('Product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
}, { timestamps: true });

export const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  totalAmount: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  status: { type: DataTypes.STRING, defaultValue: 'completed' }
}, { timestamps: true });

export const OrderItem = sequelize.define('OrderItem', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  orderId: { type: DataTypes.INTEGER, allowNull: false },
  productId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  unitPrice: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: true });

// Thiết lập quan hệ Many-to-Many
Order.belongsToMany(Product, { through: OrderItem, foreignKey: 'orderId' });
Product.belongsToMany(Order, { through: OrderItem, foreignKey: 'productId' });
Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

export async function initDb() {
  await sequelize.sync({ force: true });

  await Product.bulkCreate([
    { id: 1, name: 'Bàn phím không dây MX Keys', price: 2500000, stock: 5 },
    { id: 2, name: 'Chuột không dây MX Anywhere', price: 1700000, stock: 10 },
    { id: 3, name: 'Tai nghe Bluetooth chống ồn', price: 3200000, stock: 2 },
    { id: 4, name: 'Màn hình Dell Ultrasharp', price: 8500000, stock: 4 },
    { id: 5, name: 'Hub USB-C đa năng 8 in 1', price: 650000, stock: 1 } // Tồn kho chỉ có 1
  ]);

  console.log('✅ Đã khởi tạo bảng và 5 sản phẩm mẫu thành công!');
}

export default {
  sequelize,
  Product,
  Order,
  OrderItem,
  initDb
};
