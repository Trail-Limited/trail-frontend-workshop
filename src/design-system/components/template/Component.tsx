import { ReactNode } from 'react';
import tw from 'twin.macro';

export type ComponentProps = {
  children: ReactNode;
};

const StyledComponent = tw.div``;

export const TdsComponent = ({ children, ...props }: ComponentProps) => {
  return <StyledComponent {...props}>{children}</StyledComponent>;
};
