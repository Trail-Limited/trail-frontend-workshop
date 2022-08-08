import { useRef } from "react";
import { ValidationState } from "@react-types/shared";
import {
  Control,
  RegisterOptions,
  useController,
  UseControllerReturn,
} from "react-hook-form";
import { useField } from "@react-aria/label";
import { useObjectRef } from "@react-aria/utils";
import { CommonInputProps } from "../types/commonInputProps";

export type FieldValidationOptions = Pick<
  RegisterOptions,
  "required" | "min" | "max" | "maxLength" | "minLength" | "disabled"
>;

export type CustomLabelHandler = (labelProps: { [key: string]: any }) => void;

export type FormFieldProps<Value = string> = {
  /** The text to display as the label. */
  label: string;
  /** A description for the field. Provides a hint such as specific requirements for what to choose. */
  description?: string;
  /** An error message for the field. */
  errorMessage?: string;
  /** Handler that is called when the value changes. */
  onChange?: (value: Value | undefined) => void;
  /** Whether the input should be displayed in the valid or invalid state. */
  validationState?: ValidationState;
  /** Display an optional hint next to the label. (Only shown if the input is not required) */
  showOptionalHint?: boolean;
  /** For locating the input element in testing. */
  testId?: string;
  /** The current value (controlled).*/
  value?: Value;
  useForm?: {
    name: string;
    validationOptions?: FieldValidationOptions;
    control: Control<any>;
  };
} & CommonInputProps;

export const useFormField = <Value,>({
  useForm,
  errorMessage,
  validationState,
  description,
  ...props
}: FormFieldProps<Value>) => {
  const isUsingForm = Boolean(useForm);

  const { name, validationOptions, control } = useForm || { name: "" };

  // Register input to the form

  let {
    field,
    fieldState,
    formState,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Partial<UseControllerReturn<any, string>> = useController({
    name: name,
    control: control,
    rules: {
      ...validationOptions,
    },
  });

  if (!isUsingForm) {
    field = undefined;
    fieldState = undefined;
    formState = undefined;
  }

  const newRef = useRef(null);
  const ref = useObjectRef(field?.ref) ?? newRef;

  // Keep UI in sync with form state.
  if (formState) {
    errorMessage = formState.errors?.[name]?.message as unknown as any;
    validationState = errorMessage ? "invalid" : "valid";
  }

  const { labelProps, descriptionProps, errorMessageProps, fieldProps } =
    useField(props);

  const isDisabled = isUsingForm
    ? Boolean(validationOptions?.disabled)
    : props.isDisabled;

  const isRequired = isUsingForm
    ? Boolean(validationOptions?.required)
    : props.isRequired;

  const combinedLabelProps = {
    ...labelProps,
    showOptionalHint: props.showOptionalHint,
    isRequired,
  };

  return {
    // TODO: Update typing to detect if a custom label is being used
    label: props.label,
    labelProps: combinedLabelProps,
    description: description,
    descriptionProps,
    errorMessage: errorMessage,
    errorMessageProps,
    inputElementProps: {
      ...fieldProps,
    },
    inputComponentProps: {
      testId: props.testId,
      ...props, // Pass the rest of the props to the input component
      validationState: validationState,
      isDisabled,
      isRequired,
      innerRef: ref,
      ...(isUsingForm ? { name: field?.name } : {}),
      ...(isUsingForm ? { onBlur: field?.onBlur } : {}),
    },
    isUsingForm,
    formProps: {
      field,
      fieldState,
      formState,
    },
  };
};
