export interface Validations {
  hasConsecutiveLetters?: () => RegExp;
  hasNumbers?: () => RegExp;
  hasSpecialCharacters?: () => RegExp;
  hasUpperCases?: () => RegExp;
}

export interface PasswordFieldProps {
  validations: Validations;
}
