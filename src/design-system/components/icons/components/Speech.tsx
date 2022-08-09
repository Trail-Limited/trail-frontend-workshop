//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconSpeech = ({
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
        d="M960 63.6H64.001c-35.344 0-64 28.656-64 64v577.504c0 35.344 28.656 64 64 64h127.536v159.312a31.968 31.968 0 0 0 19.632 29.504 31.99 31.99 0 0 0 12.367 2.496 31.931 31.931 0 0 0 22.432-9.184l185.024-182.128H960c35.343 0 64-28.656 64-64V127.6c0-35.343-28.657-64-64-64zm.001 641.488H404.785L255.537 852V705.088H64.001V127.6h896v577.488zm-736-256.08h576c17.664 0 32-14.336 32-32s-14.336-32-32-32h-576c-17.664 0-32 14.336-32 32s14.336 32 32 32zm0-128h576c17.664 0 32-14.336 32-32s-14.336-32-32-32h-576c-17.664 0-32 14.336-32 32s14.336 32 32 32zm0 256h384c17.664 0 32-14.336 32-32s-14.336-32-32-32h-384c-17.664 0-32 14.336-32 32s14.336 32 32 32z"
      />
    </svg>
  );
};
