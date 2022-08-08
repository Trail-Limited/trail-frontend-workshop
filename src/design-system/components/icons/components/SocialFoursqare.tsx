//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconSocialFoursqare = ({
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
        d="M145 75.8c.8-1.8 1.598-3.799 2.197-5.599 14.4-46.2 45.801-69.8 94.4-69.8 115.2-.2 230.4 0 345.602 0h197.8c14.4 0 28.6 1.2 42.4 5.2 29.2 8.401 46.4 30.201 50 60.201 4.2 34.2-4.2 66.8-11 99.6-30.2 146.6-60.8 293.199-91.2 439.999-3.4 16-7.4 31.8-15 46.399-17.4 33.4-47.4 43.8-82.6 44.001-50.6.2-101.2.2-151.8 0-9.2 0-16.2 2.6-22.2 9.6C467.8 747.2 432 788.8 396 830.6c-50.2 58.4-100 117.2-150.8 175.2-15.6 17.8-37 22-59.8 16.8-21-4.8-33-19.2-38.4-39.401-.6-2-1.4-3.8-2-5.8V75.8zm86.198 848.401c1.4-2.6 2.004-4.202 3.004-5.402 32.2-40.4 64.4-80.6 96.8-121.001 36.6-45.6 73.2-91.2 109.4-137 15.6-19.599 34.199-29.799 60.199-29.2 57.6 1.2 115.399.401 172.999.2 27.8 0 39.4-10 44.999-37.2 8.6-42.599 17.6-85.399 26-127.998 5.6-28.4-8-44.6-36.6-44.6-62.2 0-124.4-1.8-186.4.6-51.8 1.8-77-21-74-74.6 2.2-40.8 21.4-61.6 62.4-61.8h237.2c24.6 0 36.4-9.4 41.4-33.4 9-42.6 17.8-85.2 26.6-128 6.2-30.599-6.8-46.599-37.8-46.599h-508.4c-30.4 0-41.4 11-41.4 41.8v789.2c0 4-1.2 8.6 3.6 15z"
      />
    </svg>
  );
};
