import tw, { styled } from 'twin.macro';
import { BaseProps } from '../../types/baseProps';

const StyledCircularLoader = styled.svg`
  animation: rotate 2s linear infinite;
  transform-origin: center center;

  ${() => tw`h-28 w-28`};

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const StyledLoaderPath = styled.circle`
  animation: dash 3s ease-in-out infinite, color-white 6s ease-in-out infinite;
  stroke-dasharray: 89, 200;
  stroke-dashoffset: -10;
  stroke-linecap: round;

  @keyframes dash {
    0% {
      stroke-dasharray: 1;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 5, 200;
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dasharray: 200, 200;
      stroke-dashoffset: 0;
    }
  }

  @keyframes color-white {
    0% {
      stroke: #fff;
    }

    40% {
      stroke: #fff;
    }

    66% {
      stroke: #fff;
    }

    80%,
    100% {
      stroke: #fff;
    }
  }
`;

export const TdsCircularLoader = (props: BaseProps) => {
  return (
    <StyledCircularLoader viewBox="25 25 50 50" {...props}>
      <StyledLoaderPath
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="#fff"
        stroke-width="2"
      />
    </StyledCircularLoader>
  );
};
