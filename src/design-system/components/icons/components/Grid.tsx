//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconGrid = ({
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
        d="M960 1024H640c-35.344 0-64-28.656-64-64V640c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H640v320h320V640zm0-192H640c-35.344 0-64-28.656-64-64V64c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H640v320h320V64zm-576 960H64c-35.344 0-64-28.656-64-64V640c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H64v320h320V640zm0-192H64c-35.344 0-64-28.656-64-64V64C0 28.656 28.656 0 64 0h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H64v320h320V64z"
      />
    </svg>
  );
};
