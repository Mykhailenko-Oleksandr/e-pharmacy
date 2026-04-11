import css from "./SearchInput.module.css";

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ placeholder, onChange }: Props) {
  return (
    <div className={css.box}>
      <input
        type="text"
        placeholder={placeholder}
        className={css.input}
        onChange={(e) => onChange(e.target.value)}
      />
      <svg width={16} height={16}>
        <use href="/sprite.svg#search"></use>
      </svg>
    </div>
  );
}
