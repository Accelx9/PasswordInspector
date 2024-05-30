export const hasNumbers = (value: string) => {
  return /[0-9]/.test(value);
};

export const hasSpecialCharacters = (value: string) => {
  return /[!¡@#'"|$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(value);
};

export const hasUpperCases = (value: string) => {
  return /[A-Z]/.test(value);
};

export const hasNoConsecutiveLetters = (value: string) => {
  if (!value) return false;
  return !/[a-zA-Z]{2,}/.test(value);
};

export const hasNoConsecutiveNumbers = (value: string) => {
  if (!value) return false;
  return !/[0-9]{2,}/.test(value);
};
