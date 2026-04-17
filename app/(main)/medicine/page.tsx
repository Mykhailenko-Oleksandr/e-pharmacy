import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MedicineClient from "./Medicine.client";

import { CATEGORY } from "@/temporaryFiles/category";
import { getProducts } from "@/lib/api/serverApi";

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

  await queryClient.prefetchQuery({
    queryKey: ["products", page, category, search],
    queryFn: () => getProducts({ page, category, search }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MedicineClient categories={CATEGORY} initialSearch={discount} />
    </HydrationBoundary>
  );
}
