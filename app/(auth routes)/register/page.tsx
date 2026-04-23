import css from "./Register.module.css";
import clsx from "clsx";
import Logo from "@/components/Logo/Logo";
import LoginRegisterTitle from "@/components/LoginRegisterTitle/LoginRegisterTitle";
import FormRegister from "@/components/FormRegister/FormRegister";
import BackgroundIconLines from "@/components/BackgroundIconLines/BackgroundIconLines";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Create your E-Pharmacy account to start shopping from multiple pharmacies, manage orders, and enjoy fast delivery.",
  openGraph: {
    title: "Register – E-Pharmacy Marketplace",
    description:
      "Sign up to access a wide range of medicines and health products from different pharmacies in one place.",
    url: "https://e-pharmacy-alpha.vercel.app/register",
  },
};

export default function Register() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <Logo color="green" />
        <div className={css.contentBox}>
          <LoginRegisterTitle />
          <FormRegister />
        </div>
        <BackgroundIconLines size="large" />
      </div>
    </section>
  );
}
