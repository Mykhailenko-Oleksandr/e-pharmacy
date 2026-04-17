"use client";

import css from "./MedicineStore.module.css";
import clsx from "clsx";
import MedicineStoresList from "@/components/MedicineStoresList/MedicineStoresList";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton";
import Loader from "@/components/Loader/Loader";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getStores } from "@/lib/api/clientApi";
import { Shop } from "@/types/shop";

export default function MedicineStoreClient() {
  const [perPage, setPerPage] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1440) {
        setPerPage(9);
      } else {
        setPerPage(8);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setPerPage]);

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      enabled: perPage !== null,
      queryKey: ["stores", perPage],
      queryFn: ({ pageParam = 1 }) =>
        getStores({
          page: pageParam,
          perPage: perPage!,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) =>
        pages.length < lastPage.totalPages ? pages.length + 1 : undefined,
    });

  const stores: Shop[] = data?.pages.flatMap((page) => page.stores) ?? [];
  console.log("stores", data);

  const handleLoadMore = () => {
    const currentScrollPosition = window.pageYOffset;

    fetchNextPage().then(() => {
      setTimeout(() => {
        window.scrollTo({
          top: currentScrollPosition + 400,
          behavior: "smooth",
        });
      }, 100);
    });
  };

  if (perPage === null) {
    return <Loader />;
  }

  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <h2 className={css.title}>Medicine store</h2>

        {isLoading && <Loader />}

        {!isLoading && stores && stores.length > 0 ? (
          <MedicineStoresList stores={stores} />
        ) : (
          <p className={css.noStores}>No medicine stores found in your area</p>
        )}

        {isFetching && <Loader />}

        {hasNextPage && (
          <LoadMoreButton
            onClick={handleLoadMore}
            disabled={isFetching}
            loading={isFetching}
          />
        )}
      </div>
    </section>
  );
}
