import { theme } from 'twin.macro';

type SortIconProps = {
  isDesc?: boolean;
};

export const TdsSortIcon = ({ isDesc }: SortIconProps) => (
  <svg
    width={theme`spacing[3.5]`}
    height={theme`spacing[3.5]`}
    css={{ transform: isDesc ? 'rotate(180deg)' : 'none' }}
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M14 7A7 7 0 100 7a7 7 0 0014 0zM.861 7C.861 3.623 3.623.875 7 .875A6.132 6.132 0 0113.125 7 6.132 6.132 0 017 13.125C3.623 13.125.861 10.377.861 7zm6.581 3.067V5.139L9.025 6.72a.437.437 0 10.618-.618L6.991 3.519 4.339 6.103a.436.436 0 000 .618c.17.171.447.171.618 0l1.61-1.61v4.956a.438.438 0 00.875 0z"
      fill={theme`colors.blue.500`}
    />
  </svg>
);
