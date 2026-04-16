"use client";

import Modal from "../Modal/Modal";
import css from "./ModalLogin.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../SubmitButton/SubmitButton";
import InputField from "../InputField/InputField";
import clsx from "clsx";
import { loginUser } from "@/lib/api/clientApi";
import { ApiError } from "@/app/api/api";
import toast from "react-hot-toast";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters long")
      .required("Password is required"),
  })
  .required();

interface Props {
  onClose: () => void;
  openModalRegister: () => void;
}

export default function ModalLogin({ onClose, openModalRegister }: Props) {
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
      const user = await loginUser(data);
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

  function handleRegisterBtn() {
    onClose();
    openModalRegister();
  }

  return (
    <Modal onClose={onClose}>
      <h2 className={css.title}>Log in to your account</h2>
      <p className={css.description}>
        Please login to your account before continuing.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <fieldset
          className={clsx(css.inputsBox, errors.email && css.inputsBoxError)}
        >
          <InputField
            placeholder="Email address"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          <InputField
            placeholder="Password"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </fieldset>

        <SubmitButton text="Log in" />

        <button
          type="button"
          onClick={handleRegisterBtn}
          className={css.bottomBtn}
        >
          Don&apos;t have an account?
        </button>
      </form>
    </Modal>
  );
}
