import type { OrderStatus } from '../store/filterStore';

export type Order = {
  id: string;
  customer: string;
  product: string;
  total: number;
  status: Exclude<OrderStatus, 'All'>;
};

const orders: Order[] = [
  { id: '#ORD-1001', customer: 'Nguyễn Minh Anh', product: 'MacBook Air M3', total: 28990000, status: 'Pending' },
  { id: '#ORD-1002', customer: 'Trần Quốc Bảo', product: 'AirPods Pro', total: 5990000, status: 'Shipped' },
  { id: '#ORD-1003', customer: 'Lê Hoài Nam', product: 'iPad Air', total: 16490000, status: 'Delivered' },
  { id: '#ORD-1004', customer: 'Phạm Thu Hà', product: 'Magic Keyboard', total: 3290000, status: 'Pending' },
  { id: '#ORD-1005', customer: 'Đỗ Gia Huy', product: 'Apple Watch', total: 10990000, status: 'Shipped' },
  { id: '#ORD-1006', customer: 'Vũ Khánh Linh', product: 'iPhone 16', total: 22990000, status: 'Delivered' },
];

export async function getOrders(filters: { status: OrderStatus; keyword: string }): Promise<Order[]> {
  await new Promise((resolve) => setTimeout(resolve, 450));
  const keyword = filters.keyword.toLowerCase();

  return orders.filter((order) => {
    const matchesStatus = filters.status === 'All' || order.status === filters.status;
    const matchesKeyword = !keyword || `${order.id} ${order.customer} ${order.product}`.toLowerCase().includes(keyword);
    return matchesStatus && matchesKeyword;
  });
}
