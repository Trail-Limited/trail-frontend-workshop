//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconDrop = ({
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
        d="M510.4 1022.704c-193.312 0-350.592-155.12-350.592-345.776 0-222.688 311.632-644.848 324.912-662.72a31.98 31.98 0 0 1 25.473-12.913c11.183-.096 19.567 4.593 25.663 12.56 13.408 17.537 328.336 432.226 328.336 663.058 0 190.672-158.72 345.791-353.792 345.791zm.352-935.008c-74.4 105.664-286.943 422.064-286.943 589.217 0 155.376 128.56 281.776 286.592 281.776 159.776 0 289.776-126.4 289.776-281.776.016-173.36-214.145-485.024-289.425-589.217z"
      />
    </svg>
  );
};
