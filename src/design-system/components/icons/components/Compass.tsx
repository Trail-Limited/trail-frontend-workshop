//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconCompass = ({
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
        d="m733.184 280.272-313.15 134.64a30.023 30.023 0 0 0-13.151 13.151L263.427 717.28c-5.872 11.537-3.745 25.537 5.311 34.785a30.222 30.222 0 0 0 21.536 9.024c4.432 0 8.944-.976 13.12-3.008L609.12 631.104a29.8 29.8 0 0 0 13.216-12.497l150.88-296.896c6.432-11.6 4.527-26.031-4.656-35.567-9.216-9.536-23.584-11.872-35.376-5.872zM357.857 664.816l87.008-177.681 87.872 109.984zm226.848-105.2-88.8-111.152 176.784-69.76zM512.001 0c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z"
      />
    </svg>
  );
};
