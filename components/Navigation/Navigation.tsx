"use client";

import Link from "next/link";
import css from "./Navigation.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Props {
  location: "header" | "menu";
}

export default function Navigation({ location }: Props) {
  const pathname = usePathname();

  return (
    <nav className={clsx(location === "header" && css.inHeader)}>
      <ul className={css.list}>
        <li className={css.item}>
          <Link
            href="/"
            className={clsx(css.link, pathname === "/" && css.currentPage)}
          >
            Home
          </Link>
        </li>
        <li className={css.item}>
          <Link
            href="/medicine-store"
            className={clsx(
              css.link,
              pathname === "/medicine-store" && css.currentPage,
            )}
          >
            Medicine store
          </Link>
        </li>
        <li className={css.item}>
          <Link
            href="/medicine "
            className={clsx(
              css.link,
              pathname === "/medicine" && css.currentPage,
            )}
          >
            Medicine
          </Link>
        </li>
      </ul>
    </nav>
  );
}
