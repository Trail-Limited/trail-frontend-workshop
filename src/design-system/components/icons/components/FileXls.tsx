//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconFileXls = ({
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
        d="M9 23.25a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6Z"
        fill="#1FCCAD"
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.25 22.5H9.75v-1.125h16.5V22.5Z"
        fill="#6D8BAC"
      />
      <path
        d="m14.528 25.33.8-1.47h1.01l-1.241 2.115 1.274 2.15H15.35l-.82-1.494-.821 1.494h-1.023l1.275-2.15-1.242-2.116h1.01l.8 1.471Zm3.167 2.089h1.866v.706h-2.745v-4.266h.88v3.56Zm4.585-.413a.447.447 0 0 0-.175-.381c-.118-.09-.329-.184-.633-.281a4.575 4.575 0 0 1-.724-.293c-.484-.262-.727-.614-.727-1.058 0-.23.065-.435.194-.615a1.27 1.27 0 0 1 .56-.425c.244-.101.517-.152.82-.152.304 0 .576.055.814.167.239.11.423.264.554.466.133.2.2.43.2.685h-.88c0-.195-.061-.346-.184-.454-.123-.11-.296-.164-.519-.164-.215 0-.382.046-.5.138a.426.426 0 0 0-.18.357c0 .139.07.255.208.349.141.094.347.181.619.263.5.15.864.337 1.092.56.229.223.343.5.343.832 0 .37-.14.66-.419.87-.28.21-.655.314-1.128.314-.328 0-.627-.06-.896-.18a1.438 1.438 0 0 1-.618-.494 1.27 1.27 0 0 1-.211-.727h.881c0 .47.282.706.844.706.21 0 .372-.042.49-.126a.418.418 0 0 0 .175-.357Z"
        fill="#fff"
      />
    </svg>
  );
};
