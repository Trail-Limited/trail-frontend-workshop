import {
  Control,
  FieldValues,
  FormState,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { FieldValidationOptions } from '../formField/useFormField';

export type FormProps<TFieldValues extends FieldValues = any> = {
  name: string;
  register: UseFormRegister<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  formState: FormState<TFieldValues>;
  validationOptions?: FieldValidationOptions;
  control: Control<TFieldValues>;
};
