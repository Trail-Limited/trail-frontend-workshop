//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconControlEnd = ({
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
        d="M943.936 0c-17.664 0-31.998 14.338-31.998 32.002v470c-2.88-18.192-13.44-34.465-29.375-44.37L146.851 11.026a64.147 64.147 0 0 0-33.776-9.649A63.765 63.765 0 0 0 81.987 9.44c-20.32 11.28-32.912 32.704-32.912 55.936l-1.008 893.232a63.958 63.958 0 0 0 32.912 55.937 63.933 63.933 0 0 0 31.087 8.064c11.712 0 23.471-3.215 33.775-9.664l736.72-446.608c15.936-9.872 26.495-26.16 29.375-44.352V992c0 17.664 14.336 32 32 32s32-14.336 32-32V32c0-17.664-14.32-32-32-32.001zM112.065 958.61l.992-893.216 735.744 446.592z"
      />
    </svg>
  );
};
