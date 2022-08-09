//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconFileDoc = ({
  title: titleSource,
  color,
  size = "md",
  isStandalone = false,
  ...props
}: IconProps): JSX.Element => {
  if (isStandalone && !titleSource) {
    console.warn(
      "You must include a title for a standalone icon to make it accessible. See Storybook documentation for more details."
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
        fill="#2197EF"
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
        d="M12.395 28.125v-4.266h1.312c.375 0 .71.085 1.005.255.297.168.528.409.694.721.166.31.25.664.25 1.06v.197c0 .396-.083.749-.247 1.057a1.742 1.742 0 0 1-.688.718c-.297.17-.632.256-1.005.258h-1.321Zm.878-3.554v2.848h.425c.344 0 .607-.112.788-.337.182-.225.275-.546.279-.964v-.225c0-.434-.09-.762-.27-.985-.18-.224-.442-.337-.788-.337h-.434Zm6.527 1.518c0 .42-.073.788-.222 1.104-.148.317-.361.56-.639.733a1.755 1.755 0 0 1-.949.258c-.353 0-.669-.085-.946-.255a1.695 1.695 0 0 1-.645-.727 2.51 2.51 0 0 1-.231-1.09v-.21c0-.42.075-.79.226-1.108.152-.32.366-.566.641-.735.277-.172.594-.258.95-.258.355 0 .67.086.946.258.277.17.49.415.641.735.153.318.229.686.229 1.104v.19Zm-.89-.194c0-.447-.08-.787-.24-1.019a.783.783 0 0 0-.686-.349.782.782 0 0 0-.682.346c-.16.229-.241.564-.243 1.008v.208c0 .435.08.773.24 1.014.16.24.39.36.691.36a.775.775 0 0 0 .68-.346c.158-.232.238-.57.24-1.014v-.208Zm4.878.809c-.033.46-.203.82-.51 1.084-.304.264-.707.396-1.207.396-.547 0-.977-.184-1.292-.551-.312-.37-.468-.875-.468-1.518v-.26c0-.41.072-.772.216-1.085a1.62 1.62 0 0 1 .618-.717c.27-.168.582-.252.938-.252.492 0 .889.132 1.19.395.3.264.474.634.52 1.11h-.878c-.021-.275-.099-.474-.231-.597-.131-.125-.332-.188-.601-.188-.293 0-.513.106-.66.317-.144.209-.218.534-.222.976v.322c0 .46.07.798.208 1.01.14.213.361.32.662.32.272 0 .474-.062.607-.185.134-.125.212-.317.231-.577h.88Z"
        fill="#fff"
      />
    </svg>
  );
};
