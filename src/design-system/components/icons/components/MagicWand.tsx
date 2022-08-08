//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconMagicWand = ({
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
        d="M1020.51 429.376 917.727 275.698l51.152-178.816c3.184-11.216.064-23.28-8.224-31.504-8.256-8.256-20.256-11.311-31.536-8.031l-178.512 52.128L596.319 5.57c-9.712-6.529-22.16-7.313-32.464-1.937-10.369 5.312-17.025 15.871-17.409 27.503l-5.536 185.936-146.496 114.592c-9.183 7.184-13.712 18.816-11.872 30.32s9.808 21.087 20.816 25.023l137.456 49.28c-.928.736-1.904 1.393-2.768 2.257L7.294 969.297c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376 8.192 0 16.368-3.12 22.624-9.376l530.752-530.752c2.065-2.064 3.664-4.4 5.04-6.816l53.792 147.552a32.058 32.058 0 0 0 25.152 20.656 31.72 31.72 0 0 0 4.912.368 32.044 32.044 0 0 0 25.31-12.433l113.776-147.168 183.904-6.56c11.664-.4 22.16-7.12 27.44-17.535 5.264-10.384 4.448-22.848-2.112-32.48zm-226.461-6.83c-9.504.32-18.368 4.882-24.192 12.401l-87.472 113.104-48.976-134.32c-3.248-8.944-10.32-15.936-19.28-19.152l-134.592-48.256 112.624-88.064c7.504-5.872 11.968-14.752 12.288-24.256l4.256-142.944 118.592 79.872a32.192 32.192 0 0 0 26.849 4.191l137.248-40.095-39.344 137.472a32.18 32.18 0 0 0 4.336 26.848l80.56 118.128z"
      />
    </svg>
  );
};
