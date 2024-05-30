import { useState } from "react";
import { PasswordFieldProps } from "./interfaces";
import styles from "./PasswordField.module.css";
import CheckSVG from "../../assets/Check.svg";
import WrongSVG from "../../assets/Wrong.svg";

const PasswordField = ({
  validations,
  containerClassNames,
  fieldClassNames,
  listClassNames,
  listItemClassNames,
}: PasswordFieldProps) => {
  const [password, setPassword] = useState("");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div
      className={` ${styles.password_field_container} ${containerClassNames}`}
    >
      <input
        type="password"
        value={password}
        name="passwordField"
        className={`${fieldClassNames}`}
        onChange={handleChangePassword}
        role="textInput"
      />
      <ul className={`${styles.validations_list} ${listClassNames} `}>
        {validations?.map(({ description, validator }, index) => (
          <li
            role="listItem"
            className={`${styles.validations_list_item} ${listItemClassNames}`}
            key={index}
          >
            <img
              src={validator(password) ? CheckSVG : WrongSVG}
              className={`${styles.validator_image}`}
              alt="Check validation image"
            />
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordField;
