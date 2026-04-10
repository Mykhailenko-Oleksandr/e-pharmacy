import clsx from "clsx";
import css from "./SubmitButton.module.css";

interface Props {
  text: string;
  register?: boolean;
}

export default function SubmitButton({ text, register }: Props) {
  return (
    <button
      type="submit"
      className={clsx(css.btn, register && css.registerBtn)}
    >
      {text}
    </button>
  );
}
