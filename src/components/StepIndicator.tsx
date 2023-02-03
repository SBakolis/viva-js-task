import "./StepIndicator.scss";
interface props {
  step: number;
}

function StepsIndicator({ step }: props) {
  const stepsInfo: string[] = [
    "Step 1: Add products to cart",
    "Step 2: Review order",
    "Step 3: Complete Payment",
  ];
  return (
    <>
      <div className="step-wrapper">
        <h3>{stepsInfo[step]}</h3>
        <div className="steps">
          <span className={step >= 0 ? "step-active" : "step"}></span>
          <span className={step >= 1 ? "step-active" : "step"}></span>
          <span className={step === 2 ? "step-active" : "step"}></span>
        </div>
      </div>
    </>
  );
}

export default StepsIndicator;
