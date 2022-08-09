import { ReactNode } from "react";
import tw, { css, GlobalStyles, styled } from "twin.macro";
import { globalStylesScoped } from "./globalStylesScoped";
import "react-loading-skeleton/dist/skeleton.css";
import "styled-components/macro";

type BaseStyleContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Global base styles for the design system. This should be injected in the app
 *  that'll consume the design system.
 */
export const tdsBaseStyles = css`
  & code:not[.prismjs] {
    ${() => tw`(bg-blue-50 text-caption py-0.5 px-1.5 rounded-md)!`};
  }

  & {
    ${() => tw`text-body1 text-trailgrey-900`};
  }

  & p {
    ${() => tw`mt-0 mb-4`}
  }
`;

const StyledBaseDiv = styled.div`
  ${() => tdsBaseStyles};
`;

/**
 * Container for injecting Tailwind style resets. This is intended to be used by
 * Storybook ONLY.
 */
export const BaseStyleContainer = ({
  children,
  className,
}: BaseStyleContainerProps) => (
  <StyledBaseDiv className={className}>
    <></>
    <GlobalStyles />
    {children}
  </StyledBaseDiv>
);
