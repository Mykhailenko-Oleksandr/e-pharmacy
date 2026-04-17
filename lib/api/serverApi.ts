import { cookies } from "next/headers";
import { nextServer } from "./api";
import { CheckSessionRequest } from "./clientApi";
import { Review } from "@/types/review";
import { Shop } from "@/types/shop";

interface ReviewsResponse {
  page: number;
  perPage: number;
  totalReviews: number;
  totalPages: number;
  reviews: Review[];
}

interface StoresResponse {
  page: number;
  perPage: number;
  totalStores: number;
  totalPages: number;
  stores: Shop[];
}

interface StoresRequest {
  page?: number;
  perPage?: number;
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

// Reviews

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

// Stores

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
