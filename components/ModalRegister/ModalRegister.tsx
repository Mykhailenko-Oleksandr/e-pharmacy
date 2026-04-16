import Modal from "../Modal/Modal";
import css from "./ModalRegister.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../SubmitButton/SubmitButton";
import InputField from "../InputField/InputField";
import { registerUser } from "@/lib/api/clientApi";
import { ApiError } from "@/app/api/api";
import toast from "react-hot-toast";
import { useAuthStore } from "@/lib/store/authStore";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters long")
      .required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^\+?[0-9]{7,15}$/, "Please enter a valid phone number")
      .required("Phone number is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters long")
      .required("Password is required"),
  })
  .required();

interface Props {
  onClose: () => void;
  openModalLogin: () => void;
}

export default function ModalRegister({ onClose, openModalLogin }: Props) {
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const user = await registerUser(data);
      setUser(user);
      onClose();
    } catch (error: unknown) {
      const err = error as ApiError;

      toast.error(
        err.response?.data?.response?.validation?.body?.message ||
          err.response?.data?.response?.message ||
          err.message,
      );
    }
  };

  function handleLoginBtn() {
    onClose();
    openModalLogin();
  }

  return (
    <Modal onClose={onClose}>
      <h2 className={css.title}>Sign Up</h2>
      <p className={css.description}>
        Before proceeding, please register on our site.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <fieldset className={css.inputsBox}>
          <InputField
            placeholder="User Name"
            type="text"
            error={errors.name}
            {...register("name")}
          />

          <InputField
            placeholder="Email address"
            type="email"
            error={errors.email}
            {...register("email")}
          />

          <InputField
            placeholder="Phone number"
            type="tel"
            error={errors.phone}
            {...register("phone")}
          />
          <InputField
            placeholder="Password"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </fieldset>

        <SubmitButton text="Sign Up" />
        <button
          type="button"
          onClick={handleLoginBtn}
          className={css.bottomBtn}
        >
          Already have an account?
        </button>
      </form>
    </Modal>
  );
}
