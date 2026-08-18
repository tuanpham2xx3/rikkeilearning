function registerLogger(orderService) {
  orderService.on('order:created', (order) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Đơn hàng #${order.id} - created (Tổng tiền: ${order.total.toLocaleString()} VNĐ)`);
  });

  orderService.on('order:processed', (order) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Đơn hàng #${order.id} - processed (Xử lý thành công)`);
  });
}

module.exports = { registerLogger };
