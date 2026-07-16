import { create } from 'zustand'; import type { InventoryItem } from '../api/inventory';
type State = { selectedItem: InventoryItem | null; selectItem: (item: InventoryItem) => void; closeSidebar: () => void };
export const useInventoryStore = create<State>((set) => ({ selectedItem: null, selectItem: (selectedItem) => set({ selectedItem }), closeSidebar: () => set({ selectedItem: null }) }));
