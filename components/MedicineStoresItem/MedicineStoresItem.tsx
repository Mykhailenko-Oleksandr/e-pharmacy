"use client";

import { Shop } from "@/types/shop";
import css from "./MedicineStoresItem.module.css";
import BackgroundIconLines from "../BackgroundIconLines/BackgroundIconLines";
import clsx from "clsx";
import Ellipsis from "../Ellipsis/Ellipsis";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  store: Shop;
}

export default function MedicineStoresItem({ store }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <li className={css.item}>
      <Link href={`/shop/${store._id}`} className={css.linkCard}>
        <BackgroundIconLines />

        <div className={css.topBox}>
          <h3 className={css.titleItem}>
            <Ellipsis text={store.shopName} length={12} />
          </h3>

          <div className={css.topRightBox}>
            <div className={css.ratingBox}>
              <svg width={16} height={16} className={css.starIcon}>
                <use href="/sprite.svg#star"></use>
              </svg>
              <p className={css.ratingNumber}>{Math.round(store.rating)}</p>
            </div>

            <div className={clsx(css.openCloseBadge, css.open)}>open</div>
          </div>
        </div>
        <div className={css.contactsBox}>
          <svg width={18} height={18} className={css.infoIcon}>
            <use href="/sprite.svg#location"></use>
          </svg>
          <div className={css.addressBox}>
            <p className={css.infoText}>{store.streetAddress}</p>
            <p className={css.infoText}>{store.city}</p>
          </div>
        </div>
        <div className={css.contactsBox}>
          <svg width={18} height={18} className={css.infoIcon}>
            <use href="/sprite.svg#phone"></use>
          </svg>
          <p className={css.infoText}>{store.phone}</p>
        </div>
      </Link>
    </li>
  ) : (
    <li className={css.item}>
      <BackgroundIconLines isTop />

      <h3 className={css.titleItem}>
        <Ellipsis text={store.shopName} length={24} />
      </h3>

      <div className={css.centerBox}>
        <div className={css.contactsBox}>
          <svg width={18} height={18} className={css.infoIcon}>
            <use href="/sprite.svg#location"></use>
          </svg>
          <div className={css.addressBox}>
            <p className={css.infoText}>{store.streetAddress}</p>
            <p className={css.infoText}>{store.city}</p>
          </div>
        </div>
        <div className={css.contactsBox}>
          <svg width={18} height={18} className={css.infoIcon}>
            <use href="/sprite.svg#phone"></use>
          </svg>
          <p className={css.infoText}>{store.phone}</p>
        </div>
      </div>

      <div className={css.bottomBox}>
        <Link href={`/shop/${store._id}`} className={css.link}>
          Visit Store
        </Link>

        <div className={css.topRightBox}>
          <div className={css.ratingBox}>
            <svg width={16} height={16} className={css.starIcon}>
              <use href="/sprite.svg#star"></use>
            </svg>
            <p className={css.ratingNumber}>{Math.round(store.rating)}</p>
          </div>

          <div className={clsx(css.openCloseBadge, css.open)}>open</div>
        </div>
      </div>
    </li>
  );
}
