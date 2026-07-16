import { create } from 'zustand';

export type OrderStatus = 'All' | 'Pending' | 'Shipped' | 'Delivered';

type FilterState = {
  status: OrderStatus;
  keyword: string;
  setStatus: (status: OrderStatus) => void;
  setKeyword: (keyword: string) => void;
};

// Client state duy nhất của bộ lọc. Chuẩn hoá input ngay tại Store.
export const useFilterStore = create<FilterState>((set) => ({
  status: 'All',
  keyword: '',
  setStatus: (status) => set({ status }),
  setKeyword: (keyword) => set({ keyword: keyword.trim() }),
}));
