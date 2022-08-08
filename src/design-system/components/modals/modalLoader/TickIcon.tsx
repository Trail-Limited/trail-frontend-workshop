import { theme } from 'twin.macro';
import { BaseProps } from '../../../types/baseProps';

export const TdsTickIcon = (props: BaseProps) => (
  <svg fill="none" viewBox="0 0 68 68" {...props}>
    <circle cx="34" cy="34" r="34" fill={theme`colors.green.700`} />
    <path
      d="M31.083 36.624 23.5 29.278 17 35.575l14.083 12.592 22.75-20.987-6.5-7.346-16.25 16.79Z"
      fill={theme`colors.white`}
    />
  </svg>
);
