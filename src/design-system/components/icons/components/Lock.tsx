//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconLock = ({
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
        d="M800 384h-32V261.872C768 115.024 661.744 0 510.816 0 359.28 0 256 117.472 256 261.872V384h-32c-70.592 0-128 57.408-128 128v384c0 70.592 57.408 128 128 128h576c70.592 0 128-57.408 128-128V512c0-70.592-57.408-128-128-128zM320 261.872C320 152.784 394.56 64 510.816 64 625.872 64 704 150.912 704 261.872V384H320V261.872zM864.001 896c0 35.28-28.72 64-64 64h-576c-35.28 0-64-28.72-64-64V512c0-35.28 28.72-64 64-64h576c35.28 0 64 28.72 64 64v384zm-352-320c-35.344 0-64 28.656-64 64 0 23.632 12.96 44.032 32 55.12V800c0 17.664 14.336 32 32 32s32-14.336 32-32V695.12c19.04-11.088 32-31.504 32-55.12 0-35.344-28.656-64-64-64z"
      />
    </svg>
  );
};
