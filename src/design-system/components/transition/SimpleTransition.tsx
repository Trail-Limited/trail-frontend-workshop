import { ReactNode } from 'react';
import tw from 'twin.macro';
import { TdsTransition } from './Transition';

type TransitionPreset = 'fade';

type TransitionProps = {
  show: boolean;
  beforeEnter?: () => void;
  beforeLeave?: () => void;
  afterEnter?: () => void;
  afterLeave?: () => void;
  preset?: TransitionPreset;
  children: ReactNode;
};

const transitionProps = {
  fade: {
    enter: tw`transition-opacity duration-150`,
    enterFrom: tw`opacity-0`,
    enterTo: tw`opacity-100`,
    leave: tw`transition-opacity duration-150`,
    leaveFrom: tw`opacity-100`,
    leaveTo: tw`opacity-0`,
  },
};

const getTransitionProps = (preset: TransitionPreset) => {
  return transitionProps[preset] as any;
};

export const TdsSimpleTransition = ({
  children,
  preset = 'fade',
  ...props
}: TransitionProps) => {
  return (
    <TdsTransition {...getTransitionProps(preset)} {...props}>
      {children}
    </TdsTransition>
  );
};
