import { Description } from "./description";
import { Review } from "./review";

export interface Product {
  _id: string;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category: string;
  discount?: string;
}

export interface ProductFull extends Product {
  reviews: Review[];
  description: Description[];
}
