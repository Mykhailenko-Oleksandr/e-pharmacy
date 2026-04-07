"use client";

import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import MenuButton from "../MenuButton/MenuButton";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className={clsx(css.header, pathname === "/" && css.green)}>
      <div className={clsx("container", css.headerContainer)}>
        <Logo color={pathname === "/" ? "white" : "green"} />
        <MenuButton
          color={pathname === "/" ? "white" : "green"}
          openMenu={() => setBurgerMenu(true)}
        />
      </div>
    </header>
  );
}
