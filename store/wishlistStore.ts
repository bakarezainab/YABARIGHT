import { create } from 'zustand';
import { Product } from '@/types';

interface WishlistState {
  items: string[];
  itemCount: number;
  toggleItem: (productId: string) => void;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  items: [],
  itemCount: 0,

  toggleItem: (productId: string) =>
    set((state) => {
      const exists = state.items.includes(productId);
      const items = exists
        ? state.items.filter((id) => id !== productId)
        : [...state.items, productId];

      return {
        items,
        itemCount: items.length,
      };
    }),

  addItem: (product: Product) =>
    set((state) => {
      if (state.items.includes(product.id)) {
        return state;
      }

      const items = [...state.items, product.id];
      return {
        items,
        itemCount: items.length,
      };
    }),

  removeItem: (productId: string) =>
    set((state) => {
      const items = state.items.filter((id) => id !== productId);
      return {
        items,
        itemCount: items.length,
      };
    }),

  clearWishlist: () => set({ items: [], itemCount: 0 }),
}));
