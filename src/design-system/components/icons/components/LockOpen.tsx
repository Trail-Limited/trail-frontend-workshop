//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconLockOpen = ({
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
        d="m800 385.104-456.96.001-16.56-74.273C298.24 205.456 347.296 100.4 459.568 70.32c111.136-29.776 209.088 33.936 237.824 141.12l13.6 53.967c4.576 17.073 22.112 27.2 39.2 22.624 17.072-4.576 27.2-22.112 22.624-39.184L759.2 194.879C721.216 53.039 588.815-30.561 443.008 8.495 296.64 47.71 227.296 187.919 264.672 327.407l12.864 57.696H224c-70.592 0-128 57.408-128 128v384c0 70.592 57.408 128 128 128h576c70.592 0 128-57.408 128-128v-384c0-70.592-57.408-128-128-128zm64 512c0 35.28-28.72 64-64 64H224c-35.28 0-64-28.72-64-64v-384c0-35.28 28.72-64 64-64h576c35.28 0 64 28.72 64 64v384zm-352-320c-35.344 0-64 28.656-64 64 0 23.632 12.96 44.032 32 55.12v104.88c0 17.664 14.336 32 32 32s32-14.336 32-32v-104.88c19.04-11.088 32-31.504 32-55.12 0-35.344-28.656-64-64-64z"
      />
    </svg>
  );
};
