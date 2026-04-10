import css from "./Register.module.css";
import clsx from "clsx";
import Logo from "@/components/Logo/Logo";
import LoginRegisterTitle from "@/components/LoginRegisterTitle/LoginRegisterTitle";
import FormRegister from "@/components/FormRegister/FormRegister";

export default function Register() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <Logo color="green" />
        <div className={css.contentBox}>
          <LoginRegisterTitle />
          <FormRegister />
        </div>
      </div>
    </section>
  );
}
