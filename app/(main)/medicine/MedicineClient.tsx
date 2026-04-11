"use client";

import Filter from "@/components/Filter/Filter";
import css from "./Medicine.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { PRODUCTS } from "@/temporaryFiles/products";
import ProductsList from "@/components/ProductsList/ProductsList";
import Pagination from "@/components/Pagination/Pagination";

interface Props {
  categories: string[];
  initialSearch: string;
}

export default function MedicineClient({ categories, initialSearch }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [discount, setDiscount] = useState(
    searchParams.get("discount") || initialSearch,
  );
  const [page, setPage] = useState(1);
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <>
      <section className={css.section}>
        <div className="container">
          <h2 className={css.title}>Medicine</h2>

          <Filter
            categories={categories}
            changeCategory={setCategory}
            changeSearch={setSearch}
            resetDiscount={() => {
              setDiscount("");
              const params = new URLSearchParams(searchParams.toString());
              params.delete("discount");
              router.replace(`/medicine?${params.toString()}`);
            }}
          />

          <ProductsList products={PRODUCTS} />

          <Pagination totalPages={5} page={page} updatePage={setPage} />
        </div>
      </section>

      {/* {isModalRegister &&} */}
    </>
  );
}
