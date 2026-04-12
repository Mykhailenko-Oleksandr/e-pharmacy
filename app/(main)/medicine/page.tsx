import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MedicineClient from "./Medicine.client";

import { CATEGORY } from "@/temporaryFiles/category";

interface Props {
  searchParams: Promise<{ discount?: string }>;
}

export default async function Medicine({ searchParams }: Props) {
  const { discount = "" } = await searchParams;

  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MedicineClient categories={CATEGORY} initialSearch={discount} />
    </HydrationBoundary>
  );
}
