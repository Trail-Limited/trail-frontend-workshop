//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconControlPlay = ({
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
        d="m144.624 65.392 735.744 446.592-736.736 446.624zm0-64a63.765 63.765 0 0 0-31.088 8.063c-20.32 11.28-32.912 32.705-32.912 55.937l-.992 893.216a63.958 63.958 0 0 0 32.912 55.936 63.937 63.937 0 0 0 31.088 8.065c11.712 0 23.472-3.216 33.775-9.664l736.72-446.624a63.94 63.94 0 0 0 30.257-54.336c0-22.112-11.44-42.672-30.257-54.352L178.4 11.025a64.084 64.084 0 0 0-33.775-9.632z"
      />
    </svg>
  );
};
