import {
  Transition as HeadlessUiTransition,
  TransitionEvents,
} from "@headlessui/react";
import tw, { styled, TwStyle, css } from "twin.macro";
import { createGlobalStyle } from "styled-components/macro";
import { useId } from "react-aria";

/**
 * HeadlessUI "Transition"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/transition
 */
type TransitionProps = {
  enter?: TwStyle;
  enterFrom?: TwStyle;
  enterTo?: TwStyle;
  entered?: TwStyle;
  leave?: TwStyle;
  leaveFrom?: TwStyle;
  leaveTo?: TwStyle;
  children: React.ReactNode;
  show?: boolean;
  as?: React.ElementType;
  appear?: boolean;
  unmount?: boolean;
} & TransitionEvents;

type GlobalStylesProps = {
  enter?: TwStyle;
  enterFrom?: TwStyle;
  enterTo?: TwStyle;
  entered?: TwStyle;
  leave?: TwStyle;
  leaveFrom?: TwStyle;
  leaveTo?: TwStyle;
  uid?: string;
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
.${(props) => props.uid}.enter {
  ${(props) => props.enter};
}
.${(props) => props.uid}.enter-from {
  ${(props) => props.enterFrom};
}
.${(props) => props.uid}.enter-to {
  ${(props) => props.enterTo};
}
.${(props) => props.uid}.entered {
  ${(props) => props.entered};
}
.${(props) => props.uid}.leave {
  ${(props) => props.leave};
}
.${(props) => props.uid}.leave-from {
  ${(props) => props.leaveFrom};
}
.${(props) => props.uid}.leave-to {
  ${(props) => props.leaveTo};
}
`;

export const TdsTransition = (props: TransitionProps) => {
  const uid = useId();
  const { children, ...styleProps } = props;
  return (
    <>
      <GlobalStyles {...styleProps} uid={uid} />
      <HeadlessUiTransition className={uid} {...getProps(props)} />
    </>
  );
};

TdsTransition.Child = function TransitionChild(props: TransitionProps) {
  const uid = useId();
  return (
    <>
      <GlobalStyles {...props} uid={uid} />
      <HeadlessUiTransition.Child className={uid} {...getProps(props)} />;
    </>
  );
};

function getProps(props: TransitionProps) {
  return {
    ...props,
    enter: "enter",
    enterFrom: "enter-from",
    enterTo: "enter-to",
    entered: "entered",
    leave: "leave",
    leaveFrom: "leave-from",
    leaveTo: "leave-to",
    beforeEnter: () => props.beforeEnter?.(),
    afterEnter: () => props.afterEnter?.(),
    beforeLeave: () => props.beforeLeave?.(),
    afterLeave: () => props.afterLeave?.(),
  };
}
