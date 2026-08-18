import Product from '../models/Product.js';

export const getProducts = (req, res) => {
  const products = Product.getAll();
  res.status(200).json({
    success: true,
    total: products.length,
    data: products
  });
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = Product.findById(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Không tìm thấy sản phẩm với ID ${id}`
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
};

export const createProduct = (req, res) => {
  const { name, price, quantity } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Tên sản phẩm (name) và giá (price) là bắt buộc'
    });
  }

  const created = Product.create({ name, price, quantity });
  res.status(201).json({
    success: true,
    message: 'Tạo sản phẩm thành công',
    data: created
  });
};
