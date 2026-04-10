import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MedicineClient from "./MedicineClient";

export default function Medicine() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MedicineClient />
    </HydrationBoundary>
  );
}
