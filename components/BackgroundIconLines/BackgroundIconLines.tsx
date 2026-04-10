import clsx from "clsx";
import css from "./BackgroundIconLines.module.css";

interface Props {
  size?: "medium" | "large";
  isTop?: boolean;
}

export default function BackgroundIconLines({ size = "medium", isTop }: Props) {
  return (
    <div
      className={clsx(css.box, size === "large" && css.large, isTop && css.top)}
    >
      <svg
        width={size === "large" ? 222 : 167}
        height={size === "large" ? 47 : 35}
        className={clsx(css.icon, css.top)}
      >
        <use href="/sprite.svg#rectangle"></use>
      </svg>
      <svg
        width={size === "large" ? 222 : 167}
        height={size === "large" ? 47 : 35}
        className={clsx(css.icon, css.center)}
      >
        <use href="/sprite.svg#rectangle"></use>
      </svg>
      <svg
        width={size === "large" ? 222 : 167}
        height={size === "large" ? 47 : 35}
        className={clsx(css.icon, css.bottom)}
      >
        <use href="/sprite.svg#rectangle"></use>
      </svg>
    </div>
  );
}
