/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // 1. Tạo bảng users
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.string('email', 255).notNullable().unique();
    table.timestamps(true, true);
  });

  // 2. Tạo bảng orders có khóa ngoại trỏ tới users.id
  await knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable()
      .references('id').inTable('users')
      .onDelete('CASCADE');
    table.integer('total').notNullable();
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  // Xóa bảng orders trước để không vướng ràng buộc khóa ngoại
  await knex.schema.dropTableIfExists('orders');
  await knex.schema.dropTableIfExists('users');
}
