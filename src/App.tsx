import PasswordField from "./components/PasswordField";
import {
  hasNoConsecutiveLetters,
  hasNoConsecutiveNumbers,
  hasNumbers,
  hasSpecialCharacters,
  hasUpperCases,
} from "./utils/validations";

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
            validator: hasNoConsecutiveLetters,
          },
        ]}
      />
    </>
  );
}

export default App;
