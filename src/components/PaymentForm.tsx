import { ReactComponent as Amex } from "../assets/american-express.svg";
import { ReactComponent as Visa } from "../assets/visa_updated_1.svg";
import { ReactComponent as Master } from "../assets/mastercard.svg";

import { FormEvent, useState } from "react";
import CardInput from "./CardInput";
import { validationMap } from "../helpers/constants";
import SuccessModal from "./SuccessModal";

//While having a separate interface for this may seem like a stretch it reduces rerenders by a lot.
interface StyleValidation {
  number: boolean;
  name: boolean;
  cvv: boolean;
  expiry: boolean;
}

function PaymentForm() {
  const [number, setNumber] = useState<string>("");
  const [holder, setHolder] = useState<string>("");
  const [cvv, setCVV] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [styleValidation, setStyleValidation] = useState<StyleValidation>({
    number: true,
    name: true,
    cvv: true,
    expiry: true,
  });

  const cardHolderValid = () => {
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
      cardHolderValid() &&
      cardNumberValid() &&
      cardCVVValid() &&
      cardExpiryValid()
    ) {
      setModalOpen(true);
    } else {
      // Displays red border around false fields and logs them.
      setStyleValidation({
        number: cardNumberValid(),
        name: cardHolderValid(),
        cvv: cardCVVValid(),
        expiry: cardExpiryValid(),
      });
      console.log(
        cardHolderValid(),
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
          finalValidation={styleValidation.number}
        />
        <CardInput
          type={"name"}
          placeholder={"Jon Doe"}
          name={"Cardholder Name"}
          valuePass={setHolder}
          finalValidation={styleValidation.name}
        />
        <div className="flex flex-row">
          <CardInput
            type={"expiry"}
            placeholder={"01/99"}
            name={"Expiry Date"}
            valuePass={setExpiry}
            finalValidation={styleValidation.expiry}
          />
          <CardInput
            type={"cvv"}
            placeholder={"999(9)"}
            name={"CVV/CVC"}
            valuePass={setCVV}
            finalValidation={styleValidation.cvv}
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 mt-3 w-full font-semibold rounded-md bg-positive-accent text-white"
        >
          Pay
        </button>
      </form>
      <SuccessModal isOpen={modalOpen} closeHandler={setModalOpen} />
    </>
  );
}

export default PaymentForm;
