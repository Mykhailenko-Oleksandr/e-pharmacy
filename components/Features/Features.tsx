import css from "./Features.module.css";
import clsx from "clsx";

export default function Features() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <ul className={css.list}>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Take user orders form online</p>
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Create your shop profile</p>
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Manage your store</p>
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Get more orders</p>
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Storage shed</p>
          </li>

          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Take user orders form online</p>
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Create your shop profile</p>
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Manage your store</p>
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Get more orders</p>
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href="/sprite.svg#lightning"></use>
            </svg>
            <p className={css.text}>Storage shed</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
