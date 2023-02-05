//API
export const mockable: string = "https://demo6913236.mockable.io/";

//RegEx

export const cardNumberCheck: RegExp = /^\s*(\d\s*){16}$/;
export const cardHolderCheck: RegExp = /^[a-zA-Z\s-]+$/;
export const cardCVVCheck: RegExp = /^\d{3,4}$/;
export const cardDateCheck: RegExp = /^(0[1-9]|1[0-2])\/\d{2}$/;

export const cardNumberCheckLive: RegExp = /^\s*(\d\s*){0,16}$/;
export const cardHolderCheckLive: RegExp = /^[a-zA-Z\s-]*$/;
export const cardCVVCheckLive: RegExp = /^\d{0,4}$/;
export const cardDateCheckLive: RegExp = /^(0?[1-9]?|1[0-2]?)\/?\d{0,2}$/;

//Validation

export const validationMap = {
  number: {
    pattern: cardNumberCheck,
    onTypeCheck: cardNumberCheckLive,
    error: "Please enter a valid card number.",
  },
  name: {
    pattern: cardHolderCheck,
    onTypeCheck: cardHolderCheckLive,
    error: "Please enter a valid name.",
  },
  cvv: {
    pattern: cardCVVCheck,
    onTypeCheck: cardCVVCheckLive,
    error: "Please enter a valid CVV/CVC.",
  },
  expiry: {
    pattern: cardDateCheck,
    onTypeCheck: cardDateCheckLive,
    error: "Please enter a valid expiry date.",
  },
};
