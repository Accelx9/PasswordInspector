import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CheckSVG from "../../assets/Check.svg";
import WrongSVG from "../../assets/Wrong.svg";
import { PasswordField } from "../../components";
import {
  hasNumbers,
  hasSpecialCharacters,
  hasUpperCases,
} from "../../utils/validations";

describe("Password Field component", () => {
  it("should render correctly", () => {
    const validations = [
      {
        description: "Has a number 0-9",
        validator: hasNumbers,
      },
    ];

    const { getByRole, getByAltText } = render(
      <PasswordField validations={validations} />
    );
    const requirement = getByRole("listItem");
    const textInput = getByRole("textInput");
    const image = getByAltText("Check validation image");

    expect(requirement).toBeInTheDocument();
    expect(image).toHaveAttribute("src", WrongSVG);
    expect(requirement).toHaveTextContent(/Has a number 0-9/i);
    expect(textInput).toBeInTheDocument();
  });

  it("should change checker status correctly", async () => {
    const user = userEvent.setup();

    const validations = [
      {
        description: "Has a number 0-9",
        validator: hasNumbers,
      },
      {
        description: "Has special characters",
        validator: hasSpecialCharacters,
      },
      {
        description: "Has uppercase letter",
        validator: hasUpperCases,
      },
    ];

    const { getByRole, getAllByRole, getAllByAltText } = render(
      <PasswordField validations={validations} />
    );
    const requirements = getAllByRole("listItem");
    const textInput = getByRole("textInput");
    const images = getAllByAltText("Check validation image");

    expect(requirements).toHaveLength(3);
    expect(textInput).toBeInTheDocument();

    expect(images[0]).toHaveAttribute("src", WrongSVG);
    expect(requirements[0]).toHaveTextContent(/Has a number 0-9/i);
    expect(images[1]).toHaveAttribute("src", WrongSVG);
    expect(requirements[1]).toHaveTextContent(/Has special characters/i);
    expect(images[2]).toHaveAttribute("src", WrongSVG);
    expect(requirements[2]).toHaveTextContent(/Has uppercase letter/i);

    await user.click(textInput);
    await user.keyboard("the worldd9");

    expect(images[0]).toHaveAttribute("src", CheckSVG);
    expect(images[1]).toHaveAttribute("src", WrongSVG);
    expect(images[2]).toHaveAttribute("src", WrongSVG);

    await user.click(textInput);
    await user.keyboard("the worldd9!");
    expect(images[1]).toHaveAttribute("src", CheckSVG);
    expect(images[2]).toHaveAttribute("src", WrongSVG);

    await user.click(textInput);
    await user.keyboard("T1e w2r4d89!");
    expect(images[2]).toHaveAttribute("src", CheckSVG);
  });
});
