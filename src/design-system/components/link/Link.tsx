import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { BaseProps } from '../../types/baseProps';

export type LinkProps = {
  children: ReactNode;
  url: string;
  /** This has no effect if `isReactRoute` is `true`. */
  openInNewWindow?: boolean;
  isReactRoute?: boolean;
} & BaseProps;

const StyledLink = styled.a`
  ${() => tw`
font-medium text-blue-500!
hover:underline
cursor-pointer
`};
`;

export const TdsLink = ({
  children,
  url,
  openInNewWindow = true,
  isReactRoute = false,
  className,
  ...props
}: LinkProps) => {
  if (isReactRoute) {
    return (
      <StyledLink as={Link} to={url} className={className}>
        {children}
      </StyledLink>
    );
  } else {
    return (
      <StyledLink
        href={url}
        target={openInNewWindow ? '_blank' : ''}
        className={className}
      >
        {children}
      </StyledLink>
    );
  }
};
