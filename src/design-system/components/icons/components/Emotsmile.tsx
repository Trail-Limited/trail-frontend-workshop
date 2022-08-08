//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconEmotsmile = ({
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
        d="M781.264 607.152c-16.256-7.28-35.089.064-42.257 16.192-.656 1.424-66.128 144.208-229.439 146.128-1.008 0-2 .033-3.008.033-153.664 0-219.937-140.368-222.688-146.4-7.311-16-26.191-23.12-42.319-15.872-16.096 7.28-23.248 26.208-15.968 42.335 3.408 7.569 85.376 183.937 280.848 183.937 1.28 0 2.592-.032 3.872-.032 203.872-2.4 283.84-176.656 287.12-184.064 7.248-16.16-.032-35.072-16.16-42.256zM511.999.001c-282.784 0-512 229.216-512 512s229.216 512 512 512 512-229.216 512-512-229.216-512-512-512zm0 960c-247.024 0-448-200.976-448-448s200.976-448 448-448 448 200.976 448 448-200.976 448-448 448zM351.503 479.825c35.264 0 63.84-28.592 63.84-63.824s-28.576-63.824-63.84-63.824c-35.28 0-63.84 28.591-63.84 63.824s28.56 63.824 63.84 63.824zm320 0c35.264 0 63.84-28.592 63.84-63.824s-28.576-63.824-63.84-63.824c-35.28 0-63.84 28.591-63.84 63.824s28.56 63.824 63.84 63.824z"
      />
    </svg>
  );
};
