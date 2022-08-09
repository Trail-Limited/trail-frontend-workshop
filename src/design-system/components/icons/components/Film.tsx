//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconFilm = ({
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
        d="M800 272.288h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm-640-576h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zM960 15.904H64c-35.184 0-64 28.816-64 64v864.192c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V79.904c0-35.184-28.816-64-64-64zm0 928.193H64V79.905h896v864.192z"
      />
    </svg>
  );
};
