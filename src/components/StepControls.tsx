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
          className="px-12 py-3 font-semibold rounded bg-positive-accent text-white"
          onClick={handleStepDecrease}
        >
          Previous
        </button>
        <button
          type="button"
          className="px-16 py-3 font-semibold rounded bg-positive-accent text-white"
          onClick={handleStepIncrease}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default StepControls;
