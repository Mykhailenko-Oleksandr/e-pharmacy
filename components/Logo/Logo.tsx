import css from "./Logo.module.css";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  color: "white" | "green" | "white-off";
}

export default function Logo({ color }: Props) {
  return (
    <Link href="/" className={css.link}>
      <Image
        src={
          color === "green"
            ? "/img/logo-green.png"
            : color === "white"
              ? "/img/logo-white.png"
              : "/img/logo-white-off.png"
        }
        alt="Logotype company"
        width={32}
        height={32}
        className={css.logoIcon}
      />
      <span
        className={clsx(
          css.logoText,
          color === "white" && css.white,
          color === "white-off" && css.whiteOff,
        )}
      >
        E-Pharmacy
      </span>
    </Link>
  );
}
