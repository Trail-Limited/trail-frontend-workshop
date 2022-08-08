//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconMouse = ({
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
        d="M513.584 0C355.456 0 224.08 128.225 224.08 286.337v451.312c0 158.128 131.376 286.352 289.504 286.352s286.352-128.224 286.352-286.336V286.337C799.936 128.225 671.712.001 513.584.001V0zm222.352 737.665c0 122.592-99.742 222.336-222.351 222.336S288.08 860.257 288.08 737.665V286.337c0-122.592 102.912-222.336 225.504-222.336s222.352 99.744 222.352 222.336v451.328zM512.338 192.001c-17.664 0-32 14.336-32 32v160c0 17.664 14.336 32 32 32s32-14.336 32-32v-160c0-17.664-14.336-32-32-32z"
      />
    </svg>
  );
};