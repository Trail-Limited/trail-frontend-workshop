import {
  AriaLabelingProps,
  FocusableProps,
  InputBase,
  TextInputBase,
  Validation,
  ValidationState,
  ValueBase,
} from "@react-types/shared";
import {
  FunctionComponent,
  InputHTMLAttributes,
  MouseEvent,
  MutableRefObject,
  ReactNode,
  Ref,
  useRef,
} from "react";
import { useFocusRing, useTextField } from "react-aria";
import NumberFormat, {
  InputAttributes,
  NumberFormatProps,
} from "react-number-format";
import { StyledComponent } from "styled-components/macro";
import tw, { css, styled } from "twin.macro";
import { inputFocusStyles } from "../../../styles/focus/inputFocusStyles";
import { TdsGhostIconButton } from "../../buttons/ghostIconButton/GhostIconButton";
import { TdsIconCross } from "../../icons/components";
import { IconProps } from "../../icons/iconCommon";
import { CommonInputProps } from "../types/commonInputProps";

export type FormatterInputAttributes = {
  type?: "text" | "tel" | "password";
} & Omit<InputAttributes, "type">;

export type CustomTextInputProps = {
  /** Determines the width of the input by the number of characters it can fit. */
  charWidth?: number;
  /** Extends input to fill parent's width. */
  isFullWidth?: boolean;
  /** For locating the input element in testing. */
  testId?: string;
  /** @ignore */
  className?: string;
};

type InputElementProp<Value extends string | number> = Value extends string
  ? InputHTMLAttributes<HTMLInputElement>
  : NumberFormatProps;

export type CommonTextInputProps<Value extends string | number> = {
  onChange?: (value: Value | undefined) => void;
  inputElementProps?: InputElementProp<Value>;
  innerRef?: Ref<HTMLInputElement>;
} & AriaLabelingProps &
  Validation &
  InputBase &
  Omit<ValueBase<Value>, "onChange"> &
  TextInputBase &
  FocusableProps &
  CustomTextInputProps &
  CommonInputProps;

type BaseProps<Value extends string | number> = {
  /** Icon to be displayed on the left of the input. */
  LeftIcon?: FunctionComponent<IconProps>;
  LeftAddon?: ReactNode;
  RightAddon?: ReactNode;
  /** @ignore Display a button to the left to clear the input. */
  isClearable?: boolean;
  /** Called when the clear button is clicked. */
  onClear?: () => void;
  onValueChange?: (value: number | undefined) => void;
} & CommonTextInputProps<Value>;

export type BaseInputProps<Value extends string | number> =
  | (BaseProps<Value> & {
      useFormattedInput?: true;
      /**
       * @ignore Any props that should be applied directly to the input element.
       */
      inputProps?: NumberFormatProps;
    })
  | (BaseProps<Value> & {
      useFormattedInput?: false;
      /**
       * @ignore Any props that should be applied directly to the input element.
       */
      inputProps?: InputHTMLAttributes<HTMLInputElement>;
    });

type StyledInputProps = {
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isRestricted?: boolean;
};

type StyledInputContainerProps = {
  showFocusRing: boolean;
  validationState?: ValidationState;
  isDisabled?: boolean;
  showClearButton?: boolean;
  isFullWidth?: boolean;
  isRestricted?: boolean;
};

type StyledIconContainerProps = {
  isFocused: boolean;
  validationState?: ValidationState;
  isDisabled?: boolean;
  isRestricted?: boolean;
};

type StyledAddonProps = {
  location: "left" | "right";
};

type StyledNumberFormatProps = {
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isRestricted?: boolean;
};

const invalidStyles = css`
  ${() => tw`border-orange-500 hover:border-orange-500`};
`;

const StyledIconContainer = styled.div<StyledIconContainerProps>`
  ${() => tw`text-grey-600`};
  ${({ isFocused }) => isFocused && tw`text-grey-700`};
  ${({ isDisabled, isRestricted }) =>
    (isDisabled || isRestricted) && tw`text-grey-300`};
`;

const StyledInputContainer = styled.div<StyledInputContainerProps>`
  ${() => tw`
inline-flex items-center space-x-2 relative transition-all
border border-grey-300 rounded p-2
hover:border-blue-400
`};
  ${({ showFocusRing, validationState }) =>
    showFocusRing && inputFocusStyles(validationState === "invalid")};
  ${({ validationState }) => validationState === "invalid" && invalidStyles};
  ${({ isDisabled, isRestricted }) =>
    (isDisabled || isRestricted) &&
    tw`border-trailgrey-400 bg-grey-100 text-grey-300`};
  ${({ showClearButton: isClearable }) => isClearable && tw`py-1 pr-1`};
  ${({ isFullWidth }) => isFullWidth && tw`w-full`};
`;

const StyledInput = styled.input<StyledInputProps>`
  ${() => tw`text-left outline-none leading-[2.125rem] text-body1 -my-2`};
  ${({ isFullWidth }) => isFullWidth && tw`w-full`};
  ${({ isDisabled, isRestricted }) =>
    (isDisabled || isRestricted) && tw`bg-grey-100 placeholder:text-grey-300`};
  ${({ isRestricted }) => isRestricted && tw`text-text-1`};
`;

const StyledAddonContainer = styled.div<StyledAddonProps>`
  ${() => tw`-m-2`};
  ${({ location }) => (location === "left" ? tw`mr-0` : tw`-mr-2!`)};
`;

const StyledNumberFormat = styled(NumberFormat)<StyledNumberFormatProps>`
  ${({ isFullWidth }) => isFullWidth && tw`w-full`};
`;

export const BaseTextInput = <Value extends string | number = string>({
  charWidth,
  LeftIcon,
  LeftAddon,
  RightAddon,
  className,
  isClearable,
  onClear,
  testId,
  inputElementProps,
  useFormattedInput = false,
  isFullWidth,
  innerRef,
  ...props
}: BaseInputProps<Value>) => {
  if (props.isRestricted) {
    props.isReadOnly = true;
  }

  const showClearButton = isClearable && !props.isReadOnly && !props.isDisabled;

  const inputRef = useRef<HTMLInputElement>(null);

  const setInputRef = (node: HTMLInputElement) => {
    (inputRef as MutableRefObject<HTMLInputElement>).current = node;
    if (typeof innerRef === "function") {
      innerRef(node);
    } else if (innerRef) {
      (innerRef as MutableRefObject<HTMLInputElement>).current = node;
    }
  };
  const { focusProps, isFocused } = useFocusRing({
    isTextInput: true,
    within: true,
    autoFocus: props.autoFocus,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textFieldProps = useTextField(props as any, inputRef).inputProps;

  const focusOnInput = (event: MouseEvent<HTMLElement>) => {
    (inputRef as MutableRefObject<HTMLInputElement>)?.current?.focus();
    event.preventDefault();
  };

  return (
    <StyledInputContainer
      onClick={focusOnInput}
      validationState={props.validationState}
      showFocusRing={isFocused}
      isDisabled={props.isDisabled}
      isRestricted={props.isRestricted}
      className={className}
      showClearButton={showClearButton}
      isFullWidth={isFullWidth}
    >
      {LeftAddon && (
        <StyledAddonContainer location="left">{LeftAddon}</StyledAddonContainer>
      )}
      {LeftIcon && (
        <StyledIconContainer
          validationState={props.validationState}
          isFocused={isFocused && !props.isReadOnly}
          isDisabled={props.isDisabled}
          isRestricted={props.isRestricted}
        >
          <LeftIcon />
        </StyledIconContainer>
      )}
      {useFormattedInput ? (
        <StyledNumberFormat<
          StyledComponent<"input", never, StyledInputProps, never>
        >
          isFullWidth={isFullWidth}
          isDisabled={props.isDisabled}
          isRestricted={props.isRestricted}
          customInput={StyledInput}
          getInputRef={setInputRef}
          size={charWidth}
          data-testid={testId}
          {...(textFieldProps as NumberFormatProps)}
          {...(inputElementProps as NumberFormatProps)}
          {...(focusProps as NumberFormatProps)}
          onChange={() => {
            // no-op
          }} // use onValueChange instead to pass up the value
        />
      ) : (
        <StyledInput
          isFullWidth={isFullWidth}
          ref={setInputRef}
          size={charWidth}
          data-testid={testId}
          isDisabled={props.isDisabled}
          isRestricted={props.isRestricted}
          {...textFieldProps}
          {...(inputElementProps as InputHTMLAttributes<HTMLInputElement>)}
          {...focusProps}
        />
      )}

      {showClearButton && (
        <TdsGhostIconButton
          aria-label="clear input"
          size="xs"
          Icon={TdsIconCross}
          onPress={onClear}
        />
      )}
      {RightAddon && (
        <StyledAddonContainer location="right">
          {RightAddon}
        </StyledAddonContainer>
      )}
    </StyledInputContainer>
  );
};
