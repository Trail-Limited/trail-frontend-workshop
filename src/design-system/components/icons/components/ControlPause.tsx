//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconControlPause = ({
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
        d="M416.272 0H192.064c-17.664 0-32 14.32-32 32v960c0 17.664 14.336 32 32 32h224.208c17.68 0 32-14.336 32-32V32c0-17.68-14.32-32-32-32zm-32 960H224.064V64h160.208v896zM831.937 0H608.881c-17.68 0-32 14.32-32 32v960c0 17.664 14.32 32 32 32h223.056c17.68 0 32-14.336 32-32V32c0-17.68-14.304-32-32-32zm-32 960H640.881V64h159.056v896z"
      />
    </svg>
  );
};