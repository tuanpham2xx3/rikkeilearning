import { useReducer, useState } from 'react';
import { cartReducer, initialCartState, type Course } from '../reducers/cartReducer';

const availableCourses: Course[] = [
  {
    id: 1,
    name: 'React cơ bản',
    price: 1200000,
  },
  {
    id: 2,
    name: 'React TypeScript',
    price: 1500000,
  },
  {
    id: 3,
    name: 'Quản lý State nâng cao',
    price: 1800000,
  },
];

function formatPrice(price: number) {
  return `${price.toLocaleString('vi-VN')} VND`;
}

function CartManager() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const [couponInput, setCouponInput] = useState('');

  return (
    <section className="cart">
      <h1>Giỏ hàng khóa học</h1>

      <div className="layout">
        <section>
          <h2>Khóa học</h2>
          {availableCourses.map((course) => (
            <div className="row" key={course.id}>
              <div>
                <strong>{course.name}</strong>
                <p>{formatPrice(course.price)}</p>
              </div>
              <button onClick={() => dispatch({ type: 'ADD_COURSE', payload: course })}>
                Thêm
              </button>
            </div>
          ))}
        </section>

        <section>
          <h2>Giỏ hàng</h2>
          {cart.courses.length === 0 && <p>Chưa có khóa học nào.</p>}

          {cart.courses.map((course) => (
            <div className="row" key={course.id}>
              <div>
                <strong>{course.name}</strong>
                <p>{formatPrice(course.price)}</p>
              </div>
              <button
                className="danger"
                onClick={() =>
                  dispatch({ type: 'REMOVE_COURSE', payload: { courseId: course.id } })
                }
              >
                Xóa
              </button>
            </div>
          ))}

          <div className="coupon">
            <input
              value={couponInput}
              onChange={(event) => setCouponInput(event.target.value)}
              placeholder="Nhập SALE10 hoặc LEARN20"
            />
            <button
              onClick={() => dispatch({ type: 'APPLY_COUPON', payload: { code: couponInput } })}
            >
              Áp dụng mã
            </button>
          </div>

          {cart.message && <p className="message">{cart.message}</p>}

          <div className="summary">
            <p>Mã giảm giá: {cart.couponCode || 'Chưa áp dụng'}</p>
            <p>Giảm giá: {cart.discountPercent}%</p>
            <h3>Tổng tiền: {formatPrice(cart.total)}</h3>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CartManager;
