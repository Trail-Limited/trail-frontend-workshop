//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconDocs = ({
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
        d="M768 0H416c-35.344 0-64 28.656-64 64h352v256h256v512H736v64h224c35.344 0 64-28.656 64-64V256.016zm0 256V90.496L933.472 256H768zM64 128c-35.344 0-64 28.656-64 64v768c0 35.344 28.656 64 64 64h544c35.344 0 64-28.656 64-64V384.016L416 128H64zm544 832H64V192h288v256h256v512zM416 384V218.496L581.472 384H416z"
      />
    </svg>
  );
};
