import { Fragment } from "react/jsx-runtime";
import { PasswordField } from "../../components";
import {
  hasNoConsecutiveLetters,
  hasNoConsecutiveNumbers,
  hasNumbers,
  hasSpecialCharacters,
  hasUpperCases,
} from "../../utils/validations";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <Fragment>
      <div className={styles.form}>
        <div className={styles.padding_horizontal__48}>
          <span className={styles.padding_bottom__15}>
            Sign up in Password Inspector an learn about password security!
          </span>
          <form>
            <div className={`${styles.field} ${styles.padding_bottom__24}`}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={`${styles.field} ${styles.padding_bottom__24}`}>
              <label htmlFor="password">Password</label>
              <PasswordField
                containerClassNames={styles.password_field_container}
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
            </div>
            <div
              className={`${styles.field} ${styles.field_checkbox} ${styles.padding_bottom__24} ${styles.flex} ${styles.align_center}`}
            >
              <label htmlFor="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  className={styles.field_checkbox}
                />{" "}
                Stay signed in for a week
              </label>
            </div>
            <div className={`${styles.field} ${styles.padding_bottom__24}`}>
              <input type="submit" name="submit" value="Continue" />
            </div>
            <div className={styles.field}>
              <a className={styles.google_link} href="#">
                Sign up with (Google) instead
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className={`${styles.footer_link} ${styles.padding_top__24}`}>
        <span>
          Already have an account? <a href="">Sign in</a>
        </span>
        <div
          className={`${styles.listing}   ${styles.padding_top__24} ${styles.padding_bottom__24} ${styles.flex} ${styles.justify_center} ${styles.align_center}`}
        >
          <span>
            <a href="#">© PasswordInspector</a>
          </span>
          <span>
            <a href="#">Contact</a>
          </span>
          <span>
            <Link to="/Demo">Component Demo</Link>
          </span>
          <span>
            <a href="#">Privacy & terms</a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};
