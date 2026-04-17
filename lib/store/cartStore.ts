import { Cart } from "@/types/cart";
import { create } from "zustand";

interface CartStore {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()((set) => ({
  cart: [],
  setCart: (cart: Cart[]) => {
    set(() => ({ cart }));
  },
  clearCart: () => {
    set(() => ({ cart: [] }));
  },
}));
