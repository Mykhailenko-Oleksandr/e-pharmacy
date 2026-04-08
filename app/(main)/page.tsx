import Hero from "@/components/Hero/Hero";
import css from "./Home.module.css";
import PromoBanners from "@/components/PromoBanners/PromoBanners";
import MedicineStores from "@/components/MedicineStores/MedicineStores";

import { STORES } from "../../temporaryFiles/stores";

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBanners />
      <MedicineStores stores={STORES} />
    </>
  );
}
