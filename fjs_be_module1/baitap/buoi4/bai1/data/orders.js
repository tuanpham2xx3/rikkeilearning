export const users = [
  { id: 1, name: 'Nguyen Van A' },
  { id: 2, name: 'Tran Thi B' },
  { id: 3, name: 'Le Van C' }
];

export const orders = [
  { id: 1, userId: 1, status: 'paid', total: 250000 },
  { id: 2, userId: 1, status: 'pending', total: 120000 },
  { id: 3, userId: 1, status: 'cancelled', total: 450000 },
  { id: 4, userId: 2, status: 'paid', total: 950000 },
  { id: 5, userId: 2, status: 'paid', total: 310000 },
  { id: 6, userId: 2, status: 'pending', total: 600000 },
  { id: 7, userId: 2, status: 'paid', total: 800000 },
  { id: 8, userId: 3, status: 'pending', total: 150000 },
  { id: 9, userId: 3, status: 'paid', total: 220000 },
  { id: 10, userId: 3, status: 'cancelled', total: 700000 }
];

export default {
  users,
  orders
};
