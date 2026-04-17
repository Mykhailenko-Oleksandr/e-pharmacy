"use client";

import { checkSession, getCart, getMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useCartStore } from "@/lib/store/cartStore";
import { ReactNode, useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );
  const setCart = useCartStore((state) => state.setCart);

  useEffect(() => {
    const fetchUser = async () => {
      const isAuthenticated = await checkSession();

      if (isAuthenticated.success) {
        const user = await getMe();
        if (user) setUser(user);
      } else {
        clearIsAuthenticated();
      }
      const cart = await getCart();
      setCart(cart);
    };
    fetchUser();
  }, [setUser, clearIsAuthenticated, setCart]);

  return children;
}
