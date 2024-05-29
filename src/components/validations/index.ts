export const hasNumbers = (value: string) => {
  return /[0-9]/.test(value);
};

export const hasSpecialCharacters = (value: string) => {
  return /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(value);
};

export const hasUpperCases = (value: string) => {
  return /[A-Z]/.test(value);
};

export const hasConsecutiveLetters = (value: string) => {
  return !/[a-zA-Z]{2,}/.test(value);
};

export const hasConsecutiveNumbers = (value: string) => {
  return !/[0-9]{2,}/.test(value);
};
