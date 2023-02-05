import { CartItem } from "../types";
import "./ProductListEntry.scss";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/slices/cartSlice";
import { useState } from "react";

interface props {
  product: CartItem;
  isCart?: boolean;
}

function ProductListEntry({ product, isCart }: props) {
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleIncrease = () => {
    setAmount(amount + 1);
  };

  const handleDecrease = () => {
    setAmount(amount > 0 ? amount - 1 : 0);
  };

  const handleCartAddition = (product: CartItem, quantity: number) => {
    const item: CartItem = { ...product, quantity: quantity };

    dispatch(addItem(item));
  };

  return (
    <>
      <div className="single-list-item">
        <div className="list-text">
          <p>{product.name}</p>
          <p>{product.price / 100}€/Kg</p>
        </div>
        <div className="controls">
          {!isCart ? (
            <button
              type="button"
              // eslint-disable-next-line no-template-curly-in-string
              className={"minus-kg"}
              onClick={handleDecrease}
            >
              -
            </button>
          ) : null}
          <input
            type="number"
            min={0}
            disabled={isCart}
            placeholder="0 Kg"
            className="quantity-input"
            value={isCart ? product.quantity : amount}
            onChange={handleChange}
          />
          {!isCart ? (
            <button
              type="button"
              // eslint-disable-next-line no-template-curly-in-string
              className={"plus-kg"}
              onClick={handleIncrease}
            >
              +
            </button>
          ) : null}
        </div>
        {!isCart ? (
          <div className="controls">
            <button
              type="button"
              className="plus-kg"
              onClick={() => handleCartAddition(product, amount)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="25"
                viewBox="-10 -10 48 48"
              >
                <path
                  d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-12-32v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4h-23.15c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24l1.79-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2h-29.57l-1.9-4h-6.53zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z"
                  fill="white"
                />
                <path d="M0 0h48v48h-48z" fill="none" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ProductListEntry;
