//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconMap = ({
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
        d="M993.184 135.008 672.223 1.939l-319.44 126.432L30.815 2.003c-2.752-.816-5.44-1.12-7.968-1.12C9.712.818 0 10.626 0 25.378v830c0 17.568 13.872 35.872 30.816 40.56l322.336 127.184L672.16 893.618l321.024 126.128c2.752.752 5.44 1.12 7.969 1.12 13.12 0 22.847-9.744 22.847-24.495V175.635c0-17.569-13.872-35.89-30.816-40.625zm-609.185 46.131 256-100.304v761.504l-256 101.184V181.139zm-320-94.448 256 94.577v761.76l-256-104.272V86.692zm896 851.314-256-96.384V81.797l256 110.384v745.824z"
      />
    </svg>
  );
};
