import { cookies } from "next/headers";
import { nextServer } from "./api";
import { CheckSessionRequest } from "./clientApi";

export async function checkSession() {
  const cookieStore = await cookies();
  const res = await nextServer.get<CheckSessionRequest>("/auth/refresh", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
}
