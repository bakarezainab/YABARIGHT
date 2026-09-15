import { create } from 'zustand';
import { User, AuthResponse } from '@/types';
import api from '@/lib/api';

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  clearError: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post<AuthResponse>('/auth/login', {
        email,
        password,
      });
      const { user, token } = response.data;
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Login failed';
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw error;
    }
  },

  register: async (name: string, email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post<AuthResponse>('/auth/register', {
        name,
        email,
        password,
      });
      const { user, token } = response.data;

      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Registration failed';
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  updateProfile: async (data: Partial<User>) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.put<User>('/auth/profile', data);
      localStorage.setItem('user', JSON.stringify(response.data));
      set({
        user: response.data,
        isLoading: false,
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Update failed';
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw error;
    }
  },

  clearError: () => set({ error: null }),

  setUser: (user: User) => set({ user }),
}));
