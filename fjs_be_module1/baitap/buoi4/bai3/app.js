import express from 'express';

const app = express();
app.use(express.json());

let products = [
  { id: 1, name: 'MacBook Pro M3', price: 45000000 },
  { id: 2, name: 'Dell XPS 15', price: 38000000 },
  { id: 3, name: 'ThinkPad X1 Carbon', price: 42000000 }
];

// 1. GET /api/products
app.get('/api/products', (req, res) => {
  res.status(200).json({
    success: true,
    data: products
  });
});

// 2. GET /api/products/:id
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

// 3. POST /api/products
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      success: false,
      message: 'Tên và giá sản phẩm là bắt buộc'
    });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price: Number(price)
  };
  products.push(newProduct);
  res.status(201).json({
    success: true,
    data: newProduct
  });
});

export default app;
