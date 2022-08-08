//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconActionRedo = ({
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
        d="M33.935 942.336c.336 0 .72 0 1.088-.031 16.193-.529 26.4-13.088 27.777-29.216C63.888 901.217 95.775 614 544.048 614.305l1.008 183.664c0 12.368 7.12 23.664 18.335 28.944 11.088 5.312 24.432 3.68 33.968-4.224l414.976-343.776a31.864 31.864 0 0 0 11.681-24.784c-.032-9.6-4.336-18.687-11.776-24.752L597.28 88.817c-9.569-7.807-22.785-9.311-33.937-4.095-11.152 5.311-18.288 16.56-18.288 28.91l-1.008 179.633c-185.952 5.887-329.968 65.712-423.328 174.96C-31.217 646 2.69 904.385 4.287 915.137c2.368 15.68 13.872 27.199 29.649 27.199zm543.121-392.527h-.063c-320.208.192-442.591 108.32-512.464 203.824 10.224-76.496 40.064-168.72 105.008-244.031 86.336-100.096 225.44-152.848 407.536-152.848 17.68 0 32-14.32 32-32V180.978l332.433 273.344-332.448 275.904v-148.4a31.953 31.953 0 0 0-9.409-22.656 31.96 31.96 0 0 0-22.592-9.36z"
      />
    </svg>
  );
};
