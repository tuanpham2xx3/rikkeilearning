import { Sequelize, DataTypes } from 'sequelize';

// Biến toàn cục theo dõi số lượng câu SQL sinh ra trong request hiện tại
export let currentQueryCount = 0;

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: (sql) => {
    // Chỉ đếm các câu SELECT liên quan đến nghiệp vụ
    if (sql.startsWith('Executing (default): SELECT')) {
      currentQueryCount++;
    }
  }
});

export function resetQueryCount() {
  currentQueryCount = 0;
}

export const Category = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

export const Product = sequelize.define('Product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  categoryId: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

export async function initDb() {
  await sequelize.sync({ force: true });

  const categoriesData = [];
  const productsData = [];

  for (let i = 1; i <= 50; i++) {
    categoriesData.push({ id: i, name: `Danh mục #${i}` });
    for (let j = 1; j <= 10; j++) {
      productsData.push({
        name: `Sản phẩm ${j} thuộc Danh mục ${i}`,
        price: 50000 * j,
        categoryId: i
      });
    }
  }

  await Category.bulkCreate(categoriesData);
  await Product.bulkCreate(productsData);

  console.log('✅ Đã nạp thành công 50 Danh mục và 500 Sản phẩm mẫu!');
}

export default {
  sequelize,
  Category,
  Product,
  initDb,
  resetQueryCount
};
