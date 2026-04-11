"use client";

import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import css from "./Filter.module.css";

interface Props {
  categories: string[];
  changeCategory: (category: string) => void;
}

export default function Filter({ categories, changeCategory }: Props) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  function handleApplyFilters() {
    changeCategory(category);
  }

  return (
    <div className={css.box}>
      <CustomSelect
        placeholder="Product category"
        onChange={(value) => setCategory(value)}
        values={categories}
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
