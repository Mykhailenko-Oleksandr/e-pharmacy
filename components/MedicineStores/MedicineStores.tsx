import { Shop } from "@/types/shop";
import css from "./MedicineStores.module.css";
import clsx from "clsx";
import Ellipsis from "../Ellipsis/Ellipsis";
import Link from "next/link";
import BackgroundIconLines from "../BackgroundIconLines/BackgroundIconLines";

interface Props {
  stores: Shop[];
}

export default function MedicineStores({ stores }: Props) {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <h2 className={css.title}>Your Nearest Medicine Store</h2>
        <p className={css.description}>
          Search for Medicine, Filter by your location
        </p>

        {stores.length > 0 ? (
          <ul className={css.list}>
            {stores.map((store) => {
              return (
                <li className={css.item} key={store._id}>
                  <Link href="#" className={css.link}>
                    <BackgroundIconLines />

                    <div className={css.topBox}>
                      <h3 className={css.titleItem}>
                        <Ellipsis text={store.name} length={12} />
                      </h3>

                      <div className={css.topRightBox}>
                        <div className={css.ratingBox}>
                          <svg width={16} height={16} className={css.starIcon}>
                            <use href="/sprite.svg#star"></use>
                          </svg>
                          <p className={css.ratingNumber}>
                            {Math.round(store.rating)}
                          </p>
                        </div>

                        <div className={clsx(css.openCloseBadge, css.open)}>
                          open
                        </div>
                      </div>
                    </div>
                    <div className={css.contactsBox}>
                      <svg width={18} height={18} className={css.infoIcon}>
                        <use href="/sprite.svg#location"></use>
                      </svg>
                      <div className={css.addressBox}>
                        <p className={css.infoText}>{store.address}</p>
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
              );
            })}
          </ul>
        ) : (
          <p className={css.massageText}>Stores not found</p>
        )}
      </div>
    </section>
  );
}
