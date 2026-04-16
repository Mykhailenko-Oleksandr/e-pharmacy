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
import { useAuthStore } from "@/lib/store/authStore";
import ModalLogout from "../ModalLogout/ModalLogout";
import UserNavigation from "../UserNavigation/UserNavigation";

export default function Header() {
  const [logoutModal, setLogoutModal] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated } = useAuthStore();

  return (
    <>
      <header className={clsx(css.header, pathname === "/" && css.green)}>
        <div className={clsx("container", css.headerContainer)}>
          <Logo color={pathname === "/" ? "white" : "green"} />

          <Navigation location="header" />

          {!isAuthenticated && (
            <AuthButtonsBox
              location="header"
              color={pathname === "/" ? "white" : "green"}
            />
          )}

          <div className={css.rightBox}>
            {isAuthenticated && user && (
              <UserNavigation
                user={user}
                orenLogoutModal={() => setLogoutModal(true)}
                homePage={pathname === "/"}
              />
            )}

            <MenuButton
              color={pathname === "/" ? "white" : "green"}
              openMenu={() => setBurgerMenu(true)}
            />
          </div>
        </div>
      </header>

      <BurgerMenu
        isOpen={burgerMenu}
        isAuthenticated={isAuthenticated}
        onClose={() => setBurgerMenu(false)}
        openLogoutModal={() => setLogoutModal(true)}
      />

      {logoutModal && <ModalLogout onClose={() => setLogoutModal(false)} />}
    </>
  );
}
