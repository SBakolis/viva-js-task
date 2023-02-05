import { ReactComponent as Amex } from "../../assets/american-express.svg";
import { ReactComponent as Visa } from "../../assets/visa_updated_1.svg";
import { ReactComponent as Master } from "../../assets/mastercard.svg";

import React, { ChangeEvent, useState } from "react";
import { validationMap } from "../../helpers/constants";
import "./CardInput.scss";

interface props {
  type: keyof typeof validationMap;
  placeholder: string;
  name: string;
  valuePass: React.Dispatch<React.SetStateAction<string>>;
  finalValidation: boolean;
}
function CardInput({
  type,
  placeholder,
  name,
  valuePass,
  finalValidation,
}: props) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let thisValue = event.target.value;
    switch (type) {
      case "expiry":
        if (thisValue.length === 1 && Number(thisValue) > 1) {
          thisValue = `0${thisValue}`;
        }
        let tempValueDate = thisValue.replace(/\//g, "");

        tempValueDate = tempValueDate.replace(/(\d{2})(\d{1,2})/, "$1/$2");
        thisValue = tempValueDate;

        break;
      case "number":
        let tempValue = thisValue.replace(/\s/g, "");

        tempValue = tempValue.replace(/(\d{4})/g, "$1 ").trim();
        thisValue = tempValue;

        break;

      default:
        break;
    }
    if (validationMap[type].onTypeCheck.test(thisValue)) {
      setValue(thisValue);
      valuePass(String(thisValue));
    }
  };

  function cardLogo(value: string) {
    switch (value[0]) {
      case "3":
        return <Amex className="absolute right-3 top-[50%] w-12" />;

      case "4":
        return <Visa className="absolute right-3 top-[60%] w-12" />;

      case "5":
        return <Master className="absolute right-3 top-[50%] w-12" />;

      default:
        return null;
    }
  }

  return (
    <>
      <div className="w-full relative">
        <label className="text-gray-700" htmlFor={`input-${name}`}>
          {name}
        </label>
        <input
          required
          id={`input-${name}`}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          className={finalValidation ? "input-ok" : "input-invalid"}
        />
        {type === "number" ? <>{cardLogo(value)}</> : null}
        {!finalValidation ? (
          <p className=" text-red-700">{validationMap[type].error}</p>
        ) : null}
      </div>
    </>
  );
}

export default CardInput;
