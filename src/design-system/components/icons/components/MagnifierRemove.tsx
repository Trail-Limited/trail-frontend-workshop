//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconMagnifierRemove = ({
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
        d="M1014.62 969.04 731.594 684.273c60.608-72.4 97.089-165.761 97.089-267.713C828.683 186.496 643.179-.001 413.13-.001S-3.413 186.495-3.413 416.543 183.083 833.087 413.13 833.087c105.008 0 200.672-38.96 273.696-103.072l282.528 284.304c12.496 12.496 32.769 12.496 45.249 0 12.512-12.512 12.512-32.768.016-45.28zM412.59 768.001c-193.552 0-352-158.448-352-352s158.448-352 352-352 352 158.448 352 352-158.448 352-352 352zm160-384h-320c-17.664 0-32 14.336-32 32s14.336 32 32 32h320c17.664 0 32-14.336 32-32s-14.32-32-32-32z"
      />
    </svg>
  );
};
