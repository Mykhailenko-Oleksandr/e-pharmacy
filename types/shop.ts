export interface Shop {
  _id: string;
  shopName: string;
  ownerName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  postal: number;
  hasOwnDeliverySystem: boolean;
  rating: number;
}
