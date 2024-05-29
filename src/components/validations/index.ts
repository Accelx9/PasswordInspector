export const hasNumberRegex = () => {
  return /[0-9]/;
};

export const hasSpecialCharRegex = () => {
  return /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
};

export const hasUpperCaseRegex = () => {
  return /[A-Z]/;
};

export const hasConsecutiveLettersRegex = () => {
  return /[a-zA-Z]{2,}/;
};
