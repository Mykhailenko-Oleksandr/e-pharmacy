"use client";

import FormOrder from "@/components/FormOrder/FormOrder";
import css from "./Cart.module.css";
import CartList from "@/components/CartList/CartList";
import { useCartStore } from "@/lib/store/cartStore";
import { useState } from "react";

export default function CartClient() {
  const cart = useCartStore((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Cart</h2>
        <div className={css.contentBox}>
          <FormOrder totalPrice={totalPrice} />

          {cart && cart.length > 0 ? (
            <CartList cart={cart} updateTotalPrice={setTotalPrice} />
          ) : (
            <p className={css.textMessage}>Your horse is empty</p>
          )}
        </div>
      </div>
    </section>
  );
}
