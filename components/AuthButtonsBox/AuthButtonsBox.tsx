import clsx from "clsx";
import css from "./AuthButtonsBox.module.css";
import Link from "next/link";

interface Props {
  location: "header" | "menu";
  color: "green" | "white";
}

export default function AuthButtonsBox({ location, color }: Props) {
  return (
    <div className={clsx(css.box, location === "header" && css.inHeader)}>
      <Link
        href="/register"
        className={clsx(css.registerLink, color === "green" && css.green)}
      >
        Register
      </Link>
      <Link
        href="/login"
        className={clsx(css.loginLink, color === "green" && css.green)}
      >
        Login
      </Link>
    </div>
  );
}
