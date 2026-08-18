// Dữ liệu in-memory lưu trữ sản phẩm (chỉ duy nhất file này được thao tác trực tiếp)
let products = [
  { id: 1, name: 'Bàn phím cơ Keychron K2', price: 1850000, quantity: 15 },
  { id: 2, name: 'Chuột Logitech MX Master 3S', price: 2350000, quantity: 20 },
  { id: 3, name: 'Tai nghe Sony WH-1000XM5', price: 6990000, quantity: 8 }
];

let nextId = 4;

export const getAll = () => {
  return [...products];
};

export const findById = (id) => {
  return products.find((p) => p.id === Number(id));
};

export const create = (data) => {
  const newProduct = {
    id: nextId++,
    name: data.name,
    price: Number(data.price),
    quantity: Number(data.quantity || 0)
  };
  products.push(newProduct);
  return newProduct;
};

export default {
  getAll,
  findById,
  create
};
