import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
}

export interface OrderRecord {
  orderId: string;
  items: Array<{ name: string; qty: number; price: number }>;
  total: number;
  paymentMethod: string;
  affiliateRef?: string;
  createdAt: string;
}

interface UserState {
  profile: UserProfile | null;
  orders: OrderRecord[];
  saveProfile: (p: UserProfile) => void;
  addOrder: (o: OrderRecord) => void;
  clearProfile: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: null,
      orders: [],
      saveProfile: (profile) => set({ profile }),
      addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
      clearProfile: () => set({ profile: null, orders: [] }),
    }),
    { name: 'yabaright-user-db' }
  )
);
