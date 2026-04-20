import { User } from "@/types/user";
import { nextServer } from "./api";
import { Cart } from "@/types/cart";
import { Shop } from "@/types/shop";
import { Product, ProductFull } from "@/types/product";

interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export interface CheckSessionRequest {
  success: boolean;
}

interface UpdateCartRequest {
  productId: string;
  quantity?: number;
}

export interface StoresResponse {
  page: number;
  perPage: number;
  totalStores: number;
  totalPages: number;
  stores: Shop[];
}

export interface StoresRequest {
  page?: number;
  perPage?: number;
}

export interface ProductsResponse {
  page: number;
  perPage: number;
  totalProducts: number;
  totalPages: number;
  products: Product[];
}

export interface ProductsRequest {
  page?: number;
  perPage?: number;
  search?: string;
  category?: string;
  discount?: number | string;
}

// Auth

export async function registerUser(data: RegisterRequest) {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
}

export async function logoutUser(): Promise<void> {
  await nextServer.post("/auth/logout");
}

export const loginUser = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

export async function checkSession() {
  const res = await nextServer.get<CheckSessionRequest>("/auth/refresh");
  return res.data;
}

// Users
export async function getMe() {
  const res = await nextServer.get<User>("/users/me");
  return res.data;
}

// Cart
export async function getCart() {
  const res = await nextServer.get<Cart[]>("/cart");
  return res.data;
}

export async function updateCart(body: UpdateCartRequest) {
  const res = await nextServer.put<Cart[]>("/cart/update", body);
  return res.data;
}

// Stores

export async function getStores({ page, perPage }: StoresRequest) {
  const res = await nextServer.get<StoresResponse>("/stores", {
    params: {
      page,
      perPage,
    },
  });
  return res.data;
}

// Products

export async function getProducts({
  page,
  perPage,
  search,
  category,
  discount,
}: ProductsRequest) {
  const res = await nextServer.get<ProductsResponse>("/products", {
    params: {
      page,
      perPage,
      search,
      category,
      discount,
    },
  });
  return res.data;
}

export async function getProductById(id: string) {
  const res = await nextServer.get<ProductFull>(`/products/${id}`);
  return res.data;
}
