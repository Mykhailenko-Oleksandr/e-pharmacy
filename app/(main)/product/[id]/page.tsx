import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProductClient from "./Product.client";
import { getProductById } from "@/lib/api/serverApi";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  return {
    title: product.name,
    description:
      "View detailed information about this medicine or health product. Compare offers from multiple pharmacies and order online with fast delivery.",
    openGraph: {
      title: product.name,
      description:
        "View detailed information about this medicine or health product. Compare offers from multiple pharmacies and order online with fast delivery.",
      url: `https://e-pharmacy-alpha.vercel.app/product/${id}`,
      images: [
        {
          url: product.photo
            ? product.photo
            : "https://e-pharmacy-alpha.vercel.app/hero.png",
        },
      ],
    },
  };
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
