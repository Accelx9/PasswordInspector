# Password Inspector

Password Inspector is your go-to tool for ensuring your passwords are robust and secure. In today's digital age, safeguarding your online accounts is more important than ever. Our package provides a simple and effective way to test the strength of your passwords and get immediate feedback.

# How does it work?

Password Inspector allows you to customize your validations by receiving as many conditions as you want! Create one or many function that receives the string and checks if it fulfils your conditions such as the following:

```ts
const hasNumbers = (value: string) => {
  return /[0-9]/.test(value);
};
```

Then pass it to the component as a prop in the list of validations

```tsx
<PasswordField
  validations={[
    {
      description: "Has uppercase",
      validator: hasUpperCases,
    },
    {
      description: "A description of the validator",
      validator: customValidator,
    },
  ]}
/>
```

| Parameter             | Type                                                       | Description                                              |
| :-------------------- | :--------------------------------------------------------- | :------------------------------------------------------- |
| validations           | `{description:string; validator:(value:string)=>boolean;}` | **Required**. Your list of validations                   |
| `containerClassNames` | `string`                                                   | **Required**. Styling for the container of the component |
| `fieldClassNames`     | `string`                                                   | **Required**. Styling for the text input                 |
| `listClassNames`      | `string`                                                   | **Required**. Styling for the list of validations        |
| `listItemClassNames`  | `string`                                                   | **Required**. Styling for each item of the list          |

## How would I improve stuff all around the project?

Currently this lacks the ability to be integrated and controlled to parent components or forms. To solve this issue I would receive the states of the text field as props.
Additionally I would allow receive a couple new parameters to customize the feedback icons.

```ts
export interface PasswordFieldProps {
  validations: Validations;
  containerClassNames?: string;
  fieldClassNames?: string;
  listClassNames?: string;
  listItemClassNames?: string;
  checkIcon?: React.ReactNode;
  failureIcon?: React.ReactNode;
}
```

This way the user would be able to bring his own filters to the password field.

## Demo

https://password-inspector-wi9x.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/Accelx9/PasswordInspector
```

Go to the project directory

```bash
  cd PasswordInspector
```

Install dependencies

```bash
  npm install or npm i
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
