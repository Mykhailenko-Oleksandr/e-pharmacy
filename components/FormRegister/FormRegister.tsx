"use client";

import css from "./FormRegister.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../SubmitButton/SubmitButton";
import Link from "next/link";
import InputField from "../InputField/InputField";
import clsx from "clsx";
import { ApiError } from "@/app/api/api";
import toast from "react-hot-toast";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/api/clientApi";

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

export default function FormRegister() {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

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
      router.replace("/");
    } catch (error: unknown) {
      const err = error as ApiError;

      toast.error(
        err.response?.data?.response?.validation?.body?.message ||
          err.response?.data?.response?.message ||
          err.message,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <fieldset
        className={clsx(
          css.allInputsBox,
          (errors.name || errors.email) && css.allInputsBoxError,
        )}
      >
        <div
          className={clsx(
            css.topInputsBox,
            errors.email && css.emailError,
            errors.name && css.nameError,
          )}
        >
          <InputField
            placeholder="User Name"
            type="text"
            error={errors.name}
            marginBottomUnsetTablet
            {...register("name")}
          />

          <InputField
            placeholder="Email address"
            type="email"
            error={errors.email}
            marginBottomUnsetTablet
            {...register("email")}
          />
        </div>
        <div className={css.bottomInputsBox}>
          <InputField
            placeholder="Phone number"
            type="tel"
            error={errors.phone}
            marginBottomUnsetTablet
            {...register("phone")}
          />
          <InputField
            placeholder="Password"
            type="password"
            error={errors.password}
            marginBottomUnsetTablet
            {...register("password")}
          />
        </div>
      </fieldset>

      <div className={css.bottomBox}>
        <SubmitButton text="Register" register />
        <Link href="/login" className={css.link}>
          Already have an account?
        </Link>
      </div>
    </form>
  );
}
