//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconCamera = ({
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
        d="M928 224H780.816L704 96H320l-76.8 128H96c-32 0-96 32-96 95.008V832c0 53.008 48 96 89.328 96H930c42 0 94-44.992 94-94.992V320c0-32-32-96-96-96zm32 609.008c0 12.624-20.463 30.288-29.999 31.008H89.521c-7.408-.609-25.52-15.04-25.52-32.016V319.008c0-20.272 27.232-30.496 32-31.008h183.44l76.8-128h313.647l57.12 96.945 17.6 31.055H928c22.56 0 31.68 29.472 32 32v513.008zM512.001 320c-123.712 0-224 100.288-224 224s100.288 224 224 224 224-100.288 224-224-100.288-224-224-224zm0 384c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
      />
    </svg>
  );
};
