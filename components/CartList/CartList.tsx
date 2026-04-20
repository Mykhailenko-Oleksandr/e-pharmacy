import { Cart } from "@/types/cart";
import css from "./CartList.module.css";
import CartItem from "../CartItem/CartItem";

interface Props {
  cart: Cart[];
}

export default function CartList({ cart }: Props) {
  return (
    <ul className={css.list}>
      {cart.map((product) => {
        return <CartItem product={product} key={product._id} />;
      })}
    </ul>
  );
}
