import { Product } from "@/types/product";
import css from "./ProductItem.module.css";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
  openModalLogin: () => void;
}

export default function ProductItem({ product, openModalLogin }: Props) {
  function addProduct() {
    console.log(product._id);
    openModalLogin();
  }

  return (
    <li className={css.item}>
      <div className={css.imgBox}>
        <Image
          src={product.photo}
          alt={product.name}
          fill
          className={css.image}
        />
      </div>
      <div className={css.infoBox}>
        <div className={css.topBox}>
          <h3 className={css.name}>{product.name}</h3>
          <p className={css.price}>&#2547;{Number(product.price).toFixed(2)}</p>
        </div>
        <p className={css.suppliers}>{product.suppliers}</p>
        <div className={css.bottomBox}>
          <button type="button" onClick={addProduct} className={css.btnAdd}>
            Add to cart
          </button>
          <Link href={`/product/${product._id}`} className={css.link}>
            Details
          </Link>
        </div>
      </div>
    </li>
  );
}
