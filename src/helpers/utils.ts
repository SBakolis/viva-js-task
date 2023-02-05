import { Cart, CartItem } from "../types";

export function toCartItem(item: any) {
  const cartItem: CartItem = {
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  };
  return cartItem;
}

export function getCartTotal(cart: Cart, coupon: String) {
  const originalPrice: number = cart.items.reduce(
    (a: number, b: CartItem) => a + b.quantity * b.price,
    0
  );
  let discountPrice: number = 0;

  switch (coupon) {
    case "HAPPYBIRTHDAY":
      discountPrice = originalPrice * 0.8;
      break;
    case "50OFF":
      discountPrice = originalPrice * 0.5;
      break;
    case "ILIKEAPPLES":
      discountPrice = cart.items.reduce(
        (a: number, b: CartItem) =>
          a +
          (b.id === "d65d349b-2a77-4fdb-9d7a-0ab85eb84fd1"
            ? b.quantity * b.price * 0.4
            : b.quantity * b.price),
        0
      );
      break;
    default:
      discountPrice = originalPrice;
  }
  return [originalPrice, Number(discountPrice.toFixed(2))];
}
