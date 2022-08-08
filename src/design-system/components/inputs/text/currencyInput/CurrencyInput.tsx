import { ValidationState } from '@react-types/shared';
import {
  BaseTextInput,
  CommonTextInputProps,
  FormatterInputAttributes,
} from '../BaseTextInput';
import tw, { styled } from 'twin.macro';
import { NumberFormatValues } from 'react-number-format';

type BaseCurrencyInputProps = {
  /** The currency label. */
  currency?: string;
};

export type CurrencyInputProps = {
  inputElementProps?: FormatterInputAttributes;
  /** Handler that will be called with the number value. */
  onValueChange?: (value: number | undefined) => void;
} & Omit<CommonTextInputProps<number>, 'inputElementProps' | 'onValueChange'> &
  BaseCurrencyInputProps;

/**
 * A simplified props typing for Storybook documentation.
 */
export const TdsCurrencyInputDoc = (props: BaseCurrencyInputProps) => <></>;

const StyledBaseInput = styled(BaseTextInput)`
  /* Hide browser arrow buttons*/

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: FormField;
  }
`;

const disabledStyled = tw`text-grey-500`;

const StyledCurrencySymbol = styled.div<{ isDisabled?: boolean }>`
  ${() => tw`pl-3 text-h6`};
  ${({ isDisabled }) => isDisabled && disabledStyled};
`;

const StyledCurrencyLabel = styled.div<{ isDisabled?: boolean }>`
  ${() => tw`pr-3`};
  ${({ isDisabled }) => isDisabled && disabledStyled};
`;

export const TdsCurrencyInput = ({
  className,
  charWidth = 20,
  currency = 'NZD',
  validationState,
  inputElementProps,
  placeholder,
  onValueChange,
  testId,
  innerRef,
  ...props
}: CurrencyInputProps) => {
  const handleValueChange = (values: NumberFormatValues) => {
    // Pass up the value rather than the formatted string.
    onValueChange?.(values.floatValue);
  };

  return (
    <BaseTextInput<number>
      useFormattedInput={true}
      innerRef={innerRef}
      inputElementProps={{
        ...inputElementProps,
        onValueChange: handleValueChange,
        placeholder,
        thousandSeparator: true,
        isNumericString: true,
      }}
      charWidth={charWidth}
      className={className}
      validationState={validationState}
      testId={testId}
      LeftAddon={
        <StyledCurrencySymbol isDisabled={props.isDisabled}>
          $
        </StyledCurrencySymbol>
      }
      RightAddon={
        <StyledCurrencyLabel isDisabled={props.isDisabled}>
          {currency}
        </StyledCurrencyLabel>
      }
      {...{ ...props, value: props.value }}
    />
  );
};
