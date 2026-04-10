"use client";

import css from "./FormLogin.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../SubmitButton/SubmitButton";
import Link from "next/link";
import InputField from "../InputField/InputField";
import clsx from "clsx";

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

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
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

      <div className={css.bottomBox}>
        <SubmitButton text="Log in" register />
        <Link href="/register" className={css.link}>
          Don&apos;t have an account?
        </Link>
      </div>
    </form>
  );
}
