"use client";

import Filter from "@/components/Filter/Filter";
import css from "./Medicine.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import ProductsList from "@/components/ProductsList/ProductsList";
import Pagination from "@/components/Pagination/Pagination";
import ModalLogin from "@/components/ModalLogin/ModalLogin";
import ModalRegister from "@/components/ModalRegister/ModalRegister";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api/clientApi";
import Loader from "@/components/Loader/Loader";

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

  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["products", page, category, search],
    queryFn: () => getProducts({ page, category, search }),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  const totalPages = data?.totalPages ?? 0;

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

          {data && data.products.length > 0 ? (
            <ProductsList
              products={data.products}
              openModalLogin={() => setIsModalLogin(true)}
            />
          ) : (
            <p className={css.textMessage}>Your search returned no results.</p>
          )}

          {isError && (
            <p className={css.textMessage}>
              There was an error, please try again...
            </p>
          )}

          {isLoading && <Loader />}

          {isSuccess && totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              page={page}
              updatePage={setPage}
            />
          )}
        </div>
      </section>

      {isModalLogin && (
        <ModalLogin
          onClose={() => setIsModalLogin(false)}
          openModalRegister={() => setIsModalRegister(true)}
        />
      )}

      {isModalRegister && (
        <ModalRegister
          onClose={() => setIsModalRegister(false)}
          openModalLogin={() => setIsModalLogin(true)}
        />
      )}
    </>
  );
}
