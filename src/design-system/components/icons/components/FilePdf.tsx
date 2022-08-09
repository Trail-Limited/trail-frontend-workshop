//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconFilePdf = ({
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
        fill="#CC4B4C"
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
        d="M13.729 26.622v1.503h-.88v-4.266h1.665c.32 0 .601.059.843.176.245.117.432.284.563.501.13.215.196.46.196.735 0 .418-.143.748-.43.99-.286.241-.681.361-1.187.361h-.77Zm0-.712h.785c.232 0 .409-.055.53-.164.123-.11.184-.265.184-.469a.703.703 0 0 0-.184-.507c-.123-.128-.293-.195-.51-.199h-.806v1.34Zm2.994 2.215v-4.266h1.312c.375 0 .71.085 1.005.255.297.168.528.409.694.721.166.31.25.664.25 1.06v.197c0 .396-.083.749-.247 1.057a1.742 1.742 0 0 1-.688.718c-.297.17-.632.256-1.005.258h-1.321Zm.879-3.554v2.848h.424c.344 0 .607-.112.788-.337.182-.225.275-.546.279-.964v-.225c0-.434-.09-.762-.27-.985-.18-.224-.442-.337-.788-.337h-.433Zm5.589 1.811h-1.687v1.743h-.879v-4.266h2.777v.712h-1.898v1.102h1.687v.709Z"
        fill="#fff"
      />
    </svg>
  );
};
