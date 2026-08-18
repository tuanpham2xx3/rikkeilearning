import express from 'express';
import { Category, Product, resetQueryCount, currentQueryCount } from './models/index.js';

const app = express();
app.use(express.json());

// Middleware đo thời gian và reset bộ đếm SQL cho từng request
app.use((req, res, next) => {
  resetQueryCount();
  req.startTime = Date.now();
  next();
});

// 1. Endpoint SLOW: Bị lỗi N+1 Query (1 câu lấy 50 categories + 50 câu lấy products = 51 queries)
app.get('/api/v1/report/slow', async (req, res) => {
  try {
    const categories = await Category.findAll();

    const data = [];
    for (const cat of categories) {
      const products = await Product.findAll({
        where: { categoryId: cat.id }
      });
      data.push({
        id: cat.id,
        name: cat.name,
        Products: products
      });
    }

    const durationMs = Date.now() - req.startTime;

    return res.status(200).json({
      success: true,
      data,
      meta: {
        queryCount: currentQueryCount,
        durationMs
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// 2. Endpoint FAST: Khắc phục bằng Eager Loading (chỉ 1 câu JOIN duy nhất)
app.get('/api/v1/report/fast', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }]
    });

    const durationMs = Date.now() - req.startTime;

    return res.status(200).json({
      success: true,
      data: categories,
      meta: {
        queryCount: currentQueryCount,
        durationMs
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

export default app;
