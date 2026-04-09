import clsx from "clsx";
import css from "./Register.module.css";
import Logo from "@/components/Logo/Logo";
import LoginRegisterTitle from "@/components/LoginRegisterTitle/LoginRegisterTitle";

export default function Register() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <Logo color="green" />
        <div className={css.contentBox}>
          <LoginRegisterTitle />
        </div>
      </div>
    </section>
  );
}
