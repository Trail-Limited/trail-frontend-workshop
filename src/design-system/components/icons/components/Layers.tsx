//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconLayers = ({
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
        d="m21.84 301.808 475.09 258.72a32.093 32.093 0 0 0 15.312 3.904 31.99 31.99 0 0 0 15.184-3.84l480.096-258.72c10.464-5.631 16.975-16.624 16.815-28.528a32.088 32.088 0 0 0-17.504-28.16L531.713 3.904c-9.055-4.592-19.744-4.624-28.88-.064L22.785 245.12c-10.624 5.343-17.44 16.16-17.632 28.064s6.256 22.944 16.687 28.624zM517.153 68.287l406.159 206.271L512.336 496.03 106.16 274.846zm484.187 412.031-94.974-48.225-68.56 36.976 80 40.624-410.96 221.456-406.191-221.184 85.311-42.88-68.368-37.248-100.32 50.4c-10.624 5.344-17.44 16.16-17.633 28.065s6.256 22.944 16.688 28.624l475.088 258.72a32.092 32.092 0 0 0 15.312 3.903 31.99 31.99 0 0 0 15.184-3.84l480.096-258.72c10.464-5.631 16.975-16.624 16.815-28.528a31.996 31.996 0 0 0-17.487-28.143zm.01 223.999-89.966-44.224-68.56 36.976 75.008 36.624-410.976 221.456-406.192-221.184 79.312-35.872-68.368-37.248-94.32 43.408C6.662 709.597-.154 720.413-.346 732.318s6.255 22.944 16.687 28.624l475.088 258.72a32.092 32.092 0 0 0 15.313 3.903 31.99 31.99 0 0 0 15.183-3.84l480.096-258.72c10.464-5.632 16.976-16.624 16.816-28.528a32.002 32.002 0 0 0-17.488-28.16z"
      />
    </svg>
  );
};