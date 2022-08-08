//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconMusicTone = ({
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
        d="M852.608 323.296 539.694 10.384c-9.92-9.92-24.672-11.84-36.607-6.016-12.544 4.336-21.6 16.113-21.6 30.128v708.4c-33.92-25.12-78.432-40.528-127.376-40.528-106.064 0-192.112 71.776-192.112 160.288 0 88.544 86.048 160.336 192.112 160.336 106.112 0 192.08-71.776 192.08-160.336 0-3.92-.368-7.76-.704-11.632V106.688l261.872 261.856c12.48 12.496 32.753 12.496 45.249 0s12.496-32.768 0-45.249zm-499.234 635.28c-75.648 0-128.352-50.544-128.352-95.872s52.72-95.824 128.352-95.824c74.032 0 126 48.4 128.128 92.992v5.68c-2.144 44.576-54.096 93.024-128.128 93.024z"
      />
    </svg>
  );
};
