//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconCalculator = ({
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
        d="M960-.096H64c-35.184 0-64 28.816-64 64v896.192c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V63.904c0-35.184-28.816-64-64-64zm0 960.193H64V63.905h896v896.192zM224 352.305h64v64c0 17.664 14.336 32 32 32s32-14.336 32-32v-64h64c17.664 0 32-14.336 32-32s-14.336-32-32-32h-64v-64c0-17.664-14.336-32-32-32s-32 14.336-32 32v64h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32zm209.136 238.847c-12.496-12.496-32.752-12.497-45.248-.001L320 659.023l-67.887-67.872c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.769 0 45.265l67.872 67.872-67.872 67.872c-12.496 12.496-12.496 32.768 0 45.264s32.752 12.497 45.264 0L320 749.568l67.888 67.872c12.496 12.496 32.752 12.496 45.248 0s12.496-32.768 0-45.264l-67.872-67.873 67.872-67.872c12.496-12.511 12.496-32.767 0-45.279zM608 352.304h192c17.664 0 32-14.336 32-32s-14.336-32-32-32H608c-17.664 0-32 14.336-32 32s14.336 32 32 32zm0 320h192c17.664 0 32-14.336 32-32s-14.336-32-32-32H608c-17.664 0-32 14.336-32 32s14.336 32 32 32zm0 128h192c17.664 0 32-14.336 32-32s-14.336-32-32-32H608c-17.664 0-32 14.336-32 32s14.336 32 32 32z"
      />
    </svg>
  );
};