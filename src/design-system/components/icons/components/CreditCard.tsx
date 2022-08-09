//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconCreditCard = ({
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
        d="M928.144 176H95.856c-53.024 0-96 42.976-96 96v480c0 53.024 42.976 96 96 96h832.288c53.024 0 96-42.976 96-96V272c0-53.024-42.976-96-96-96zM95.856 240h832.288c17.664 0 32 14.336 32 32v64H63.856v-64c0-17.664 14.351-32 32-32zm832.288 544H95.856c-17.664 0-32-14.336-32-32V464h896.288v288c0 17.664-14.352 32-32 32z"
      />
    </svg>
  );
};
