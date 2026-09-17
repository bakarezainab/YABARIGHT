'use client';

import { useToastStore } from '@/store/toastStore';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      {toasts.map((toast) => {
        return (
          <div
            key={toast.id}
            className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#111111] px-4 py-3 text-white shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-5"
          >
            {toast.type === 'error' ? (
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
            ) : toast.type === 'info' ? (
              <Info className="h-5 w-5 flex-shrink-0 text-blue-400" />
            ) : (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#FFD700]" />
            )}
            <p className="text-sm font-semibold">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
