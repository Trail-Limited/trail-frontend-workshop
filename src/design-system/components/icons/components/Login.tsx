//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconLogin = ({
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
        d="M532.528 661.408c-12.512 12.496-12.513 32.752-.001 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194L577.775 318.64c-12.496-12.496-32.752-12.496-45.248 0-12.512 12.496-12.512 32.752 0 45.248l115.744 115.76H31.839c-17.68 0-32 14.336-32 32s14.32 32 32 32h618.448zM960.159 0h-576c-35.36 0-64.017 28.656-64.017 64v288h64.432V103.024c0-21.376 17.344-38.72 38.72-38.72h496.704c21.408 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.311 38.72-38.72 38.72H423.31c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.432.08V960c0 35.344 28.656 64 64.017 64h576c35.344 0 64-28.656 64-64V64c-.016-35.344-28.672-64-64.016-64z"
      />
    </svg>
  );
};
