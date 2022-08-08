//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconHome = ({
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
        d="M1016.7 513.36 536.331 10.192a31.924 31.924 0 0 0-23.088-9.84 32.038 32.038 0 0 0-23.088 9.84L7.307 513.344c-12.24 12.752-11.808 32.992.944 45.248 12.752 12.224 32.992 11.872 45.248-.944l43.007-44.832v478.832c0 17.68 14.336 32 32 32h223.552c17.632 0 31.936-14.256 32-31.905l1.008-319.664h254.992v319.568c0 17.68 14.32 32 32 32H895.53c17.68 0 32-14.32 32-32V512.655l42.992 45.04a31.997 31.997 0 0 0 23.09 9.84c7.967 0 15.967-2.944 22.16-8.944 12.736-12.224 13.152-32.48.928-45.232zm-153.165-58.544v504.831H704.063V640.095c0-17.68-14.32-32-32-32h-318.88c-17.632 0-31.936 14.256-32 31.904l-1.008 319.664H160.511V454.815c0-2.64-.416-5.168-1.008-7.632L513.263 78.56l351.424 368.208c-.688 2.592-1.152 5.264-1.152 8.048z"
      />
    </svg>
  );
};
