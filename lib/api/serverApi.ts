import { cookies } from "next/headers";
import { nextServer } from "./api";
import { CheckSessionRequest } from "./clientApi";
import { Review } from "@/types/review";

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
