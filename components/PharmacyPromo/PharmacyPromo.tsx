import Link from "next/link";
import css from "./PharmacyPromo.module.css";
import clsx from "clsx";

export default function PharmacyPromo() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <div className={css.box}>
          <div className={css.contentBox}>
            <h2 className={css.title}>Add the medicines you need online now</h2>
            <p className={css.description}>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our online
              platform.
            </p>
            <Link href="/medicine-store" className={css.link}>
              Buy medicine
            </Link>
          </div>
          <div className={css.imgBox}>
            <div className={css.ellipse}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
