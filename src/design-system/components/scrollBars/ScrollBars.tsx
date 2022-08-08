import { ReactNode } from 'react';
import Scrollbars, {
  positionValues,
  ScrollbarProps,
} from 'react-custom-scrollbars-2';
import tw, { styled } from 'twin.macro';

type ScrollBarsProps = {
  children: ReactNode;
  autoHide?: boolean;
  /**
   * Will be called with the native scroll event
   */
  onScroll?: React.UIEventHandler<any>;
  /**
   * Runs inside the animation frame. Passes some handy values about the current scroll position
   */
  onScrollFrame?: (values: positionValues) => void;
  /**
   * Called when scrolling starts
   */
  onScrollStart?: () => void;
  /**
   * Called when scrolling stops
   */
  onScrollStop?: () => void;
  /**
   * Called when ever the component is updated. Runs inside the animation frame
   */
  onUpdate?: (values: positionValues) => void;
} & ScrollbarProps;

const StyledThumb = styled.div<{ isVertical: boolean }>`
  ${() => tw`
cursor-default bg-grey-900 rounded-full
bg-opacity-30 hover:bg-opacity-40 active:bg-opacity-70
transition-[color, width, height] duration-75
`};
  ${({ isVertical }) =>
    isVertical
      ? tw`w-[50%]! hover:w-[100%]! active:w-[100%]!`
      : tw`h-[50%]! hover:h-[100%]! active:h-[100%]!`};
`;

const StyledTrack = styled.div<{ isVertical: boolean }>`
  ${() => tw`z-scrollBar`};
  ${({ isVertical }) =>
    isVertical
      ? tw`w-3! top-0.5 bottom-3 right-0.5 flex justify-center`
      : tw`h-3! left-0.5 right-0.5 bottom-0.5 flex items-center`};
`;

const StyledView = tw.div`pr-3 pb-3`;

/**
 * `TdsScrollBars` is built using `react-custom-scrollbars-2`, please refer
 * to its [documentation](https://github.com/RobPethick/react-custom-scrollbars-2) for more information.
 */
export const TdsScrollBars = ({ children, ...props }: ScrollBarsProps) => (
  <Scrollbars
    {...props}
    renderThumbHorizontal={(props) => <StyledThumb {...props} />}
    renderThumbVertical={(props) => <StyledThumb isVertical {...props} />}
    renderTrackHorizontal={(props) => <StyledTrack {...props} />}
    renderTrackVertical={(props) => <StyledTrack isVertical {...props} />}
    renderView={(props) => <StyledView {...props} />}
  >
    {children}
  </Scrollbars>
);
