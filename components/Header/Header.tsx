"use client";

import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import MenuButton from "../MenuButton/MenuButton";
import { useState } from "react";
import clsx from "clsx";
import AuthButtonsBox from "../AuthButtonsBox/AuthButtonsBox";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={clsx(css.header, pathname === "/" && css.green)}>
        <div className={clsx("container", css.headerContainer)}>
          <Logo color={pathname === "/" ? "white" : "green"} />

          <Navigation location="header" />

          <AuthButtonsBox
            location="header"
            color={pathname === "/" ? "white" : "green"}
          />

          <MenuButton
            color={pathname === "/" ? "white" : "green"}
            openMenu={() => setBurgerMenu(true)}
          />
        </div>
      </header>

      <BurgerMenu
        isOpen={burgerMenu}
        isAuthenticated={false}
        onClose={() => setBurgerMenu(false)}
      />
    </>
  );
}
