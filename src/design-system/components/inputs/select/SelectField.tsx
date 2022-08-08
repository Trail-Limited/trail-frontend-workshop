import { ReactElement } from 'react';
import { OnChangeValue, PropsValue } from 'react-select';
import { TdsFieldHint } from '../formField/FieldHint';
import { TdsLabel } from '../formField/FieldLabel';
import { FormFieldProps, useFormField } from '../formField/useFormField';
import { BaseSelectProps, TdsSelectInput } from './SelectInput';
import { SelectProps } from './SelectInput';

export type SelectFieldProps<Value, IsMulti extends boolean = false> = {
  /** Called when the selection is changed. */
  onChange?: (newValue: OnChangeValue<Value, IsMulti> | undefined) => void;
  /** Hide the label */
  hideLabel?: boolean;
  maxMenuHeight?: number;
  label?: string;
  children?: (
    props: Pick<
      ReturnType<typeof useFormField>,
      'labelProps' | 'descriptionProps' | 'errorMessageProps'
    > & { selectProps: SelectProps<Value, IsMulti> }
  ) => ReactElement;
  /** @ignore */
  className?: string;
} & BaseSelectProps<Value, IsMulti> &
  Omit<FormFieldProps<OnChangeValue<Value, IsMulti>>, 'onChange' | 'label'>;

export const TdsSelectField = <Value, IsMulti extends boolean = false>({
  children,
  className,
  hideLabel = false,
  label:
    propLabel = 'This message should only be visible if a custom label is used',
  ...props
}: SelectFieldProps<Value, IsMulti>) => {
  const {
    label,
    labelProps,
    description,
    descriptionProps,
    errorMessage,
    errorMessageProps,
    inputElementProps,
    inputComponentProps,
    formProps,
    isUsingForm,
  } = useFormField({ ...props, label: propLabel });

  const handleValue = (): PropsValue<Value> | undefined => {
    if (isUsingForm && formProps.field) {
      const fieldValue = formProps.field.value;
      if (fieldValue === undefined) {
        return null;
      } else {
        return fieldValue;
      }
    } else {
      return props.value;
    }
  };

  const selectProps = {
    ...props,
    ...inputElementProps,
    ...inputComponentProps,
    value: handleValue(),
    onChange: (val: OnChangeValue<Value, IsMulti> | undefined) => {
      props.onChange?.(val);
      if (isUsingForm) {
        formProps.field?.onChange(val);
      }
    },
  };

  if (children && typeof children === 'function') {
    return children({
      selectProps,
      descriptionProps,
      errorMessageProps,
      labelProps,
    });
  } else {
    return (
      <div tw="mb-2" className={className}>
        {
          <TdsLabel isHidden={hideLabel} {...labelProps}>
            {label}
          </TdsLabel>
        }
        <TdsSelectInput<Value, IsMulti> {...selectProps} />
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
