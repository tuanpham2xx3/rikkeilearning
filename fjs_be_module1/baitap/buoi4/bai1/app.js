import express from 'express';
import { users, orders } from './data/orders.js';

const app = express();
app.use(express.json());

// GET /api/v1/users/:userId/orders?status=paid&limit=3
app.get('/api/v1/users/:userId/orders', (req, res) => {
  const userId = Number(req.params.userId);

  // Kiểm tra user tồn tại
  const userExists = users.some((u) => u.id === userId);
  if (!userExists) {
    return res.status(404).json({
      success: false,
      code: 'USER_NOT_FOUND',
      message: `Người dùng với ID ${userId} không tồn tại trong hệ thống`
    });
  }

  const { status, limit } = req.query;

  // Lọc theo userId
  let userOrders = orders.filter((o) => o.userId === userId);

  // Lọc theo status nếu có
  if (status) {
    userOrders = userOrders.filter((o) => o.status.toLowerCase() === status.toLowerCase());
  }

  // Giới hạn số lượng (mặc định là 5)
  const parsedLimit = parseInt(limit, 10) > 0 ? parseInt(limit, 10) : 5;
  const data = userOrders.slice(0, parsedLimit);

  return res.status(200).json({
    success: true,
    data,
    meta: {
      total: data.length,
      filteredCount: userOrders.length,
      limit: parsedLimit
    }
  });
});

export default app;
