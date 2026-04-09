import Image from "next/image";
import css from "./LoginRegisterTitle.module.css";

export default function LoginRegisterTitle() {
  return (
    <div className={css.box}>
      <h2 className={css.title}>
        Your medication, delivered Say goodbye to all{" "}
        <span>your healthcare</span> worries with us
      </h2>

      <Image
        src="/img/pill.png"
        alt="Pill"
        width={179}
        height={175}
        sizes="(max-width: 767px) 95px, 179px"
        loading="eager"
        className={css.img}
      />
    </div>
  );
}
