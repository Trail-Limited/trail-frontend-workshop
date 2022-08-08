//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconUserFollowing = ({
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
        d="m63.504 959.76.002-64.942c0-25.44 19.103-33.424 26.72-36.944l281.04-132.624c20.143-9.248 34.047-28.32 36.752-50.32a63.93 63.93 0 0 0-23.457-57.712c-66.48-53.376-97.456-170.704-97.456-233.185v-159.92c0-66.864 116.4-159.856 224.128-159.856 108.672 0 223.936 91.536 223.936 159.856v159.92c0 61.552-25.6 179.312-94.256 233.376a63.99 63.99 0 0 0-23.967 57.808c2.624 22.16 16.591 41.313 36.847 50.624l162.24 77.248 38.144-54.064-173.664-81.344c88.656-69.776 118.656-206.849 118.656-283.665v-159.92C799.169 118.176 652.545.241 511.233.241S223.105 118.177 223.105 224.096v159.92c0 69.872 31.888 211.248 121.392 283.088L63.457 799.76S-.495 828.256-.495 863.728v96.032c0 35.344 28.64 63.968 63.951 63.968h639.712l-52-63.984zm948.706-236.253c-13.904-10.912-34.032-8.432-44.912 5.473L830.45 937.684l-85.056-85.073c-12.496-12.496-32.768-12.496-45.264 0s-12.496 32.752 0 45.248l113.136 113.136c12.496 12.496 32.752 12.496 45.248 0 3.04-3.024 5.312-6.544 6.88-10.288l152.304-232.304c10.88-13.904 8.432-34.016-5.488-44.896z"
      />
    </svg>
  );
};
