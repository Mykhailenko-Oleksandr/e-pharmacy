import FormOrder from "@/components/FormOrder/FormOrder";
import css from "./Cart.module.css";

export default function Cart() {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Cart</h2>
        <FormOrder />
      </div>
    </section>
  );
}
