import tw, { styled } from 'twin.macro';
import { BaseButton, BaseButtonProps } from '../BaseButton';

type ButtonVariants =
  | 'trail-grey'
  | 'blue'
  | 'blue-alt'
  | 'green'
  | 'green-alt'
  | 'red'
  | 'red-alt';

export type GhostButtonProps = {
  /** The button style. */
  variant?: ButtonVariants;
  isFullWidth?: boolean;
} & Omit<BaseButtonProps, 'variant'>;

const ghostStyles = tw`bg-white border-transparent! bg-opacity-50
hover:bg-opacity-10
active:bg-opacity-20
`;

const trailGreyStyles = tw`
text-trailgrey-600
hover:bg-trailgrey-600
active:(bg-trailgrey-600 text-trailgrey-700)
disabled:text-trailgrey-600
`;

const blueStyles = tw`
text-blue-500
hover:bg-blue-500
active:(bg-blue-500 text-blue-600)`;

const blueAltStyles = tw`
text-trailgrey-600
hover:bg-blue-500
active:(bg-blue-500 text-blue-600)
`;

const greenStyles = tw`
text-green-600
hover:bg-green-600
active:text-green-700`;

const greenAltStyles = tw`
text-trailgrey-600
hover:(text-green-600 bg-green-600)
active:(text-green-700 bg-green-600)
`;

const redStyles = tw`
text-red-500
hover:bg-red-500
active:text-red-600 bg-red-500`;

const redAltStyles = tw`
text-trailgrey-600
hover:(text-red-500 bg-red-500)
active:(text-red-600 bg-red-500)
`;

const StyledButton = styled(BaseButton)<
  GhostButtonProps & { variant: ButtonVariants }
>`
  ${({ variant }) => {
    switch (variant) {
      case 'blue':
        return blueStyles;
      case 'blue-alt':
        return blueAltStyles;
      case 'green':
        return greenStyles;
      case 'green-alt':
        return greenAltStyles;
      case 'red':
        return redStyles;
      case 'red-alt':
        return redAltStyles;
      case 'trail-grey':
        return trailGreyStyles;
    }
  }};
  ${() => ghostStyles};
`;

export const TdsGhostButton = ({
  children,
  variant = 'trail-grey',
  ...props
}: GhostButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
