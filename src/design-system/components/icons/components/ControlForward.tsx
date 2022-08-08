//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconControlForward = ({
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
        d="m450.08 197.904 505.28 314.097-505.28 314.096V579.121l-384 246.976V197.905l384 246.992v-255.84zm2.656-63.999c-10.72 0-22.736 2.67-32.433 8.062-20.303 11.28-34.223 32.705-34.223 55.937v131.84L87.856 143.552c-10.32-6.4-21.376-9.648-33.12-9.648-10.689 0-15.729 2.671-25.44 8.063-20.29 11.28-27.216 32.704-27.216 55.937v628.192c0 23.248 7.248 44.656 27.568 55.936 9.68 5.376 17.727 8.064 28.432 8.064 11.727 0 20.783-3.216 31.103-9.665l296.896-186.176v131.84c0 23.248 13.92 44.657 34.224 55.937 9.696 5.376 21.056 8.064 31.776 8.064 11.712 0 23.792-3.215 34.112-9.664l505.456-314.096c18.785-11.664 30.288-32.223 30.288-54.336s-11.376-42.671-30.16-54.351l-505.28-314.096a63.906 63.906 0 0 0-33.76-9.649z"
      />
    </svg>
  );
};
