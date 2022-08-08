//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconFileGeneric = ({
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
      fill="none"
      viewBox="0 0 36 36"
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
        d="M9 8a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586L22.5 10.5l3.914 3.914A2 2 0 0 1 27 15.828V28.75a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V8Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.438 13.5V6.75h1.125v6.75c0 .518.42.938.937.938h6.75v1.124H19.5a2.062 2.062 0 0 1-2.063-2.062Z"
        fill="#6D8BAC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.532 6.437A1.5 1.5 0 0 0 17.474 6H10.5A1.5 1.5 0 0 0 9 7.5v21.75a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V15.493a1.5 1.5 0 0 0-.442-1.063l-8.026-7.993ZM10.125 7.5v21.75c0 .207.168.375.375.375h15a.375.375 0 0 0 .375-.375V15.493c0-.1-.04-.196-.11-.266l-8.027-7.993a.375.375 0 0 0-.264-.109H10.5a.375.375 0 0 0-.375.375Z"
        fill="#6D8BAC"
      />
    </svg>
  );
};
