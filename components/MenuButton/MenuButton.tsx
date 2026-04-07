import clsx from "clsx";
import css from "./MenuButton.module.css";

interface Props {
  color: "white" | "green";
  openMenu: () => void;
}

export default function MenuButton({ color, openMenu }: Props) {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className={clsx(css.menuBtn, color === "white" && css.white)}
    >
      <svg width={32} height={26}>
        <use href="/sprite.svg#burger"></use>
      </svg>
    </button>
  );
}
