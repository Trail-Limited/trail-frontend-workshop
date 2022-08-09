//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconDirection = ({
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
        d="m966.912 298.16-179.121-192A32.105 32.105 0 0 0 764.367 96h-267.12l-1.008-66c0-16.56-14.336-30-32-30s-30 13.44-30 30l-.975 66H80.496c-17.68 0-32 14.32-32 32v384c0 17.68 14.32 32 32 32h352.336v450c0 16.56 14.336 30 32 30s32-13.44 32-30V544h267.536c8.88 0 17.344-3.68 23.408-10.16l179.12-192c11.472-12.304 11.472-31.376.016-43.68zM750.463 480H112.495V160h637.968l149.28 160z"
      />
    </svg>
  );
};
