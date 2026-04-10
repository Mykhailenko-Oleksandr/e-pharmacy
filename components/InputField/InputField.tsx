import { FieldError } from "react-hook-form";
import clsx from "clsx";
import css from "./InputField.module.css";

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  error?: FieldError;
}

export default function InputField({
  type = "text",
  placeholder,
  error,
  ...props
}: InputFieldProps) {
  return (
    <div className={clsx(css.inputBox, error && css.inputBoxError)}>
      <input
        className={clsx(css.input, error && css.inputError)}
        placeholder={placeholder}
        type={type}
        {...props}
      />
      {error && <span className={css.errorMessage}>{error.message}</span>}
    </div>
  );
}
