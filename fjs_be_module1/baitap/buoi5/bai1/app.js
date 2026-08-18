import express from 'express';
import { Product, Op } from './models/Product.js';

const app = express();
app.use(express.json());

// GET /api/v1/products?page=1&limit=10&keyword=sach&sort=price_asc
app.get('/api/v1/products', async (req, res) => {
  try {
    let { page = 1, limit = 10, keyword, sort } = req.query;

    // 1. Ép kiểu và validate page, limit (chặn số âm, bằng 0, max 50)
    page = parseInt(page, 10);
    limit = parseInt(limit, 10);

    if (isNaN(page) || page <= 0) page = 1;
    if (isNaN(limit) || limit <= 0) limit = 10;
    if (limit > 50) limit = 50; // Giới hạn tối đa 50 bản ghi/trang

    const offset = (page - 1) * limit;

    // 2. Xây dựng điều kiện lọc (where)
    const where = {};
    if (keyword && typeof keyword === 'string' && keyword.trim() !== '') {
      where.name = {
        [Op.like]: `%${keyword.trim()}%`
      };
    }

    // 3. Xử lý sắp xếp (sort)
    let order = [['id', 'DESC']]; // Mặc định là id_desc
    if (sort === 'price_asc') {
      order = [['price', 'ASC']];
    } else if (sort === 'price_desc') {
      order = [['price', 'DESC']];
    }

    // 4. Thực hiện truy vấn findAndCountAll
    const { count, rows } = await Product.findAndCountAll({
      where,
      order,
      limit,
      offset
    });

    const totalPages = Math.ceil(count / limit);

    return res.status(200).json({
      success: true,
      data: rows,
      meta: {
        page,
        limit,
        total: count,
        totalPages: totalPages || 1
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || 'Lỗi truy vấn cơ sở dữ liệu'
    });
  }
});

export default app;
