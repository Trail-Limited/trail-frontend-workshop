//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconSymbolFemale = ({
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
        d="M623.696-.224c-220.912 0-400 179.073-400 400.001 0 98.512 35.68 188.672 94.735 258.368L191.12 786.241 55.855 649.697c-12.48-12.496-32.752-12.496-45.249 0s-12.496 32.752 0 45.248l135.392 136.688L9.646 968.817c-12.496 12.496-12.496 32.784 0 45.248 12.48 12.496 32.753 12.496 45.25 0l136.143-136.992 136.464 137.76c12.497 12.496 32.752 12.496 45.248 0s12.497-32.752 0-45.248L236.143 831.681l127.408-128.192c69.953 59.968 160.77 96.288 260.13 96.288 220.911 0 400-179.088 400-400 .015-220.928-179.073-400-399.985-400zm0 736.545c-185.856 0-336.528-150.688-336.528-336.545S437.84 63.248 623.696 63.248 960.224 213.92 960.224 399.776c.016 185.856-150.656 336.545-336.528 336.545z"
      />
    </svg>
  );
};
