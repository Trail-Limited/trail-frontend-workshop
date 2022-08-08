import { TdsFieldHint } from '../formField/FieldHint';
import { TdsLabel } from '../formField/FieldLabel';
import { FormFieldProps, useFormField } from '../formField/useFormField';
import { FileInputProps, TdsFileInput } from './FileInput';

type FileUploadFieldProps = {
  hideLabel?: boolean;
  /** @ignore */
  className?: string;
} & Omit<
  FormFieldProps<File>,
  'isReadOnly' | 'isRestricted' | 'useCustomLabel'
> &
  Omit<FileInputProps, 'innerRef'>;

export const TdsFileInputField = ({
  hideLabel,
  className,
  ...props
}: FileUploadFieldProps) => {
  const handleValue = (): File | undefined => {
    if (isUsingForm) {
      return formProps.field!.value;
    } else {
      return props.value;
    }
  };

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
  } = useFormField(props);

  return (
    <div tw="mb-2" className={className}>
      <TdsLabel isHidden={hideLabel} {...labelProps}>
        {label}
      </TdsLabel>
      <TdsFileInput
        value={handleValue()}
        onChange={(val) => {
          props.onChange?.(val);
          if (isUsingForm) {
            formProps.field?.onChange(val);
          }
        }}
        {...inputComponentProps}
        {...inputElementProps}
      />
      <TdsFieldHint
        description={description}
        errorMessage={errorMessage}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
      />
    </div>
  );
};
