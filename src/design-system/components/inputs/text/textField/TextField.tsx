import { cloneElement, ReactElement } from 'react';
import { TdsFieldHint } from '../../formField/FieldHint';
import { TdsLabel } from '../../formField/FieldLabel';
import { FormFieldProps, useFormField } from '../../formField/useFormField';
import { BaseInputProps, CustomTextInputProps } from '../BaseTextInput';
import * as ReactType from '@react-types/textfield';

type TextFieldProps<Value extends string | number = string> = {
  /** Handler that will be called with the number value (applicable for
   * formatted inputs only).
   */
  onValueChange?: (value: number | undefined) => void;
  onChange?: (value: Value | undefined) => void;
  /** Hide the label */
  hideLabel?: boolean;
  placeholder?: string;
  label?: string;
  children:
    | ReactElement<BaseInputProps<Value>>
    | ((
        props: Pick<
          ReturnType<typeof useFormField>,
          'labelProps' | 'descriptionProps' | 'errorMessageProps'
        >
      ) => ReactElement);
} & Omit<FormFieldProps<Value>, 'label'> &
  Omit<
    ReactType.TextFieldProps,
    | 'label'
    | 'description'
    | 'errorMessage'
    | 'onChange'
    | 'isRequired'
    | 'value'
  > &
  CustomTextInputProps;

export const TdsTextField = <Value extends string | number = string>({
  children,
  hideLabel = false,
  label:
    propLabel = 'This message should only be visible if a custom label is used',
  ...props
}: TextFieldProps<Value>) => {
  const {
    label,
    labelProps,
    description,
    descriptionProps,
    errorMessage,
    errorMessageProps,
    inputElementProps,
    inputComponentProps,
    isUsingForm,
    formProps,
  } = useFormField({ ...props, label: propLabel });

  const inputProps = {
    // Prevents useTextField in BaseInput.tsx from throwing a warning about
    // missing label since we are handling the field label here.
    'aria-labelledby': labelProps.id,
    inputElementProps: inputElementProps,
    ...inputComponentProps,
    // Manage the form value updates internally to support inputs with numeric values.
    onChange: isUsingForm
      ? (value: Value | undefined) => {
          formProps.field?.onChange(value);
        }
      : props.onChange,
    value: isUsingForm ? formProps.field?.value ?? '' : props.value,
    // Pass the numerical value up for Format Number inputs.
    onValueChange: (value?: number) => {
      props?.onValueChange?.(value);
      // onValueChange will be called instead of onChange when a formatted input
      // is used.
      if (isUsingForm && formProps.field?.value !== value) {
        formProps.field?.onChange(value);
      }
    },
  };

  const isChildFunction = typeof children === 'function';

  if (isChildFunction) {
    return children({ labelProps, descriptionProps, errorMessageProps });
  } else {
    // Inject ref and inputProps into the children. Any props not passed through
    // by `useTextField()` must be added manually.
    const input = cloneElement<BaseInputProps<Value>>(children, {
      ...children.props,
      ...inputProps,
    });

    return (
      <div tw="mb-2">
        <TdsLabel {...labelProps} isHidden={hideLabel}>
          {label}
        </TdsLabel>
        {input}
        <TdsFieldHint
          description={description}
          errorMessage={errorMessage}
          descriptionProps={descriptionProps}
          errorMessageProps={errorMessageProps}
        />
      </div>
    );
  }
};
