import tw, { styled } from 'twin.macro';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { FunctionComponent } from 'react';
import { IconProps, IconSizes } from '../../icons/iconCommon';
import { useFocusRing } from 'react-aria';

type ButtonVariants =
  | 'trail-grey'
  | 'blue'
  | 'green'
  | 'green-add'
  | 'yellow'
  | 'red'
  | 'red-alt';

export type ButtonSizes = 'sm' | 'md';

export type ButtonProps = {
  /** The button size. */
  size?: ButtonSizes;
  /** The button style. */
  variant?: ButtonVariants;
  /** Icon to be displayed on the left of the button. */
  LeftIcon?: FunctionComponent<IconProps>;
  isFullWidth?: boolean;
} & Omit<BaseButtonProps, 'size'>;

const trailGreyStyles = tw`
(text-trailgrey-700 bg-white! border-trailgrey-500
hover:bg-trailgrey-100!
active:(bg-trailgrey-500! text-white))`;

const blueStyles = tw`
bg-blue-500!
hover:bg-blue-400!
active:bg-blue-600!`;

const greenStyles = tw`
bg-green-500!
hover:bg-green-400!
active:bg-green-600!`;

const greenAddStyles = tw`
text-green-500 border-green-500 border-dashed
hover:(bg-green-100! text-green-600)
active:(bg-green-600! text-white)
`;

const redStyles = tw`
bg-red-500! hover:bg-red-400! active:bg-red-600!`;

const redAltStyles = tw`
bg-white border-trailgrey-500 text-trailgrey-700
hover:(bg-red-400! text-white border-transparent)
active:(bg-red-500! text-white border-transparent)
  `;

const yellowStyles = tw`
bg-yellow-500! hover:bg-yellow-400! active:bg-yellow-600!`;

type StyledButtonProps = {
  variant: ButtonVariants;
} & BaseButtonProps;

const StyledButton = styled(BaseButton)<StyledButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'blue':
        return blueStyles;
      case 'green':
        return greenStyles;
      case 'green-add':
        return greenAddStyles;
      case 'red':
        return redStyles;
      case 'red-alt':
        return redAltStyles;
      case 'yellow':
        return yellowStyles;
      case 'trail-grey':
        return trailGreyStyles;
    }
  }};
`;

const getIconSize = (buttonSize: ButtonSizes): IconSizes => {
  switch (buttonSize) {
    case 'sm':
      return 'xs';
    case 'md':
      return 'sm';
  }
};

export const TdsButton = ({
  children,
  variant = 'trail-grey',
  LeftIcon,
  size = 'md',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {LeftIcon && <LeftIcon size={getIconSize(size)} />}
      {children}
    </StyledButton>
  );
};
