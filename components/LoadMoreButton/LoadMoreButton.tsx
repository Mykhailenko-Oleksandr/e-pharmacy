"use client";

import css from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function LoadMoreButton({
  onClick,
  disabled = false,
  loading = false,
}: LoadMoreButtonProps) {
  return (
    <button
      type="button"
      className={css.btn}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? "Loading..." : "Load more"}
    </button>
  );
}
