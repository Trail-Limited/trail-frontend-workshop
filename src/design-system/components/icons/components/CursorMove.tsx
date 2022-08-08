//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconCursorMove = ({
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
        d="m1016.4 496.64-8.48-8.08c-.16-.16-.335-.224-.528-.367L877.648 369.76c-9.344-8.945-24.448-8.945-33.824 0l-5.488 8.064c-9.344 8.945-6.304 23.408 3.04 32.336l76.464 69.344H546.496V106.16l69.343 76.464c8.945 9.344 23.409 12.384 32.336 3.023l8.065-5.471c8.944-9.376 8.944-24.481 0-33.841L543.072 22.368a31.874 31.874 0 0 0-12.32-13.296l-1.423-1.488C524.897 2.912 518.993.576 513.105.608c-5.904-.032-11.776 2.304-16.288 6.976l-8.096 8.463c-.16.16-.176.369-.336.544L372.881 144.335c-8.927 9.329-8.927 24.449 0 33.825l8.065 5.471c8.928 9.344 23.424 6.32 32.368-3.024l69.152-77.105v375.984H106.162l76.464-69.343c9.344-8.945 12.384-23.409 3.04-32.336l-5.471-8.065c-9.36-8.944-24.497-8.944-33.84 0L22.37 482.926a31.957 31.957 0 0 0-13.28 12.29l-1.489 1.423C2.914 501.087.593 506.992.626 512.88c-.016 5.905 2.288 11.777 6.976 16.288l8.464 8.096c.16.16.368.176.528.336l127.744 115.504c9.344 8.928 24.464 8.928 33.84 0l5.472-8.064c9.344-8.945 6.304-23.44-3.04-32.369l-77.12-69.152h379.008v376.96l-69.153-77.103c-8.944-9.344-23.44-12.369-32.368-3.025l-8.064 5.472c-8.928 9.376-8.928 24.496 0 33.824l115.504 127.744c.16.176.192.368.336.528l8.095 8.48c4.512 4.673 10.384 7.009 16.288 6.976 5.873.033 11.777-2.303 16.225-6.975l8.096-8.48c.16-.16.224-.337.368-.529l118.432-129.744c8.944-9.344 8.944-24.464 0-33.824l-8.065-5.488c-8.944-9.344-23.408-6.304-32.335 3.04l-69.344 76.464V543.502H920.48l-77.105 69.152c-9.343 8.944-12.368 23.44-3.024 32.368l5.472 8.064c9.376 8.928 24.496 8.928 33.824 0l127.744-115.504c.176-.175.368-.19.528-.334l8.48-8.096c4.672-4.496 7.008-10.368 6.976-16.288.032-5.857-2.304-11.777-6.975-16.225z"
      />
    </svg>
  );
};
