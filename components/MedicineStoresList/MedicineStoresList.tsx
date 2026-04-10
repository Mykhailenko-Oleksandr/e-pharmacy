import { Shop } from "@/types/shop";
import css from "./MedicineStoresList.module.css";
import MedicineStoresItem from "../MedicineStoresItem/MedicineStoresItem";

interface Props {
  stores: Shop[];
}

export default function MedicineStoresList({ stores }: Props) {
  return (
    <ul className={css.list}>
      {stores.map((store) => {
        return <MedicineStoresItem key={store._id} store={store} />;
      })}
    </ul>
  );
}
