import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isAxiosError } from "axios";
import { logErrorResponse } from "../_utils/utils";
import { api } from "../api";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const perPage = Number(searchParams.get("perPage")) || 12;
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const discount = Number(searchParams.get("discount")) || "";

    const cookieStore = await cookies();

    const res = await api.get("/products", {
      headers: {
        Cookie: cookieStore.toString(),
      },
      params: {
        page,
        perPage,
        ...(search !== "" && { search }),
        ...(category !== "" && { category }),
        ...(discount !== "" && { discount }),
      },
    });
    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.status },
      );
    }
    logErrorResponse({ message: (error as Error).message });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
