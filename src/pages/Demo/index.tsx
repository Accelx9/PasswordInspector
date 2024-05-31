import { PasswordField } from "../../components";
import {
  hasNoConsecutiveLetters,
  hasNoConsecutiveNumbers,
  hasNumbers,
  hasSpecialCharacters,
  hasUpperCases,
} from "../../utils/validations";

export const Demo = () => {
  return (
    <PasswordField
      validations={[
        {
          description: "Has uppercase",
          validator: hasUpperCases,
        },
        {
          description: "Has numbers",
          validator: hasNumbers,
        },
        {
          description: "Has special characters",
          validator: hasSpecialCharacters,
        },
        {
          description: "Doesn't have consecutive letters",
          validator: hasNoConsecutiveLetters,
        },
        {
          description: "Doesn't have consecutive numbers",
          validator: hasNoConsecutiveNumbers,
        },
      ]}
    />
  );
};
