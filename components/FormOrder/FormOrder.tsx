"use client";

import css from "./FormOrder.module.css";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../SubmitButton/SubmitButton";
import InputField from "../InputField/InputField";
import { orderCart } from "@/lib/api/clientApi";
import { ApiError } from "@/app/api/api";
import toast from "react-hot-toast";
import { useCartStore } from "@/lib/store/cartStore";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  payment: "cash" | "bank";
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
    address: yup
      .string()
      .min(5, "Address must be at least 5 characters long")
      .required("Please enter your address"),
    payment: yup.string().oneOf(["cash", "bank"]).default("cash"),
  })
  .required();

interface Props {
  totalPrice: number;
}

export default function FormOrder({ totalPrice }: Props) {
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const order = await orderCart(data);
      clearCart();
      console.log(order);
      toast.success(
        "Your order has been placed successfully! Our team will contact you soon.",
      );
      reset();
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
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Enter shipping info</legend>
        <p className={clsx(css.description, css.first)}>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </p>

        <ul className={css.inputsList}>
          <li className={css.inputsItem}>
            <label htmlFor="name" className={css.inputLabel}>
              Name
            </label>
            <InputField
              id="name"
              placeholder="Enter text"
              error={errors.name}
              {...register("name")}
            />
          </li>
          <li className={css.inputsItem}>
            <label htmlFor="email" className={css.inputLabel}>
              Email
            </label>
            <InputField
              id="email"
              placeholder="Enter text"
              error={errors.email}
              {...register("email")}
            />
          </li>
          <li className={css.inputsItem}>
            <label htmlFor="phone" className={css.inputLabel}>
              Phone
            </label>
            <InputField
              id="phone"
              placeholder="Enter text"
              error={errors.phone}
              {...register("phone")}
            />
          </li>
          <li className={css.inputsItem}>
            <label htmlFor="address" className={css.inputLabel}>
              Address
            </label>
            <InputField
              id="address"
              placeholder="Enter text"
              error={errors.address}
              {...register("address")}
            />
          </li>
        </ul>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Payment method</legend>
        <p className={css.description}>
          You can pay us in a multiple way in our payment gateway system.
        </p>

        <ul className={css.radioList}>
          <li className={css.radioItem}>
            <label className={css.labelRadio}>
              <input
                type="radio"
                value="cash"
                defaultChecked
                className={css.radioBtn}
                {...register("payment")}
              />
              <span className={css.customRadio}></span>
              Cash On Delivery
            </label>
          </li>
          <li className={css.radioItem}>
            <label className={css.labelRadio}>
              <input
                type="radio"
                value="bank"
                className={css.radioBtn}
                {...register("payment")}
              />
              <span className={css.customRadio}></span>
              Bank
            </label>
          </li>
        </ul>
      </fieldset>

      <h3 className={css.legend}>Order details </h3>
      <p className={css.description}>
        Shipping and additionnal costs are calculated based on values you have
        entered.
      </p>
      <div className={css.totalBox}>
        <p className={css.totalText}>Total:</p>
        <p className={css.totalText}>&#2547; {totalPrice.toFixed(2)}</p>
      </div>

      <SubmitButton order text="Place order" />
    </form>
  );
}
