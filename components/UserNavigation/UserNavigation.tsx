import Link from "next/link";
import css from "./UserNavigation.module.css";
import { User } from "@/types/user";
import Image from "next/image";
import clsx from "clsx";
import LogoutButton from "../LogoutButton/LogoutButton";

interface Props {
  user: User;
  orenLogoutModal: () => void;
  homePage: boolean;
}

export default function UserNavigation({
  user,
  orenLogoutModal,
  homePage,
}: Props) {
  return (
    <div className={css.box}>
      <div className={clsx(css.linksBox, homePage && css.home)}>
        <div className={css.linkCartBox}>
          <Link
            href="/cart"
            aria-label="Link to your cart"
            className={clsx(css.link, css.cart)}
          >
            <svg width={16} height={16}>
              <use href="/sprite.svg#shopping-cart"></use>
            </svg>
          </Link>

          <div className={css.totalCart}>0</div>
        </div>

        <Link
          href="#"
          aria-label="Link to your profile"
          className={clsx(css.link, css.profile)}
        >
          {user.avatar ? (
            <Image src={user.avatar} alt="Avatar" fill />
          ) : (
            user.name.charAt(0).toUpperCase()
          )}
        </Link>
      </div>

      <div className={css.logoutBox}>
        <LogoutButton color="green" openLogoutModal={orenLogoutModal} />
      </div>
    </div>
  );
}
