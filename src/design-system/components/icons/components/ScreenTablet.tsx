//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconScreenTablet = ({
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
        d="M832.144 0H191.856c-53.024 0-96 42.976-96 96v832c0 53.024 42.976 96 96 96h640.288c53.024 0 96-42.976 96-96V96c0-53.024-42.976-96-96-96zm32 928c0 17.664-14.336 32-32 32H191.856c-17.664 0-32-14.336-32-32V96c0-17.664 14.336-32 32-32h640.288c17.664 0 32 14.336 32 32v832zM512.048 800.176c-35.28 0-63.84 28.592-63.84 63.824s28.56 63.841 63.84 63.841c35.264 0 63.84-28.608 63.84-63.84 0-35.233-28.576-63.825-63.84-63.825zm64-704.176h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32z"
      />
    </svg>
  );
};