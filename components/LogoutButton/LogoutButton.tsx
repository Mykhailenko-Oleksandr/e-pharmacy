import clsx from "clsx";
import css from "./LogoutButton.module.css";

interface Props {
  color?: "white" | "green";
  openLogoutModal: () => void;
}

export default function LogoutButton({
  color = "green",
  openLogoutModal,
}: Props) {
  return (
    <button
      type="button"
      onClick={openLogoutModal}
      className={clsx(css.btn, color === "white" && css.white)}
    >
      Log out
    </button>
  );
}
