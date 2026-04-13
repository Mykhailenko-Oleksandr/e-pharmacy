import { FieldError } from "react-hook-form";
import clsx from "clsx";
import css from "./InputField.module.css";

interface InputFieldProps {
  id?: string;
  type?: string;
  placeholder: string;
  error?: FieldError;
  marginBottomUnsetTablet?: boolean;
}

export default function InputField({
  id,
  type = "text",
  placeholder,
  error,
  marginBottomUnsetTablet,

  ...props
}: InputFieldProps) {
  return (
    <div
      className={clsx(
        css.inputBox,
        error && css.inputBoxError,
        marginBottomUnsetTablet && css.marginUnset,
      )}
    >
      <input
        className={clsx(css.input, error && css.inputError)}
        placeholder={placeholder}
        type={type}
        id={id}
        {...props}
      />
      {error && <span className={css.errorMessage}>{error.message}</span>}
    </div>
  );
}
