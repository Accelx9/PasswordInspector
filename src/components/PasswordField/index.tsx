import { useState } from "react";
import { PasswordFieldProps } from "./interfaces";
import styles from "./PasswordField.module.css";
import CheckSVG from "../../assets/Check.svg";
import WrongSVG from "../../assets/Wrong.svg";

export const PasswordField = ({
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
    <article
      className={` ${styles.password_field_container} ${containerClassNames}`}
    >
      <input
        type="password"
        value={password}
        name="passwordField"
        className={`${fieldClassNames}`}
        onChange={handleChangePassword}
        role="textInput"
        aria-label="Insert your password"
      />
      <ul
        aria-label="Validation list"
        className={`${styles.validations_list} ${listClassNames} `}
      >
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
    </article>
  );
};
