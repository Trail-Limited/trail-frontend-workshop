//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconTrophy = ({
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
        d="M735.808 927.872H285.872c-17.68 0-32 14.32-32 32s14.32 32 32 32h449.936c17.68 0 32-14.32 32-32s-14.304-32-32-32zm281.502-806.24c-3.024-14.88-16.16-25.568-31.343-25.568H829.343V64.128c0-17.68-14.32-32-32-32H221.807c-17.68 0-32 14.32-32 32v31.936H38.031c-15.183 0-28.32 10.688-31.344 25.568-.944 4.624-22.4 116.752 39.904 193.152 35.84 43.92 90.607 66.928 162.495 68.976C250.078 504.912 353.15 594.624 477.278 608v222.912H381.5c-17.68 0-32 14.32-32 32s14.32 32 32 32h258.69c17.68 0 32-14.32 32-32s-14.32-32-32-32h-98.912v-222.88c124.336-13.12 227.632-102.8 268.736-224.08 74.336-1.088 130.736-24.24 167.393-69.168 62.304-76.416 40.848-188.528 39.904-193.152zM96.401 274.56c-28.336-34.496-31.184-85.41-29.744-114.497H189.81v108.032c0 17.296 1.6 34.16 3.936 50.769-43.68-4.08-76.447-18.832-97.344-44.304zm668.944-6.465c0 153.088-114.721 277.663-255.713 277.663-141.056 0-255.808-124.56-255.808-277.663V96.127H765.36v171.968h-.015zm162.255 6.463c-21.68 26.432-56.032 41.488-102.272 44.864 2.384-16.784 4.016-33.84 4.016-51.328V160.062h128c1.44 29.12-1.408 80-29.744 114.496z"
      />
    </svg>
  );
};
