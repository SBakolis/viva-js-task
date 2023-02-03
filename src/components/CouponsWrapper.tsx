import { useSelector } from "react-redux";
import { RootState } from "../reducers/store";
import CouponForm from "./CouponForm";
import ProductList from "./ProductList";

function CouponsWrapper() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <>
      <CouponForm />
      <ProductList products={cart.items} isCart={true} />
    </>
  );
}

export default CouponsWrapper;
