import express from 'express';
import { sequelize, Product, Order, OrderItem } from './models/index.js';

const app = express();
app.use(express.json());

// Xem danh sách sản phẩm và tồn kho
app.get('/api/v1/products', async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json({ success: true, data: products });
});

// Xem danh sách đơn hàng
app.get('/api/v1/orders', async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: Product }]
  });
  res.status(200).json({ success: true, data: orders });
});

// Endpoint đặt hàng với Transaction chặt chẽ
app.post('/api/v1/orders', async (req, res) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Vui lòng cung cấp danh sách sản phẩm (items)'
    });
  }

  // Khởi tạo Transaction
  const t = await sequelize.transaction();

  try {
    let totalAmount = 0;
    const orderItemsToCreate = [];
    const productsToUpdate = [];

    // Bước 1: Kiểm tra tồn kho của tất cả sản phẩm
    for (const item of items) {
      const product = await Product.findByPk(item.productId, { transaction: t });

      if (!product) {
        await t.rollback();
        return res.status(404).json({
          success: false,
          message: `Không tìm thấy sản phẩm với ID ${item.productId}`
        });
      }

      if (product.stock < item.qty) {
        // Rollback toàn bộ nếu bất kỳ sản phẩm nào thiếu hàng
        await t.rollback();
        return res.status(409).json({
          success: false,
          code: 'INSUFFICIENT_STOCK',
          message: `Sản phẩm "${product.name}" không đủ tồn kho để đặt hàng (Yêu cầu: ${item.qty}, Tồn kho: ${product.stock})`
        });
      }

      const itemTotal = product.price * item.qty;
      totalAmount += itemTotal;

      orderItemsToCreate.push({
        productId: product.id,
        quantity: item.qty,
        unitPrice: product.price
      });

      productsToUpdate.push({ product, qty: item.qty });
    }

    // Bước 2: Tạo bản ghi Order
    const newOrder = await Order.create({
      totalAmount,
      status: 'completed'
    }, { transaction: t });

    // Bước 3: Tạo các bản ghi OrderItem
    for (const itemData of orderItemsToCreate) {
      await OrderItem.create({
        orderId: newOrder.id,
        productId: itemData.productId,
        quantity: itemData.quantity,
        unitPrice: itemData.unitPrice
      }, { transaction: t });
    }

    // Bước 4: Trừ stock của từng sản phẩm bằng decrement
    for (const { product, qty } of productsToUpdate) {
      await product.decrement('stock', { by: qty, transaction: t });
    }

    // Commit Transaction sau khi tất cả các bước thành công
    await t.commit();

    return res.status(201).json({
      success: true,
      message: 'Đặt hàng thành công và đã trừ tồn kho tương ứng',
      data: {
        orderId: newOrder.id,
        totalAmount,
        items: orderItemsToCreate
      }
    });

  } catch (err) {
    // Tự động rollback nếu có lỗi bất ngờ
    if (!t.finished) {
      await t.rollback();
    }
    return res.status(500).json({
      success: false,
      message: err.message || 'Lỗi xử lý đơn hàng'
    });
  }
});

export default app;
