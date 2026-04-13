import clsx from "clsx";
import css from "./SubmitButton.module.css";

interface Props {
  text: string;
  register?: boolean;
  order?: boolean;
}

export default function SubmitButton({ text, register, order }: Props) {
  return (
    <button
      type="submit"
      className={clsx(
        css.btn,
        register && css.registerBtn,
        order && css.orderBtn,
      )}
    >
      {text}
    </button>
  );
}
