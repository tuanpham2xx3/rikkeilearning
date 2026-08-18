import knex from 'knex';
import config from './knexfile.js';

const db = knex(config);

async function runReport() {
  try {
    // Đảm bảo chạy migration và seed trước khi thống kê
    await db.migrate.latest();
    await db.seed.run();

    // Chuỗi hàm duy nhất theo đúng yêu cầu đề bài
    const query = db('users')
      .leftJoin('orders', 'users.id', 'orders.user_id')
      .select('users.id', 'users.name', 'users.email')
      .select(db.raw('COUNT(orders.id) AS total_orders'))
      .select(db.raw('SUM(orders.total) AS total_spent'))
      .groupBy('users.id', 'users.name', 'users.email')
      .havingRaw('COUNT(orders.id) >= 2')
      .orderBy('total_spent', 'desc')
      .limit(3);

    console.log('--- CÂU LỆNH SQL ĐƯỢC SINH RA (.toString()) ---');
    console.log(query.toString());
    console.log('-------------------------------------------------\n');

    const results = await query;
    console.log('--- KẾT QUẢ TRUY VẤN (TOP 3 USERS CHI TIÊU NHIỀU NHẤT >= 2 ĐƠN) ---');
    console.table(results);

    await db.destroy();
  } catch (err) {
    console.error('Lỗi khi chạy báo cáo:', err);
    process.exit(1);
  }
}

runReport();
