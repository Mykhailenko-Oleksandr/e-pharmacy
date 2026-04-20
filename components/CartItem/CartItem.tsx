"use client";

import { Cart } from "@/types/cart";
import css from "./CartItem.module.css";
import Image from "next/image";
import { useState } from "react";
import { removeCart } from "@/lib/api/clientApi";
import toast from "react-hot-toast";
import { ApiError } from "@/app/api/api";
import { useCartStore } from "@/lib/store/cartStore";

interface Props {
  product: Cart;
}

export default function CartItem({ product }: Props) {
  const [numberOrder, setNumberOrder] = useState(product.quantity);
  const setCart = useCartStore((state) => state.setCart);

  async function removeProduct() {
    try {
      const cart = await removeCart(product.productId._id);
      setCart(cart);

      toast.success("Product deleted");
    } catch (error: unknown) {
      const err = error as ApiError;

      toast.error(
        err.response?.data?.response?.validation?.body?.message ||
          err.response?.data?.response?.message ||
          err.message,
      );
    }
  }

  return (
    <li className={css.item}>
      <div className={css.imgBox}>
        <Image
          src={product.productId.photo}
          alt="Product"
          fill
          className={css.img}
        />
      </div>
      <div className={css.infoBox}>
        <div className={css.titlePriceBox}>
          <div className={css.titleBox}>
            <h3 className={css.title}>{product.productId.name}</h3>
            <p className={css.suppliers}>{product.productId.suppliers}</p>
          </div>
          <p className={css.price}>
            &#2547; {Number(product.productId.price).toFixed(2)}
          </p>
        </div>

        <div className={css.addProductBox}>
          <div className={css.numberOrderBox}>
            <button
              type="button"
              onClick={() => setNumberOrder(Math.max(1, numberOrder - 1))}
              disabled={numberOrder === 1}
              aria-label="Reduce the quantity of goods"
              className={css.countButton}
            >
              <svg width={18} height={18}>
                <use href="/sprite.svg#minus"></use>
              </svg>
            </button>

            <p className={css.numberOrder}>{numberOrder}</p>

            <button
              type="button"
              onClick={() => setNumberOrder(numberOrder + 1)}
              disabled={numberOrder === Number(product.productId.stock)}
              aria-label="Increase the quantity of goods"
              className={css.countButton}
            >
              <svg width={18} height={18}>
                <use href="/sprite.svg#plus"></use>
              </svg>
            </button>
          </div>

          <button
            type="button"
            onClick={removeProduct}
            className={css.removeBtn}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
