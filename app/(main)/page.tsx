import Hero from "@/components/Hero/Hero";
import PromoBanners from "@/components/PromoBanners/PromoBanners";
import MedicineStores from "@/components/MedicineStores/MedicineStores";
import PharmacyPromo from "@/components/PharmacyPromo/PharmacyPromo";
import Features from "@/components/Features/Features";
import Reviews from "@/components/Reviews/Reviews";

import { STORES } from "../../temporaryFiles/stores";
import { getReviews } from "@/lib/api/serverApi";

export default async function Home() {
  const { reviews } = await getReviews();

  return (
    <>
      <Hero />
      <PromoBanners />
      <MedicineStores stores={STORES} />
      <PharmacyPromo />
      <Features />
      <Reviews reviews={reviews} />
    </>
  );
}
