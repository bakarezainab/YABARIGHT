import { create } from 'zustand';
import { CartItem, Product } from '@/types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;

  // Actions
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotal: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  itemCount: 0,

  addItem: (product: Product, quantity: number) => {
    const { items } = get();
    const existingItem = items.find((item) => item.productId === product.id);

    if (existingItem) {
      // Update quantity if item already exists
      const updatedItems = items.map((item) =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      set({ items: updatedItems });
    } else {
      // Add new item
      const newItem: CartItem = {
        id: Math.random().toString(36).substr(2, 9),
        userId: '', // Will be set from auth store
        productId: product.id,
        quantity,
        product,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      set({ items: [...items, newItem] });
    }

    // Recalculate total
    get().calculateTotal();
  },

  removeItem: (productId: string) => {
    const { items } = get();
    const updatedItems = items.filter((item) => item.productId !== productId);
    set({ items: updatedItems });
    get().calculateTotal();
  },

  updateQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }

    const { items } = get();
    const updatedItems = items.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );
    set({ items: updatedItems });
    get().calculateTotal();
  },

  clearCart: () => {
    set({ items: [], total: 0, itemCount: 0 });
  },

  calculateTotal: () => {
    const { items } = get();
    const total = items.reduce((sum, item) => {
      return sum + (item.product?.price || 0) * item.quantity;
    }, 0);

    const itemCount = items.reduce((count, item) => count + item.quantity, 0);

    set({ total, itemCount });
  },
}));
