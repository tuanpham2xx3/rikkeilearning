/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Xóa sạch dữ liệu cũ
  await knex('orders').del();
  await knex('users').del();

  // 1. Thêm 5 users
  const users = [
    { id: 1, name: 'Nguyen Van A', email: 'vana@example.com' },
    { id: 2, name: 'Tran Thi B', email: 'thib@example.com' },
    { id: 3, name: 'Le Van C', email: 'vanc@example.com' },
    { id: 4, name: 'Pham Thi D', email: 'thid@example.com' },
    { id: 5, name: 'Hoang Van E', email: 'vane@example.com' }
  ];
  await knex('users').insert(users);

  // 2. Thêm 15 orders
  const orders = [
    { user_id: 1, total: 500000 },
    { user_id: 1, total: 750000 },
    { user_id: 1, total: 1200000 },
    { user_id: 1, total: 300000 }, // User 1: 4 đơn, tổng 2.750.000

    { user_id: 2, total: 1500000 },
    { user_id: 2, total: 2000000 },
    { user_id: 2, total: 900000 }, // User 2: 3 đơn, tổng 4.400.000 (Top 1)

    { user_id: 3, total: 800000 },
    { user_id: 3, total: 600000 },
    { user_id: 3, total: 1100000 }, // User 3: 3 đơn, tổng 2.500.000 (Top 3)

    { user_id: 4, total: 3000000 }, // User 4: chỉ có 1 đơn (không thỏa mãn >= 2 đơn)

    { user_id: 5, total: 400000 },
    { user_id: 5, total: 500000 },
    { user_id: 5, total: 350000 },
    { user_id: 5, total: 200000 }  // User 5: 4 đơn, tổng 1.450.000
  ];
  await knex('orders').insert(orders);
}
