import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MedicineClient from "./Medicine.client";

import { getCategories, getProducts } from "@/lib/api/serverApi";

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
