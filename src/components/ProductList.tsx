import { useSelector } from "react-redux";
import { RootState } from "../reducers/store";
import { CartItem } from "../types";
import { getCartTotal } from "../utils";
import ProductListEntry from "./ProductListEntry";

interface props {
  products: CartItem[];
  isCart?: boolean;
}

function ProductList({ products, isCart }: props) {
  const cart = useSelector((state: RootState) => state.cart);
  const coupon = useSelector((state: RootState) => state.coupons);
  const priceOriginal: number = getCartTotal(cart, coupon)[0];
  let priceCoupon: number = getCartTotal(cart, coupon)[1];
  const shouldShowSaleText: boolean = priceOriginal !== priceCoupon;
  const productArray = products.map((el, key) => {
    return <ProductListEntry key={key} product={el} isCart={isCart} />;
  });

  return (
    <>
      <h2 className="text-3xl font-bold text-center">Available products:</h2>
      {productArray}
      <h1
        className={
          // eslint-disable-next-line no-template-curly-in-string
          'text-3xl font-bold text-center ${shouldShowSaleText? "line-through": "" }'
        }
      >
        Your total: {priceOriginal / 100}€
      </h1>
      {shouldShowSaleText ? (
        <h1 className={"text-2xl text-positive-accent font-bold text-center"}>
          {priceCoupon / 100}€
        </h1>
      ) : null}
    </>
  );
}

export default ProductList;
