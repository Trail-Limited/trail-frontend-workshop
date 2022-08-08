import { ReactNode, ReactText, useRef } from 'react';
import { FocusRing, useButton, useFocusRing } from 'react-aria';
import { AriaButtonProps } from '@react-types/button';
import tw, { css, styled } from 'twin.macro';
import { PressEvent } from '@react-types/shared';
import { BaseProps } from '../../types/baseProps';
import { focusRingStyles } from '../../styles/focus/focusRingStyles';

export type BaseButtonSizes = 'xs' | 'sm' | 'md';

export type BaseButtonProps = {
  children: ReactNode;
  /** The button size. */
  size?: BaseButtonSizes;
  /** Extends input to fill parent's width. */
  isFullWidth?: boolean;
  /** @ignore */
  square?: boolean;
  /** @ignore */
  title?: string;
  onPress?: (e: PressEvent) => void;
  isDisabled?: boolean;
} & AriaButtonProps &
  BaseProps;

type StyledButtonProps = {
  size: BaseButtonSizes;
  squarePaddings: boolean;
  isFocusVisible: boolean;
  isFullWidth?: boolean;
};

const sizingStyles = (size: BaseButtonSizes, square: boolean) => {
  switch (size) {
    case 'xs':
      return square ? tw`p-1.5 rounded` : tw`py-1.5 px-2 text-button2 rounded`;
    case 'sm':
      return square ? tw`p-2 rounded` : tw`py-2 px-3 text-button2 rounded`;
    case 'md':
      return square ? tw`p-2.5 rounded` : tw`p-2.5 px-3.5 text-button1 rounded`;
  }
};

const baseStyles = tw`
    text-white font-semibold select-none leading-none
    inline-flex items-center gap-2 cursor-pointer justify-center
    border border-transparent
    disabled:(pointer-events-none opacity-50)
    transition-all transition-duration[100ms]
`;

const focusStyles = (focusVisible: boolean) => css`
  ${() => tw`outline-none`};
  ${() => focusVisible && focusRingStyles};
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${() => baseStyles};
  ${({ isFocusVisible }) => focusStyles(isFocusVisible)};
  ${({ size, squarePaddings }) => sizingStyles(size, squarePaddings)};
  ${({ isFullWidth }) => isFullWidth && tw`w-full`};
`;

export const BaseButton = ({
  size = 'md',
  square = false,
  isDisabled = false,
  isFullWidth,
  title,
  ...props
}: BaseButtonProps) => {
  let ref = useRef(null);
  let { buttonProps } = useButton({ isDisabled, ...props }, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <StyledButton
      ref={ref}
      squarePaddings={square}
      size={size}
      title={title}
      className={props.className}
      isFocusVisible={isFocusVisible}
      isFullWidth={isFullWidth}
      {...buttonProps}
      {...focusProps}
    >
      {props.children}
    </StyledButton>
  );
};
