import Hero from "@/components/Hero/Hero";
import PromoBanners from "@/components/PromoBanners/PromoBanners";
import MedicineStores from "@/components/MedicineStores/MedicineStores";
import PharmacyPromo from "@/components/PharmacyPromo/PharmacyPromo";

import { STORES } from "../../temporaryFiles/stores";

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBanners />
      <MedicineStores stores={STORES} />
      <PharmacyPromo />
    </>
  );
}
