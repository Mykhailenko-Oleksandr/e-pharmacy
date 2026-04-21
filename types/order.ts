interface OrderProduct {
  productId: string;
  quantity: number;
  _id: string;
}

export interface Order {
  name: string;
  address: string;
  products: OrderProduct[];
  price: number;
  status: string;
  _id: string;
  order_date: string;
}
