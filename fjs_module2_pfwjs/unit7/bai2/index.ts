enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}

class Order {
  status: OrderStatus;

  constructor(status: OrderStatus) {
    this.status = status;
  }
}

function checkOrderStatus(order: Order): void {
  if (order.status === OrderStatus.Delivered) {
    console.log("Order finished");
  }
}

const order = new Order(OrderStatus.Delivered);

checkOrderStatus(order);
