import React, { ChangeEvent, useState } from "react";
import { validationMap } from "../helpers/constants";

interface props {
  type: keyof typeof validationMap;
  placeholder: string;
  name: string;
  valuePass: React.Dispatch<React.SetStateAction<string>>;
}
function CardInput({ type, placeholder, name, valuePass }: props) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let thisValue = event.target.value;
    switch (type) {
      case "expiry":
        if (thisValue.length === 1 && Number(thisValue) > 1) {
          thisValue = `0${thisValue}/`;
        } else if (thisValue.length === 2) {
          thisValue = `${thisValue}/`;
        }
        break;
      case "number":
        let tempValue = thisValue.replace(/\s/g, "");
        if (tempValue.length % 4 === 0) {
          tempValue = tempValue.replace(/(\d{4})/g, "$1 ").trim();
          thisValue = tempValue;
        }

        break;

      default:
        break;
    }
    if (validationMap[type].onTypeCheck.test(thisValue)) {
      setValue(thisValue);
      valuePass(String(thisValue));
    }
  };

  return (
    <>
      <div className="w-full">
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
          className="input-ok"
        />
      </div>
    </>
  );
}

export default CardInput;
