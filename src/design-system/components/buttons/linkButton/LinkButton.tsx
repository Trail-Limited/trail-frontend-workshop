import { AriaButtonProps } from '@react-types/button';
import { ReactText, useRef } from 'react';
import { useButton } from 'react-aria';
import tw from 'twin.macro';

type LinkButtonProps = {
  children: ReactText;
  onPress: () => void;
} & AriaButtonProps<'a'>;

const StyledLinkButton = tw.a`font-bold underline! cursor-pointer`;

export const TdsLinkButton = ({ children, ...props }: LinkButtonProps) => {
  const ref = useRef(null);

  const { buttonProps } = useButton(props, ref);
  return (
    <StyledLinkButton {...buttonProps} ref={ref}>
      {children}
    </StyledLinkButton>
  );
};
