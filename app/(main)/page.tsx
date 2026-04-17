import Hero from "@/components/Hero/Hero";
import PromoBanners from "@/components/PromoBanners/PromoBanners";
import MedicineStores from "@/components/MedicineStores/MedicineStores";
import PharmacyPromo from "@/components/PharmacyPromo/PharmacyPromo";
import Features from "@/components/Features/Features";
import Reviews from "@/components/Reviews/Reviews";

import { getReviews, getStores } from "@/lib/api/serverApi";

export default async function Home() {
  const { reviews } = await getReviews();
  const { stores } = await getStores({ perPage: 6 });
  return (
    <>
      <Hero />
      <PromoBanners />
      <MedicineStores stores={stores} />
      <PharmacyPromo />
      <Features />
      <Reviews reviews={reviews} />
    </>
  );
}
