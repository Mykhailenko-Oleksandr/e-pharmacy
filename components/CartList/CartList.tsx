"use client";

import { Cart } from "@/types/cart";
import css from "./CartList.module.css";
import CartItem from "../CartItem/CartItem";
import { useEffect } from "react";

interface Props {
  cart: Cart[];
  updateTotalPrice: (value: number) => void;
}

export default function CartList({ cart, updateTotalPrice }: Props) {
  useEffect(() => {
    const total = cart.reduce(
      (sum, product) =>
        sum + product.quantity * Number(product.productId.price),
      0,
    );
    updateTotalPrice(total);
  }, [cart, updateTotalPrice]);

  return (
    <ul className={css.list}>
      {cart.map((product) => {
        return <CartItem product={product} key={product._id} />;
      })}
    </ul>
  );
}
