"use client";

import Image from "next/image";
import css from "./Product.module.css";

import { useState } from "react";
import ModalLogin from "@/components/ModalLogin/ModalLogin";
import ModalRegister from "@/components/ModalRegister/ModalRegister";
import ProductTags from "@/components/ProductTags/ProductTags";

import clsx from "clsx";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProductById, updateCart } from "@/lib/api/clientApi";
import Loader from "@/components/Loader/Loader";
import { useAuthStore } from "@/lib/store/authStore";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";
import { ApiError } from "@/app/api/api";

interface Props {
  id: string;
}

export default function ProductClient({ id }: Props) {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const [numberOrder, setNumberOrder] = useState(1);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setCart = useCartStore((state) => state.setCart);

  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  async function addProduct() {
    if (!isAuthenticated) {
      setIsModalLogin(true);
      return;
    }

    try {
      const cart = await updateCart({ productId: id, quantity: numberOrder });
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

  if (isLoading) <Loader />;

  return (
    <>
      <section className={css.section}>
        <div className={clsx("container", css.container)}>
          {isError && (
            <p className={css.textMessage}>
              There was an error, please try again...
            </p>
          )}

          {data && isSuccess && (
            <>
              <div className={css.topBox}>
                <div className={css.imgBox}>
                  <Image
                    src={data.photo}
                    alt={data.name}
                    fill
                    sizes="(max-width: 767px) 335px, 364px"
                    className={css.image}
                  />
                </div>

                <div className={css.infoProductBox}>
                  <div className={css.namePriceBox}>
                    <h3 className={css.name}>{data.name}</h3>
                    <p className={css.price}>
                      &#2547;{Number(data.price).toFixed(2)}
                    </p>
                  </div>
                  <p className={css.brand}>Brand: {data.suppliers}</p>

                  <div className={css.addProductBox}>
                    <div className={css.numberOrderBox}>
                      <button
                        type="button"
                        onClick={() =>
                          setNumberOrder(Math.max(1, numberOrder - 1))
                        }
                        disabled={numberOrder === 1}
                        aria-label="Reduce the quantity of goods"
                        className={css.countButton}
                      >
                        <svg width={20} height={20}>
                          <use href="/sprite.svg#minus"></use>
                        </svg>
                      </button>

                      <p className={css.numberOrder}>{numberOrder}</p>

                      <button
                        type="button"
                        onClick={() => setNumberOrder(numberOrder + 1)}
                        disabled={numberOrder === Number(data.stock)}
                        aria-label="Increase the quantity of goods"
                        className={css.countButton}
                      >
                        <svg width={20} height={20}>
                          <use href="/sprite.svg#plus"></use>
                        </svg>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={addProduct}
                      className={css.addToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <ProductTags
                reviews={data.reviews}
                description={data.description}
              />
            </>
          )}
        </div>
      </section>

      {isModalLogin && (
        <ModalLogin
          onClose={() => setIsModalLogin(false)}
          openModalRegister={() => setIsModalRegister(true)}
        />
      )}

      {isModalRegister && (
        <ModalRegister
          onClose={() => setIsModalRegister(false)}
          openModalLogin={() => setIsModalLogin(true)}
        />
      )}
    </>
  );
}
