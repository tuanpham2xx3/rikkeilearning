export type Course = {
  id: number;
  name: string;
  price: number;
};

export type CartState = {
  courses: Course[];
  couponCode: string;
  discountPercent: number;
  total: number;
  message: string;
};

export type CartAction =
  | {
      type: 'ADD_COURSE';
      payload: Course;
    }
  | {
      type: 'REMOVE_COURSE';
      payload: {
        courseId: number;
      };
    }
  | {
      type: 'APPLY_COUPON';
      payload: {
        code: string;
      };
    };

const couponDiscounts: Record<string, number> = {
  SALE10: 10,
  LEARN20: 20,
};

function calculateTotal(courses: Course[], discountPercent: number) {
  const subtotal = courses.reduce((sum, course) => sum + course.price, 0);
  return subtotal - (subtotal * discountPercent) / 100;
}

export const initialCartState: CartState = {
  courses: [],
  couponCode: '',
  discountPercent: 0,
  total: 0,
  message: '',
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_COURSE': {
      const existedCourse = state.courses.some((course) => course.id === action.payload.id);

      if (existedCourse) {
        return {
          ...state,
          message: 'Khóa học đã có trong giỏ hàng',
        };
      }

      const nextCourses = [...state.courses, action.payload];

      return {
        ...state,
        courses: nextCourses,
        total: calculateTotal(nextCourses, state.discountPercent),
        message: 'Đã thêm khóa học',
      };
    }

    case 'REMOVE_COURSE': {
      const nextCourses = state.courses.filter((course) => course.id !== action.payload.courseId);

      return {
        ...state,
        courses: nextCourses,
        total: calculateTotal(nextCourses, state.discountPercent),
        message: 'Đã xóa khóa học',
      };
    }

    case 'APPLY_COUPON': {
      const code = action.payload.code.trim().toUpperCase();
      const discountPercent = couponDiscounts[code] ?? 0;

      return {
        ...state,
        couponCode: code,
        discountPercent,
        total: calculateTotal(state.courses, discountPercent),
        message: discountPercent > 0 ? 'Đã áp dụng mã giảm giá' : 'Mã giảm giá không hợp lệ',
      };
    }

    default:
      return state;
  }
}
