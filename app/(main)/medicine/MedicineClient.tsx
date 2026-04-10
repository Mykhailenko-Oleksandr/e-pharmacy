"use client";

import Filter from "@/components/Filter/Filter";
import css from "./Medicine.module.css";

import { PRODUCTS } from "@/temporaryFiles/products";

export default function MedicineClient() {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Medicine</h2>

        <Filter />
      </div>
    </section>
  );
}
