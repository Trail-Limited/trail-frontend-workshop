//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconSupport = ({
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
        d="M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm128 82.976c144.224 42.992 257.648 156.8 300.704 301.023H733.136A257.472 257.472 0 0 0 640 290.943zm63.633 429.232c0 105.936-85.792 191.808-191.632 191.808s-191.632-85.872-191.632-191.808 85.808-191.823 191.632-191.823 191.632 85.888 191.632 191.823zM448.001 68.928c20.912-2.992 42.256-4.624 64-4.624 21.727 0 43.088 1.632 64 4.624v195.808c-20.48-5.296-41.856-8.4-64-8.4s-43.504 3.104-64 8.4V68.928zm-64 14.048v207.968c-38.56 22.384-70.72 54.544-93.136 93.056H83.297c43.04-144.224 156.48-258.031 300.704-301.024zM64.305 512.159c0-21.824 1.855-43.169 4.88-64.161h195.392c-5.312 20.512-8.24 41.983-8.24 64.176 0 22.064 2.912 43.425 8.16 63.825H69.137c-2.975-20.88-4.832-42.144-4.832-63.84zM384 941.326C239.664 898.318 126.193 784.35 83.201 639.998h207.472c22.432 38.656 54.655 70.945 93.327 93.393v207.936zm192.001 14.047c-20.912 2.992-42.273 4.624-64 4.624-21.744 0-43.088-1.648-64-4.624V759.597c20.496 5.296 41.856 8.4 64 8.4s43.52-3.104 64-8.4v195.776zm64-14.048V733.39c38.656-22.448 70.897-54.736 93.313-93.392h207.472c-42.993 144.336-156.464 258.32-300.784 301.328zm119.504-365.327c5.248-20.4 8.16-41.76 8.16-63.825 0-22.193-2.928-43.664-8.256-64.176h195.408c3.008 20.992 4.88 42.336 4.88 64.16 0 21.697-1.84 42.977-4.832 63.841h-195.36z"
      />
    </svg>
  );
};
