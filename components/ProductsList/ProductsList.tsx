import { Product } from "@/types/product";
import css from "./ProductsList.module.css";
import ProductItem from "../ProductItem/ProductItem";

interface Props {
  products: Product[];
}

export default function ProductsList({ products }: Props) {
  return (
    <ul className={css.list}>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </ul>
  );
}
