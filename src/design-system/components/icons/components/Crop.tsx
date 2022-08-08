//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconCrop = ({
  title: titleSource,
  color,
  size = 'md',
  isStandalone = false,
  ...props
}: IconProps): JSX.Element => {
  if (isStandalone && !titleSource) {
    console.warn(
      'You must include a title for a standalone icon to make it accessible. See Storybook documentation for more details.'
    );
  }

  const titleId = createGuid();
  const title = isStandalone ? titleSource : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      css={css`
        ${getIconSizeStyle(size)};
      `}
      aria-hidden={!isStandalone}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="m992 800-128 .002V206.098L983.456 86.802c12.48-12.496 12.48-32.769 0-45.265-12.496-12.496-32.769-12.496-45.265 0L819.583 160.001H224v-128c0-17.68-14.32-32-32-32s-32 14.32-32 32v128H32c-17.68 0-32 14.32-32 32 0 17.664 14.32 32 32 32h128v608c0 2.945.945 5.6 1.681 8.288.32 1.216.256 2.464.72 3.632 3.216 8.065 9.6 14.433 17.664 17.681 1.376.56 2.88.495 4.288.847 2.528.64 4.929 1.551 7.648 1.551h608v128c0 17.68 14.32 32 32 32s32-14.32 32-32V864h128c17.68 0 32-14.32 32-32s-14.32-32-32-32zM755.488 224.002 224 754.786V224.002h531.488zm-486.208 576L800 270.018v529.984z"
      />
    </svg>
  );
};
