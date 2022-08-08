//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconUserFollow = ({
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
        d="M64.064 894.688c0-25.44 19.091-33.405 26.723-36.94l281.04-132.625c20.144-9.248 34.048-28.32 36.752-50.32 2.72-22-6.16-43.84-23.456-57.712-66.48-53.376-97.456-170.688-97.456-233.185V224.002c0-66.864 116.4-159.856 224.128-159.856 108.672 0 223.92 91.536 223.92 159.856v159.92c0 61.552-25.6 179.312-94.256 233.359a63.99 63.99 0 0 0-23.968 57.809c2.624 22.16 16.592 41.312 36.848 50.623l95.92 45.504 15.808-63.872-85.008-39.776c88.656-69.776 118.656-206.832 118.656-283.648V224C799.715 118.08 653.09.146 511.795.146 370.483.146 223.665 118.082 223.665 224v159.92c0 69.872 31.888 211.248 121.393 283.088L64.018 799.633S.066 828.129.066 863.6v96.032c0 35.344 28.64 63.968 63.95 63.968h703.92v-64l-703.871.032v-64.944zm927.875-62.813h-96v-96c0-17.68-14.336-32-32-32s-32 14.32-32 32v96h-96c-17.664 0-32 14.32-32 32 0 17.664 14.336 32 32 32h96v96c0 17.664 14.336 32 32 32s32-14.336 32-32v-96h96c17.664 0 32-14.336 32-32 0-17.68-14.32-32-32-32z"
      />
    </svg>
  );
};
