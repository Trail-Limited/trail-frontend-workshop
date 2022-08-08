//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconCamrecorder = ({
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
        d="M638.128 223.376c1.28 0 2.32 1.008 2.32 2.24v127.872c0 23.664 13.056 45.424 34 56.528a63.763 63.763 0 0 0 30 7.471c12.56 0 27.056-3.68 37.84-10.991L960 283.264V739.68L741.088 620.16a63.92 63.92 0 0 0-36.655-11.536 64.277 64.277 0 0 0-29.568 7.217c-21.12 11.024-34.4 32.88-34.432 56.688l-.16 125.84c0 1.248-1.008 2.256-2.288 2.256H66.289c-1.28 0-2.289-.992-2.289-2.225l.16-572.784c0-1.248 1.008-2.24 2.289-2.24h571.68zm352.24-32.032c-6.816 0-20.291 2.016-27.97 9.664l-257.969 152.48V225.616c0-36.56-29.68-66.24-66.319-66.24H66.43c-36.672 0-66.288 29.665-66.288 66.241l-.144 572.752c0 36.56 29.632 66.256 66.288 66.256h571.712c36.657 0 66.289-29.68 66.289-66.256l.16-125.744 262.976 153.312c7.712 7.68 16.256 6.687 23.088 6.687 7.087 0 12.368-2.16 13.024-2.432 12.432-5.184 20.464-17.184 20.464-30.688V224.528c0-13.504-8.032-25.551-20.464-30.656-.72-.32-6.031-2.528-13.167-2.528z"
      />
    </svg>
  );
};
