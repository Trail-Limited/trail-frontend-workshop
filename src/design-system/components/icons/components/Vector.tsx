//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconVector = ({
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
        d="M992 672h-32.273v-1.616c0-161.92-86.528-303.808-215.663-382.384H904.88c11.087 19.04 31.503 32 55.12 32 35.343 0 64-28.656 64-64s-28.657-64-64-64c-23.632 0-44.033 12.96-55.12 32H608v-32c0-17.664-14.336-32-32-32H448c-17.665 0-32 14.336-32 32v32H119.12c-11.088-19.04-31.49-32-55.12-32-35.344 0-64 28.656-64 64s28.656 64 64 64c23.631 0 44.032-12.96 55.12-32h160.8C150.784 366.592 64.273 508.464 64.273 670.384V672H32c-17.664 0-32 14.336-32 32v128c0 17.664 14.336 32 32 32h128c17.664 0 32-14.336 32-32V704c0-17.664-14.336-32-32-32h-31.727v-1.616c0-178.448 122.464-328.672 287.728-371.392V320c0 17.664 14.335 32 32 32h128c17.664 0 32-14.336 32-32v-21.008c165.264 42.736 287.728 192.96 287.728 371.392V672H864c-17.664 0-32 14.336-32 32v128c0 17.664 14.336 32 32 32h128c17.664 0 32-14.336 32-32V704c0-17.664-14.336-32-32-32zM128 800H64v-64h64v64zm416-512h-64v-64h64v64zm416 512h-64v-64h64v64z"
      />
    </svg>
  );
};
