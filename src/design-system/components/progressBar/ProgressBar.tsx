import { AriaProgressBarProps } from '@react-types/progress';
import { useProgressBar } from 'react-aria';
import { css, styled } from 'twin.macro';
import { TdsTypography } from '../../styles/typography/Typography';
import tw from 'twin.macro';
import { ReactNode } from 'react';

type ProgressBarProps = {
  value: number | undefined;
  label: ReactNode;
  isIndeterminate?: boolean;
} & Pick<AriaProgressBarProps, 'label' | 'value'>;

type StyledProgressBarProps = {
  value: number | undefined;
  isIndeterminate: boolean;
};

const StyledProgressTrack = tw.div`
  h-5 border-4 border-white bg-white rounded-full overflow-hidden
  box-shadow[0px 0px 0px 1px #D4E2F2]
`;

const StyledProgressBar = styled.div<StyledProgressBarProps>`
  ${() => tw`h-full bg-blue-400 rounded-full transition-all transform-gpu`};
  ${({ value, isIndeterminate }) => {
    return (
      !isIndeterminate &&
      css`
        width: ${value ?? 0}%;
      `
    );
  }};

  ${({ isIndeterminate }) =>
    isIndeterminate &&
    css`
      @keyframes indeterminateAnimation {
        0% {
          transform: translateX(0) scaleX(0);
        }
        40% {
          transform: translateX(0) scaleX(1);
        }
        100% {
          transform: translateX(200%) scaleX(1.2);
        }
      }

      width: 50%;
      animation: indeterminateAnimation 1s infinite linear;
      transform-origin: 0% 50%;
    `};
`;

export const TdsProgressBar = ({
  value,
  label,
  isIndeterminate = false,
}: ProgressBarProps) => {
  let { progressBarProps, labelProps } = useProgressBar({
    minValue: 0,
    maxValue: 100,
    value,
    label,
    showValueLabel: true,
    isIndeterminate,
  });

  return (
    <div {...progressBarProps} tw="space-y-3 w-full text-center">
      <div tw="text-trailgrey-800 font-bold">
        {progressBarProps['aria-valuetext']}
      </div>
      <StyledProgressTrack>
        <StyledProgressBar isIndeterminate={isIndeterminate} value={value} />
      </StyledProgressTrack>
      <div>
        <TdsTypography tw="text-trailgrey-800 block truncate" {...labelProps}>
          {label}
        </TdsTypography>
      </div>
    </div>
  );
};
