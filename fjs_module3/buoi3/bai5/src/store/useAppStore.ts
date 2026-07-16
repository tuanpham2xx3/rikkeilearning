import { create } from 'zustand';

type AuthSlice = { token: string | null; setToken: (token: string | null) => void };
type UiSlice = { toast: string | null; showToast: (message: string) => void; clearToast: () => void };
export type AppStore = AuthSlice & UiSlice;

export const useAppStore = create<AppStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  toast: null,
  showToast: (toast) => set({ toast }),
  clearToast: () => set({ toast: null }),
}));
