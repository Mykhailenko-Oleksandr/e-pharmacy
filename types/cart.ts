import { Product } from "./product";

export interface Cart {
  _id: string;
  quantity: number;
  productId: Product;
}
