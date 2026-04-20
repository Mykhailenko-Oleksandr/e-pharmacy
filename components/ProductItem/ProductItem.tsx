"use client";

import { Product } from "@/types/product";
import css from "./ProductItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/lib/store/authStore";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";
import { ApiError } from "@/app/api/api";
import { updateCart } from "@/lib/api/clientApi";

interface Props {
  product: Product;
  openModalLogin: () => void;
}

export default function ProductItem({ product, openModalLogin }: Props) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setCart = useCartStore((state) => state.setCart);

  async function addProduct() {
    if (!isAuthenticated) {
      openModalLogin();
      return;
    }

    try {
      const cart = await updateCart({
        productId: product._id,
      });
      setCart(cart);

      toast.success("Product successfully added to cart");
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
          src={product.photo}
          alt={product.name}
          fill
          className={css.image}
        />
      </div>
      <div className={css.infoBox}>
        <div className={css.topBox}>
          <h3 className={css.name}>{product.name}</h3>
          <p className={css.price}>&#2547;{Number(product.price).toFixed(2)}</p>
        </div>
        <p className={css.suppliers}>{product.suppliers}</p>
        <div className={css.bottomBox}>
          <button type="button" onClick={addProduct} className={css.btnAdd}>
            Add to cart
          </button>
          <Link href={`/product/${product._id}`} className={css.link}>
            Details
          </Link>
        </div>
      </div>
    </li>
  );
}
