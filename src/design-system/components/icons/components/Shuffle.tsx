//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconShuffle = ({
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
        d="m402.304 505.856 39.264-55.248-134.304-183.28H2.736v64h271.488zm516.479-174.528-77.536 69.535c-9.344 8.945-12.368 23.44-3.025 32.368l5.472 8.065c9.376 8.944 24.496 8.944 33.824 0l127.744-115.504c.176-.16.384-.193.544-.336l8.464-8.096c4.672-4.496 7.008-10.368 6.976-16.288.032-5.872-2.304-11.776-6.976-16.224l-8.464-8.096c-.16-.16-.336-.225-.544-.368L875.534 157.952c-9.36-8.945-24.464-8.945-33.84 0l-5.471 8.064c-9.36 8.944-6.32 23.408 3.023 32.336l76.048 68.976h-231.76l-409.312 576H2.734v64h304.512l409.328-576zm87.027 521.44c-.16-.16-.337-.226-.545-.37l-129.728-118.43c-9.36-8.944-24.464-8.944-33.84 0l-5.471 8.064c-9.36 8.945-6.32 23.409 3.023 32.336l76.336 69.233-199.008-.273L602.145 666.32l-39.28 55.248 120.656 185.76 234.944.288-77.216 69.248c-9.344 8.945-12.368 23.44-3.025 32.368l5.472 8.065c9.376 8.944 24.496 8.944 33.824 0l127.744-115.504c.176-.16.384-.192.544-.336l8.464-8.096c4.672-4.496 7.008-10.368 6.976-16.288.032-5.872-2.304-11.776-6.976-16.224z"
      />
    </svg>
  );
};
