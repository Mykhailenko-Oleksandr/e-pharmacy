import Link from "next/link";
import Logo from "../Logo/Logo";
import css from "./Footer.module.css";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={clsx("container", css.container)}>
        <div className={css.topBox}>
          <div className={css.logoDescriptionBox}>
            <Logo color="white-off" />
            <p className={css.description}>
              Get the medicine to help you feel better, get back to your active
              life, and enjoy every moment.
            </p>
          </div>
          <nav className={css.navigation}>
            <Link href="/" className={css.navLink}>
              Home
            </Link>
            <Link href="/medicine-store" className={css.navLink}>
              Medicine store
            </Link>
            <Link href="/medicine" className={css.navLink}>
              Medicine
            </Link>
          </nav>

          <address className={css.address}>
            <Link
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              aria-label="Company's Facebook page link"
              className={css.socLink}
            >
              <svg width={28} height={28}>
                <use href="/sprite.svg#facebook"></use>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              aria-label="Company's Instagram page link"
              className={css.socLink}
            >
              <svg width={28} height={28}>
                <use href="/sprite.svg#instagram"></use>
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              aria-label="Company's Youtube page link"
              className={css.socLink}
            >
              <svg width={28} height={28}>
                <use href="/sprite.svg#youtube"></use>
              </svg>
            </Link>
          </address>
        </div>

        <div className={css.bottomBox}>
          <p className={css.bottomText}>
            &#169; E-Pharmacy 2023. All Rights Reserved
          </p>
          <div className={css.columnLine}></div>
          <Link href="#" className={clsx(css.bottomLink, css.bottomText)}>
            Privacy Policy
          </Link>
          <div className={css.columnLine}></div>
          <Link href="#" className={clsx(css.bottomLink, css.bottomText)}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
