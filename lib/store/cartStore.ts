import { Cart } from "@/types/cart";
import { create } from "zustand";

interface CartStore {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
  setQuantity: (value: number, productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()((set) => ({
  cart: [],
  setCart: (cart: Cart[]) => {
    set(() => ({ cart }));
  },
  setQuantity: (value: number, productId: string) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId._id === productId ? { ...item, quantity: value } : item,
      ),
    }));
  },
  clearCart: () => {
    set(() => ({ cart: [] }));
  },
}));
