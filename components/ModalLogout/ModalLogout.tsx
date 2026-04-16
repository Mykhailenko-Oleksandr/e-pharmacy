"use client";

import css from "./ModalLogout.module.css";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import { logoutUser } from "@/lib/api/clientApi";
import { ApiError } from "@/app/api/api";
import toast from "react-hot-toast";
import clsx from "clsx";

interface Props {
  onClose: () => void;
}

export default function ModalLogout({ onClose }: Props) {
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );
  const router = useRouter();

  async function handleLogout() {
    try {
      await logoutUser();
    } catch (error: unknown) {
      const err = error as ApiError;
      toast.error(
        err.response?.data?.response?.validation?.body?.message ||
          err.response?.data?.response?.message ||
          err.message,
      );
    } finally {
      clearIsAuthenticated();
      router.push("/");
      onClose();
    }
  }

  return (
    <Modal onClose={onClose}>
      <h2 className={css.title}>Already leaving?</h2>
      <div className={css.btnsBox}>
        <button
          type="button"
          className={clsx(css.btn, css.btnYes)}
          onClick={handleLogout}
        >
          Yes
        </button>
        <button
          type="button"
          className={clsx(css.btn, css.btnCancel)}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
