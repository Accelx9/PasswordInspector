import { useState } from "react";
import { PasswordFieldProps } from "./interfaces";

const PasswordField = ({
  validations,
  containerClassNames,
  fieldClassNames,
  listClassNames,
}: PasswordFieldProps) => {
  const [password, setPassword] = useState("");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className={`${containerClassNames}`}>
      <input
        type="password"
        value={password}
        name="passwordField"
        className={`${fieldClassNames}`}
        onChange={handleChangePassword}
      />
      <ul className={`${listClassNames}`}>
        {validations?.map(({ description, validator }, index) => (
          <li key={index}>
            {description} {validator(password) ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordField;
