import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MedicineClient from "./Medicine.client";
import { getCategories, getProducts } from "@/lib/api/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medicine",
  description:
    "Browse a wide range of medicines and healthcare products offered by multiple pharmacies in one place. Compare options, check availability, and order online with fast delivery.",
  openGraph: {
    title: "Medicine – E-Pharmacy Marketplace",
    description:
      "Discover medicines, supplements, and healthcare essentials from different pharmacies. Shop securely and conveniently with E-Pharmacy.",
    url: "https://e-pharmacy-alpha.vercel.app/medicine",
  },
};

interface Props {
  searchParams: Promise<{ discount?: string }>;
}

// Init params
const page = 1;
const category = "";
const search = "";

export default async function Medicine({ searchParams }: Props) {
  const { discount = "" } = await searchParams;

  const queryClient = new QueryClient();

  const categories = await getCategories();

  await queryClient.prefetchQuery({
    queryKey: ["products", page, category, search, discount],
    queryFn: () => getProducts({ page, category, search, discount }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MedicineClient categories={categories} initialSearch={discount} />
    </HydrationBoundary>
  );
}
