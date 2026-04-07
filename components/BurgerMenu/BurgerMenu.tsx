"use client";

import clsx from "clsx";
import css from "./BurgerMenu.module.css";
import { MouseEvent, useEffect } from "react";
import AuthButtonsBox from "../AuthButtonsBox/AuthButtonsBox";
import Navigation from "../Navigation/Navigation";

interface Props {
  isOpen: boolean;
  isAuthenticated: boolean;
  onClose: () => void;
}

export default function BurgerMenu({
  isOpen,
  isAuthenticated,
  onClose,
}: Props) {
  function handleClickBackdrop(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      window.addEventListener("keydown", onEsc);
      document.body.classList.add("noScroll");
    }

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.classList.remove("noScroll");
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1440) onClose();
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  return (
    <div
      className={clsx(css.backdrop, isOpen && css.isOpen)}
      onClick={handleClickBackdrop}
    >
      <div className={css.menu}>
        <button
          className={css.closeBtn}
          type="button"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg width={32} height={32}>
            <use href="/sprite.svg#close"></use>
          </svg>
        </button>

        <Navigation location="menu" />

        <AuthButtonsBox location="menu" color="white" />
      </div>
    </div>
  );
}
