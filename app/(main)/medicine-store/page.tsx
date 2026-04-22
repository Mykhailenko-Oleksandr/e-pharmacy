import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MedicineStoreClient from "./MedicineStore.client";
import { getStores } from "@/lib/api/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medicine Store",
  description:
    "Explore multiple pharmacies in one place. Compare offers, browse products, and choose the best option for your needs.",
  openGraph: {
    title: "Medicine Store – E-Pharmacy Marketplace",
    description:
      "Find and compare different pharmacies offering medicines, supplements, and health products in the E-Pharmacy marketplace.",
    url: "https://e-pharmacy-alpha.vercel.app/medicine-store",
  },
};

// Init perPage
const perPage = 9;

export default async function MedicineStore() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["stores", perPage],
    queryFn: ({ pageParam = 1 }) =>
      getStores({
        page: pageParam,
        perPage,
      }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MedicineStoreClient />
    </HydrationBoundary>
  );
}
