"use client";

import Image from "next/image";
import css from "./Product.module.css";

import { useState } from "react";
import ModalLogin from "@/components/ModalLogin/ModalLogin";
import ModalRegister from "@/components/ModalRegister/ModalRegister";
import ProductTags from "@/components/ProductTags/ProductTags";

import { PRODUCTS_FULL } from "@/temporaryFiles/productFull";
import clsx from "clsx";

interface Props {
  id: string;
}

export default function ProductClient({ id }: Props) {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const [numberOrder, setNumberOrder] = useState(1);

  function addProduct() {
    console.log(PRODUCTS_FULL._id);
    setIsModalLogin(true);
  }

  return (
    <>
      <section className={css.section}>
        <div className={clsx("container", css.container)}>
          <div className={css.topBox}>
            <div className={css.imgBox}>
              <Image
                src={PRODUCTS_FULL.photo}
                alt={PRODUCTS_FULL.name}
                fill
                sizes="(max-width: 767px) 335px, 364px"
                className={css.image}
              />
            </div>

            <div className={css.infoProductBox}>
              <div className={css.namePriceBox}>
                <h3 className={css.name}>{PRODUCTS_FULL.name}</h3>
                <p className={css.price}>
                  &#2547;{Number(PRODUCTS_FULL.price).toFixed(2)}
                </p>
              </div>
              <p className={css.brand}>Brand: {PRODUCTS_FULL.suppliers}</p>

              <div className={css.addProductBox}>
                <div className={css.numberOrderBox}>
                  <button
                    type="button"
                    onClick={() => setNumberOrder(Math.max(1, numberOrder - 1))}
                    disabled={numberOrder === 1}
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
                    disabled={numberOrder === Number(PRODUCTS_FULL.stock)}
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
            reviews={PRODUCTS_FULL.reviews}
            description={PRODUCTS_FULL.description}
          />
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
