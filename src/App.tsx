import PasswordField from "./components/PasswordField";
import {
  hasConsecutiveLetters,
  hasConsecutiveNumbers,
  hasNumbers,
  hasSpecialCharacters,
  hasUpperCases,
} from "./components/validations";

function App() {
  return (
    <>
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
            validator: hasConsecutiveLetters,
          },
          {
            description: "Doesn't have consecutive numbers",
            validator: hasConsecutiveNumbers,
          },
        ]}
      />
    </>
  );
}

export default App;
