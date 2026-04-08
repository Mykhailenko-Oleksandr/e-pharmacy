import clsx from "clsx";
import css from "./PromoBanners.module.css";
import Link from "next/link";

export default function PromoBanners() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.topBox}>
              <div className={css.countBox}>1</div>
              <h3 className={css.title}>Huge Sale</h3>
            </div>

            <div className={css.bottomBox}>
              <p className={css.discountInterest}>70%</p>
              <Link href="/medicine?discount=70" className={css.link}>
                Shop now
              </Link>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.topBox}>
              <div className={css.countBox}>2</div>
              <h3 className={css.title}>Secure delivery</h3>
            </div>

            <div className={clsx(css.bottomBox, css.centerItem)}>
              <p className={css.discountInterest}>100%</p>
              <Link href="/feature" className={css.link}>
                Read more
              </Link>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.topBox}>
              <div className={css.countBox}>3</div>
              <h3 className={css.title}>Off</h3>
            </div>

            <div className={css.bottomBox}>
              <p className={css.discountInterest}>35%</p>
              <Link href="/medicine?discount=35" className={css.link}>
                Shop now
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
