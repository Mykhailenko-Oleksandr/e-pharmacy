import clsx from "clsx";
import css from "./Login.module.css";
import Logo from "@/components/Logo/Logo";
import LoginRegisterTitle from "@/components/LoginRegisterTitle/LoginRegisterTitle";
import FormLogin from "@/components/FormLogin/FormLogin";
import BackgroundIconLines from "@/components/BackgroundIconLines/BackgroundIconLines";

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
