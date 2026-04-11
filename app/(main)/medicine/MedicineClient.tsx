"use client";

import Filter from "@/components/Filter/Filter";
import css from "./Medicine.module.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { PRODUCTS } from "@/temporaryFiles/products";

interface Props {
  categories: string[];
  initialSearch: string;
}

export default function MedicineClient({ categories, initialSearch }: Props) {
  const searchParams = useSearchParams();

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [discount, setDiscount] = useState(
    searchParams.get("discount") || initialSearch,
  );

  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Medicine</h2>

        <Filter
          categories={categories}
          changeCategory={setCategory}
          changeSearch={setSearch}
        />
      </div>
    </section>
  );
}
