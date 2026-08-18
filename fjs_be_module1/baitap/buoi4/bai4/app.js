import express from 'express';

const app = express();
app.use(express.json());

let products = [
  { id: 1, name: 'MacBook Pro M3', price: 45000000 },
  { id: 2, name: 'Dell XPS 15', price: 38000000 },
  { id: 3, name: 'ThinkPad X1 Carbon', price: 42000000 }
];

// GET /api/products (Hỗ trợ query limit, giới hạn tối đa 50)
app.get('/api/products', (req, res) => {
  const { limit } = req.query;
  if (limit !== undefined) {
    const parsedLimit = Number(limit);
    if (isNaN(parsedLimit) || parsedLimit <= 0 || parsedLimit > 50) {
      return res.status(400).json({
        success: false,
        code: 'INVALID_LIMIT',
        message: 'Tham số limit phải là số nguyên dương từ 1 đến 50'
      });
    }
    return res.status(200).json({
      success: true,
      data: products.slice(0, parsedLimit),
      meta: { limit: parsedLimit, total: products.length }
    });
  }

  res.status(200).json({
    success: true,
    data: products,
    meta: { limit: products.length, total: products.length }
  });
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({
      success: false,
      code: 'PRODUCT_NOT_FOUND',
      message: 'Không tìm thấy sản phẩm'
    });
  }
  res.status(200).json({
    success: true,
    data: product
  });
});

// POST /api/products (Validate body chặt chẽ)
app.post('/api/products', (req, res) => {
  const { name, price } = req.body || {};

  // Test case biên 1: Body rỗng hoặc thiếu trường
  if (!name || price === undefined) {
    return res.status(400).json({
      success: false,
      code: 'MISSING_FIELDS',
      message: 'Thiếu trường bắt buộc name hoặc price'
    });
  }

  // Test case biên 2: price không phải số hợp lệ
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({
      success: false,
      code: 'INVALID_PRICE_FORMAT',
      message: 'Giá sản phẩm phải là một số dương hợp lệ'
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };
  products.push(newProduct);

  res.status(201).json({
    success: true,
    data: newProduct
  });
});

export default app;
