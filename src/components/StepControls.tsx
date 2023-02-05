interface props {
  step: number;
  handleStepIncrease: () => void;
  handleStepDecrease: () => void;
}

function StepControls({ step, handleStepDecrease, handleStepIncrease }: props) {
  return (
    <>
      <div className="flex flex-row justify-between mx-2">
        <button
          type="button"
          className={`px-12 py-3 font-semibold rounded ${
            step === 0 ? "bg-slate-500" : "bg-positive-accent"
          } text-white`}
          onClick={handleStepDecrease}
          disabled={step === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className={`px-16 py-3 font-semibold rounded ${
            step === 2 ? "bg-slate-500" : "bg-positive-accent"
          } text-white`}
          onClick={handleStepIncrease}
          disabled={step === 2}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default StepControls;
