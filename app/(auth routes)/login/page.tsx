import clsx from "clsx";
import css from "./Login.module.css";
import Logo from "@/components/Logo/Logo";
import LoginRegisterTitle from "@/components/LoginRegisterTitle/LoginRegisterTitle";
import FormLogin from "@/components/FormLogin/FormLogin";
import BackgroundIconLines from "@/components/BackgroundIconLines/BackgroundIconLines";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Access your E-Pharmacy account to manage orders, track deliveries, and shop from multiple pharmacies online.",
  openGraph: {
    title: "Login – E-Pharmacy Marketplace",
    description:
      "Sign in to your account to browse pharmacies, order medicines, and enjoy secure shopping with E-Pharmacy.",
    url: "https://e-pharmacy-alpha.vercel.app/login",
  },
};

export default function Login() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <Logo color="green" />
        <div className={css.contentBox}>
          <LoginRegisterTitle />
          <FormLogin />
        </div>
        <BackgroundIconLines size="large" />
      </div>
    </section>
  );
}
