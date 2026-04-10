import clsx from "clsx";
import css from "./MedicineStore.module.css";

import { STORES } from "@/temporaryFiles/stores";
import MedicineStoresList from "@/components/MedicineStoresList/MedicineStoresList";

export default function MedicineStore() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <h2 className={css.title}>Medicine store</h2>

        {STORES && STORES.length > 0 ? (
          <MedicineStoresList stores={STORES} />
        ) : (
          <p className={css.noStores}>No medicine stores found in your area</p>
        )}
      </div>
    </section>
  );
}
