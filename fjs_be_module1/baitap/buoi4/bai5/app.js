import express from 'express';
import { generateOrderLinks } from './utils/links.js';

const app = express();
app.use(express.json());

const orders = [
  { id: 17, userId: 3, status: 'pending', total: 450000, createdAt: '2026-03-15T08:30:00Z' },
  { id: 18, userId: 3, status: 'cancelled', total: 820000, createdAt: '2026-03-14T10:15:00Z' },
  { id: 19, userId: 2, status: 'paid', total: 1250000, createdAt: '2026-03-16T14:20:00Z' }
];

// GET /api/v2/orders/:id (HATEOAS Level 3)
app.get('/api/v2/orders/:id', (req, res) => {
  const orderId = Number(req.params.id);
  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return res.status(404).json({
      success: false,
      code: 'ORDER_NOT_FOUND',
      message: `Không tìm thấy đơn hàng #${orderId}`
    });
  }

  // Tạo liên kết hành động theo trạng thái của đơn hàng
  const links = generateOrderLinks(order);

  return res.status(200).json({
    success: true,
    data: {
      ...order,
      _links: links
    }
  });
});

// Giả lập endpoint thực hiện hành động hủy đơn
app.post('/api/v2/orders/:id/cancellation', (req, res) => {
  const orderId = Number(req.params.id);
  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return res.status(404).json({ success: false, message: 'Đơn hàng không tồn tại' });
  }

  if (order.status !== 'pending') {
    return res.status(400).json({
      success: false,
      message: `Không thể hủy đơn hàng đang ở trạng thái "${order.status}"`
    });
  }

  order.status = 'cancelled';
  res.status(200).json({
    success: true,
    message: `Đã hủy thành công đơn hàng #${orderId}`,
    data: {
      ...order,
      _links: generateOrderLinks(order)
    }
  });
});

export default app;
