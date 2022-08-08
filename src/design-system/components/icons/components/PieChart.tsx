//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconPieChart = ({
  title: titleSource,
  color,
  size = 'md',
  isStandalone = false,
  ...props
}: IconProps): JSX.Element => {
  if (isStandalone && !titleSource) {
    console.warn(
      'You must include a title for a standalone icon to make it accessible. See Storybook documentation for more details.'
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
        d="M575.6 93.408c-17.664 0-32.001 14.337-32.001 32.001s14.336 32 32 32c226.448 0 384.4 165.472 384.4 391.903C959.999 775.776 775.775 960 549.327 960c-226.432 0-391.92-163.6-391.92-390.063 0-17.664-14.336-32-32-32s-32 14.336-32 32c0 261.744 194.192 454.064 455.92 454.064s474.672-212.944 474.672-474.688c0-261.712-186.672-455.904-448.399-455.904v-.001zm-95.345 354.849V32.001c0-17.664-14.336-32-32-32C199.007.001-.001 199.009-.001 448.257c0 17.664 14.336 32 32 32h416.256c17.664 0 32-14.336 32-32zm-64-32H65.311C80.767 227.761 227.759 80.769 416.255 65.313v350.944z"
      />
    </svg>
  );
};
