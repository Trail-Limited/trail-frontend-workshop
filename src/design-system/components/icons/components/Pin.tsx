//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconPin = ({
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
        d="M1014.85 379.664 646.692 9.649c-7.936-7.968-19.376-11.216-30.32-8.496-10.912 2.656-19.6 10.849-22.945 21.568-22.16 71.312-24.72 135.84-7.792 194.688-1.551 1.073-3.04 2.24-4.416 3.617L410.115 392.098c-55.2-25.6-114.544-39.457-173.696-39.457-37.6 0-74.464 5.569-109.567 16.465-10.688 3.344-18.88 12-21.569 22.848a32.01 32.01 0 0 0 8.368 30.288l218.976 220.384-306.16 311.04-26.624 70.128 64.368-24.88 313.36-311.04 221.824 223.264c6.065 6.128 14.289 9.44 22.689 9.44 2.528 0 5.088-.32 7.632-.913a32.064 32.064 0 0 0 22.944-21.6c28.976-93.233 20.48-193.345-20.337-283.121l174.704-174.736c.624-.624 1.056-1.328 1.632-2 26.368 7.536 53.696 11.568 82.048 11.568 35.216 0 72.56-5.055 110.976-17.008a32.005 32.005 0 0 0 21.57-22.847 32.067 32.067 0 0 0-8.401-30.256zM603.153 824.146 200.37 418.739c103.376-12.065 214.848 29.6 295.567 110.319 80.32 80.304 119.504 191.296 107.216 295.088zm-2.926-267.6c-16.832-25.727-36.465-50.176-59.024-72.752-22.464-22.464-47.008-42.256-72.96-59.328L612.37 280.37c14.704 25.568 33.664 50 57.007 73.328 23.857 23.84 49.09 43.136 75.601 58.064zM714.626 308.45c-61.536-61.536-85.247-130.129-72.688-212.881l286.912 288.4c-82.656 11.856-151.6-12.895-214.225-75.519z"
      />
    </svg>
  );
};
