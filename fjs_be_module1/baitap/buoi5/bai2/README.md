### Câu SQL Knex (.toString())
```sql
select `users`.`id`, `users`.`name`, `users`.`email`, COUNT(orders.id) AS total_orders, SUM(orders.total) AS total_spent from `users` left join `orders` on `users`.`id` = `orders`.`user_id` group by `users`.`id`, `users`.`name`, `users`.`email` having COUNT(orders.id) >= 2 order by `total_spent` desc limit 3
```

### Kết quả truy vấn report.js
| id | name | email | total_orders | total_spent |
|---|---|---|---|---|
| 2 | Tran Thi B | thib@example.com | 3 | 4400000 |
| 1 | Nguyen Van A | vana@example.com | 4 | 2750000 |
| 3 | Le Van C | vanc@example.com | 3 | 2500000 |
