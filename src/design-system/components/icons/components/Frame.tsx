//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconFrame = ({
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
        d="M224 112H32c-17.664 0-32 14.336-32 32v192c0 17.664 14.336 32 32 32s32-14.336 32-32V176h160c17.664 0 32-14.336 32-32s-14.336-32-32-32zm768 544c-17.664 0-32 14.336-32 32v160H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h192c17.664 0 32-14.336 32-32V688c0-17.664-14.336-32-32-32zM224 848H64V688c0-17.664-14.336-32-32-32S0 670.336 0 688v192c0 17.664 14.336 32 32 32h192c17.664 0 32-14.336 32-32s-14.336-32-32-32zm768-736H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h160v160c0 17.664 14.336 32 32 32s32-14.336 32-32V144c0-17.664-14.336-32-32-32z"
      />
    </svg>
  );
};
