"use client";

import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className="container">
        <Logo color={pathname === "/" ? "green" : "white"} />
      </div>
    </header>
  );
}
