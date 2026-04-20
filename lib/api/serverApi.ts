import { cookies } from "next/headers";
import { nextServer } from "./api";
import {
  CheckSessionRequest,
  ProductsRequest,
  ProductsResponse,
  StoresRequest,
  StoresResponse,
} from "./clientApi";
import { Review } from "@/types/review";
import { ProductFull } from "@/types/product";

interface ReviewsResponse {
  page: number;
  perPage: number;
  totalReviews: number;
  totalPages: number;
  reviews: Review[];
}

export async function checkSession() {
  const cookieStore = await cookies();
  const res = await nextServer.get<CheckSessionRequest>("/auth/refresh", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
}

export async function getReviews(page?: number, perPage?: number) {
  const cookieStore = await cookies();

  const res = await nextServer.get<ReviewsResponse>("/reviews", {
    params: {
      page,
      perPage,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}

export async function getStores({ page, perPage }: StoresRequest) {
  const cookieStore = await cookies();

  const res = await nextServer.get<StoresResponse>("/stores", {
    params: {
      page,
      perPage,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}

export async function getProducts({
  page,
  perPage,
  search,
  category,
  discount,
}: ProductsRequest) {
  const cookieStore = await cookies();

  const res = await nextServer.get<ProductsResponse>("/products", {
    params: {
      page,
      perPage,
      search,
      category,
      discount,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}

export async function getProductById(id: string) {
  const cookieStore = await cookies();

  const res = await nextServer.get<ProductFull>(`/products/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}
