export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export interface Coupons {
  birthday: boolean;
  halfprice: boolean;
  apples: boolean;
}
