import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProductClient from "./Product.client";
import { getProductById } from "@/lib/api/serverApi";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Product({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductClient id={id} />
    </HydrationBoundary>
  );
}
