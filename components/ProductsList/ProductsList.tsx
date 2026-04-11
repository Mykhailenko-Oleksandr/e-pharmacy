import { Product } from "@/types/product";
import css from "./ProductsList.module.css";
import ProductItem from "../ProductItem/ProductItem";

interface Props {
  products: Product[];
  openModalLogin: () => void;
}

export default function ProductsList({ products, openModalLogin }: Props) {
  return (
    <ul className={css.list}>
      {products.map((product) => (
        <ProductItem
          key={product._id}
          product={product}
          openModalLogin={openModalLogin}
        />
      ))}
    </ul>
  );
}
