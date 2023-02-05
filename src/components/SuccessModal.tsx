import { Dispatch, SetStateAction } from "react";

interface props {
  isOpen: boolean;
  closeHandler: Dispatch<SetStateAction<boolean>>;
}

function SuccessModal({ isOpen, closeHandler }: props) {
  return (
    <>
      {isOpen ? (
        <div className="absolute flex flex-col items-center max-w-[90vw] gap-4 p-6 ml-[0%] lg:ml-[10%] xl:ml-[15%] rounded-md shadow-md sm:py-8 sm:px-12 bg-back-plain ring-2 ring-brown-accent  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
          >
            <path
              d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50  l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z"
              fill="#43a047"
            />
          </svg>
          <h2 className="text-2xl font-semibold leading-tight tracking-wide">
            Payment Complete
          </h2>
          <p className="flex-1 text-center text-gray-600">
            Your data is handled carefully by our payment provider.
          </p>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded-full bg-positive-accent text-white"
            onClick={() => closeHandler(false)}
          >
            OK
          </button>
        </div>
      ) : null}
    </>
  );
}

export default SuccessModal;
