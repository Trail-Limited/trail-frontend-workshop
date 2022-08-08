import { FunctionComponent } from 'react';
import { IconProps } from '../../../icons/iconCommon';
import { BaseTextInput, CommonTextInputProps } from '../BaseTextInput';

type BaseTextInputProps = {
  /**
   * Icon to be displayed on the left of the input.
   *
   * e.g. `<TextInput LeftIcon={TdsIconPin} .../>`
   */
  LeftIcon?: FunctionComponent<IconProps>;
};

type TextInputProps = BaseTextInputProps & CommonTextInputProps<string>;

/**
 * A simplified props typing for Storybook documentation.
 */
// eslint-disable-next-line react/jsx-no-useless-fragment, unused-imports/no-unused-vars
export const TdsTextInputDoc = (props: BaseTextInputProps) => <></>;

export const TdsTextInput = ({
  className,
  charWidth = 20,
  LeftIcon,
  validationState,
  inputElementProps,
  testId,
  placeholder,
  ...props
}: TextInputProps) => {
  return (
    <BaseTextInput
      inputElementProps={{ ...inputElementProps, placeholder }}
      charWidth={charWidth}
      className={className}
      LeftIcon={LeftIcon}
      validationState={validationState}
      testId={testId}
      {...props}
    />
  );
};
