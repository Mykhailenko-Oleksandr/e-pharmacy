"use client";

import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import css from "./Filter.module.css";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  categories: string[];
  changeCategory: (category: string) => void;
  changeSearch: (search: string) => void;
  resetDiscount: () => void;
}

export default function Filter({
  categories,
  changeCategory,
  changeSearch,
  resetDiscount,
}: Props) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  function handleApplyFilters() {
    changeCategory(category);
    changeSearch(search);
    resetDiscount();
  }

  return (
    <div className={css.box}>
      <CustomSelect
        placeholder="Product category"
        onChange={(value) => setCategory(value)}
        values={categories}
      />

      <SearchInput
        placeholder="Search medicine"
        onChange={(value) => setSearch(value)}
      />

      <button type="button" className={css.btn} onClick={handleApplyFilters}>
        <svg width={14} height={14}>
          <use href="/sprite.svg#filter"></use>
        </svg>
        Filter
      </button>
    </div>
  );
}
