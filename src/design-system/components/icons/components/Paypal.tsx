//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconPaypal = ({
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
        d="M318.753 855.434H103.101c-8.752 0-17.154-3.85-22.756-10.678s-7.877-15.579-6.302-24.33l138.284-752.16c8.227-41.135 42.01-68.441 84.371-68.441H628.58c133.383 0 223.18 85.246 223.18 212.152 0 127.956-88.222 366.89-300.549 366.89H406.1l-58.463 253.637c-3.152 13.477-15.055 22.93-28.883 22.93zm-180.118-58.991 156.66-.002 58.29-253.637c3.15-13.477 15.054-22.93 28.882-22.93h168.74c168.567 0 241.386-203.75 241.386-307.726 0-94.347-62.84-152.986-164.015-152.986H296.697c-8.227 0-22.756 2.626-26.256 20.48zm282.516 227.73H205.496c-8.752 0-16.979-3.85-22.58-10.502s-8.052-15.58-6.477-24.156l27.658-157.538c2.8-16.105 18.028-26.782 34.131-23.982 16.105 2.801 26.783 18.204 23.982 34.133l-21.53 122.88h156.662l55.84-256.088c2.975-13.653 15.053-23.281 28.881-23.281h168.741c168.566 0 241.385-203.75 241.385-307.725 0-67.742-28.532-114.479-84.546-138.81-14.879-6.477-21.88-23.98-15.228-38.858 6.476-15.054 23.98-21.88 38.858-15.405 77.37 33.609 120.08 102.226 120.08 193.072 0 127.956-88.223 366.89-300.549 366.89H505.87l-55.839 256.088c-2.975 13.654-15.053 23.281-28.882 23.281h.002zM459.833 413.1h-58.116c-8.752 0-16.979-3.85-22.756-10.678-5.6-6.652-8.052-15.579-6.477-24.156l38.86-215.653c2.45-14.003 14.704-24.331 29.056-24.331h93.998c35.535 0 63.892 11.378 81.921 32.733 19.606 23.282 26.081 56.365 19.08 98.55-14.177 100.298-66.69 143.534-175.567 143.534zm-22.757-59.165 22.756-.001c87.871 0 108.526-31.508 117.279-93.473 2.8-17.329 4.025-39.56-5.776-51.288-8.227-9.802-24.681-11.727-36.934-11.727h-69.317l-28.007 156.488z"
      />
    </svg>
  );
};
