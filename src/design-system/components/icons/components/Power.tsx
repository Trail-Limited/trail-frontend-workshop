//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconPower = ({
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
        d="M701.552 164.096c-16-7.456-35.025-.59-42.53 15.425-7.519 16-.591 35.04 15.409 42.544 162.336 76 250.496 251.952 214.353 427.872-42.912 208.88-247.664 343.808-456.56 301.023-101.168-20.785-184.208-79.712-241.056-165.936-56.864-86.256-76.736-189.504-55.952-290.672 24.704-120.224 102.624-219.328 213.76-271.904 15.968-7.552 22.8-26.624 15.231-42.609-7.552-15.952-26.592-22.736-42.592-15.232C192.111 225.87 101.327 341.342 72.527 481.47c-24.223 117.936-1.07 238.256 65.185 338.784 66.272 100.48 163.696 169.169 281.632 193.409a450.431 450.431 0 0 0 90.751 9.248c209.456 0 397.648-147.12 441.376-360.112 42.112-205.008-60.655-410.096-249.919-498.704zM512.015 416.001c17.664 0 32-14.336 32-32v-352c0-17.664-14.336-32-32-32s-32 14.336-32 32v352c0 17.664 14.336 32 32 32z"
      />
    </svg>
  );
};
