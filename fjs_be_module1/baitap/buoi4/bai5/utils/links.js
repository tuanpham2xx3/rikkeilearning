/**
 * Hàm tạo danh sách liên kết HATEOAS theo trạng thái đơn hàng
 * @param {Object} order - Đơn hàng chứa { id, userId, status }
 * @returns {Object} Khối _links tương ứng với trạng thái
 */
export function generateOrderLinks(order) {
  const baseHref = `/api/v2/orders/${order.id}`;

  const links = {
    self: {
      href: baseHref,
      method: 'GET'
    },
    customer: {
      href: `/api/v2/users/${order.userId}`,
      method: 'GET'
    }
  };

  // Chỉ cho phép hủy khi đơn hàng đang ở trạng thái pending
  if (order.status === 'pending') {
    links.cancel = {
      href: `${baseHref}/cancellation`,
      method: 'POST'
    };
    links.payment = {
      href: `${baseHref}/payment`,
      method: 'POST'
    };
  }

  // Nếu đơn hàng đã hoàn tất (paid), cho phép xem hóa đơn
  if (order.status === 'paid') {
    links.invoice = {
      href: `${baseHref}/invoice`,
      method: 'GET'
    };
  }

  return links;
}

export default generateOrderLinks;
