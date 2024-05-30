type Validations = {
  validator: (value: string) => boolean;
  description: string;
}[];

export interface PasswordFieldProps {
  validations: Validations;
  containerClassNames?: string;
  fieldClassNames?: string;
  listClassNames?: string;
  listItemClassNames?: string;
}
