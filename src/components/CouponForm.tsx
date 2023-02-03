import { useDispatch } from "react-redux";

import { applyCoupon } from "../reducers/couponReducer";
import { useRef } from "react";

function CouponForm() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLSelectElement>(null);

  function handleApply() {
    console.log(inputRef.current?.value);
    switch (inputRef.current?.value) {
      case "HAPPYBIRTHDAY":
        dispatch(applyCoupon("HAPPYBIRTHDAY"));
        break;
      case "50OFF":
        dispatch(applyCoupon("50OFF"));
        break;
      case "ILIKEAPPLES":
        dispatch(applyCoupon("ILIKEAPPLES"));
        break;
      default:
        dispatch(applyCoupon(""));
    }
  }
  return (
    <>
      <div>
        <label
          htmlFor="coupons"
          className="block mb-2 text-sm font-medium text-black"
        >
          Select a coupon
        </label>
        <div className="flex flex-row">
          <select
            id="coupons"
            ref={inputRef}
            placeholder="Choose a coupon"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-positive-accent focus:ring-1 focus:border-positive-accent block w-full p-2.5"
          >
            <option value="HAPPYBIRTHDAY">🎂 HAPPYBIRTHDAY</option>
            <option value="50OFF">🌮 50OFF</option>
            <option value="ILIKEAPPLES">🍎 ILIKEAPPLES</option>
          </select>
          <button
            type="button"
            className="px-12 py-3 mx-2 font-semibold rounded bg-positive-accent text-white"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default CouponForm;
