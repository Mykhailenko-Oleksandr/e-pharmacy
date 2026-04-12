import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProductClient from "./Product.client";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Product({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductClient id={id} />
    </HydrationBoundary>
  );
}
