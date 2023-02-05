import { ReactComponent as Amex } from "../assets/american-express.svg";
import { ReactComponent as Visa } from "../assets/visa_updated_1.svg";
import { ReactComponent as Master } from "../assets/mastercard.svg";

import "./PaymentForm.scss";
import { FormEvent, useState } from "react";
import CardInput from "./CardInput";
import { validationMap } from "../helpers/constants";

function PaymentForm() {
  const [number, setNumber] = useState<string>("");
  const [holder, setHolder] = useState<string>("");
  const [cvv, setCVV] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");

  const cardholderValid = () => {
    const isValid = validationMap.name.pattern.test(holder);
    return isValid;
  };

  const cardNumberValid = () => {
    const isValid = validationMap.number.pattern.test(number);
    return isValid;
  };

  const cardCVVValid = () => {
    const isValid = validationMap.cvv.pattern.test(cvv);
    return isValid;
  };

  const cardExpiryValid = () => {
    const isValid = validationMap.expiry.pattern.test(expiry);
    const today = new Date();
    const [month, year] = expiry.split("/").map(Number);
    const enteredDate = new Date(2000 + year, month - 1);
    console.log(enteredDate);
    const isDateValid = isValid && today <= enteredDate;
    return isDateValid;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      cardholderValid() &&
      cardNumberValid() &&
      cardCVVValid() &&
      cardExpiryValid()
    ) {
      // Proceed with the submission
      console.log("Form is valid. Submitting...");
    } else {
      // Display an error message or do nothing
      console.log(
        cardholderValid(),
        cardNumberValid(),
        cardCVVValid(),
        cardExpiryValid()
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardInput
          type={"number"}
          placeholder={"0000 0000 0000 0000"}
          name={"Card Number"}
          valuePass={setNumber}
        />
        <CardInput
          type={"name"}
          placeholder={"Jon Doe"}
          name={"Cardholder Name"}
          valuePass={setHolder}
        />
        <div className="flex flex-row">
          <CardInput
            type={"expiry"}
            placeholder={"01/99"}
            name={"Expiry Date"}
            valuePass={setExpiry}
          />
          <CardInput
            type={"cvv"}
            placeholder={"999(9)"}
            name={"CVV/CVC"}
            valuePass={setCVV}
          />
        </div>
        <button type="submit">Pay</button>
      </form>
    </>
  );
}

export default PaymentForm;
