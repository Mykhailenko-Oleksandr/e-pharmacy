import clsx from "clsx";
import css from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.heroContainer)}>
        <h1 className={css.title}>Your medication delivered</h1>
        <p className={css.text}>
          Say goodbye to all your healthcare worries with us
        </p>

        <Image
          src="/img/hero/hero.png"
          alt="Pills"
          width={960}
          height={679}
          sizes="(max-width: 768px) 591px, 960px"
          loading="eager"
          className={css.img}
        />
      </div>
    </section>
  );
}
