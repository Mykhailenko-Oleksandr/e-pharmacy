import css from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={css.box}>
      <button type="button" className={css.btn}>
        <svg width={14} height={14}>
          <use href="/sprite.svg#filter"></use>
        </svg>
        Filter
      </button>
    </div>
  );
}
