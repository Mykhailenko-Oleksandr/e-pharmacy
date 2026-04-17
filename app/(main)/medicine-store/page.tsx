import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MedicineStoreClient from "./MedicineStore.client";
import { getStores } from "@/lib/api/serverApi";

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
