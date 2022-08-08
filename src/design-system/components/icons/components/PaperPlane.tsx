//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconPaperPlane = ({
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
        d="M1004.03 0c-6.096 0-13.52 1.73-22.096 5.361L27.278 410.45c-34.368 14.577-36.544 42.689-4.832 62.449l269.76 168.032c31.712 19.744 73.648 62.08 93.184 94.047l161.712 264.768c9.28 15.184 20.496 22.72 31.28 22.72 11.92 0 23.28-9.152 31.025-27.232L1017.663 41.49C1028.718 15.617 1022.415 0 1004.03 0zM325.552 583.922 106.896 447.713l733.616-311.248L368.32 616.657c-14.432-12.8-29.088-24.224-42.768-32.735zM572.72 915.265l-130.432-213.52c-7.696-12.609-17.856-26.05-29.185-39.393l474.384-482.384z"
      />
    </svg>
  );
};
