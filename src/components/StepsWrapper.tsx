import { useState } from "react";
import { CartItem } from "../types";
import CouponsWrapper from "./CouponsWrapper";
import ProductList from "./ProductList";
import StepControls from "./StepControls";
import StepsIndicator from "./StepIndicator";
import "./StepsWrapper.scss";

interface props {
  products: CartItem[];
}
function StepsWrapper({ products }: props) {
  const [step, setStep] = useState<number>(0);

  function handleStepIncrease() {
    step < 2 ? setStep(step + 1) : setStep(2);
  }
  function handleStepDecrease() {
    step > 0 ? setStep(step - 1) : setStep(0);
  }
  return (
    <>
      <div className="steps-wrap">
        <StepsIndicator step={step} />
        {step === 0 ? <ProductList products={products} /> : null}
        {step === 1 ? <CouponsWrapper /> : null}
        <StepControls
          step={step}
          handleStepIncrease={handleStepIncrease}
          handleStepDecrease={handleStepDecrease}
        />
      </div>
    </>
  );
}

export default StepsWrapper;
