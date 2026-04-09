import clsx from "clsx";
import css from "./AuthButtonsBox.module.css";
import Link from "next/link";

interface Props {
  location: "header" | "menu";
  color: "green" | "white";
  closeMenu?: () => void;
}

export default function AuthButtonsBox({ location, color, closeMenu }: Props) {
  return (
    <div className={clsx(css.box, location === "header" && css.inHeader)}>
      <Link
        href="/register"
        onClick={closeMenu}
        className={clsx(css.registerLink, color === "green" && css.green)}
      >
        Register
      </Link>
      <Link
        href="/login"
        onClick={closeMenu}
        className={clsx(css.loginLink, color === "green" && css.green)}
      >
        Login
      </Link>
    </div>
  );
}
