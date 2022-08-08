//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconCallEnd = ({
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
        d="M961.696 199.552c0 1.056-.097 1.935-.225 2.623-26.16 18-172.433 114.624-199.776 132.16-2.88.065-10.191-.911-20.623-6.4-11.12-5.84-43.536-24.032-88.88-49.904l-35.28-20.128-33.248 23.344c-24.72 17.408-78.464 58.817-160.288 140.624-82.176 82.16-123.456 135.712-140.768 160.336l-23.344 33.248 20.16 35.28c19.537 34.193 42.945 75.504 50 88.945 5.68 10.784 6.129 18.16 6.129 20.16 0 .32 0 .593-.033.816-15.36 24.497-114.593 173.937-132.673 200.32-2.56.432-8.128.032-15.088-4.816-56.256-40.608-114.96-98.24-123.376-120.8 5.632-120.032 111.12-288.464 297.568-474.88 186.464-186.4 354.72-291.872 474.352-297.44 22.624 8.096 80.624 66.815 120.912 122.527 2.832 4.128 4.48 9.232 4.481 13.985zm62.004-.001c0-16.944-5.121-34.914-15.969-50.498-1.055-1.504-108.256-152.096-170.336-150.096-174.432 5.552-379.439 175.056-520.703 316.271C175.46 456.444 5.892 661.452.307 836.572v1.44c0 61.312 148.672 169.088 150.144 170.128 40.4 28.289 84.881 17.968 102.945-7.776 11.008-15.664 124.976-187.056 137.808-208.063 5.6-9.152 8.336-20.32 8.336-32.464 0-15.664-4.576-33.008-13.473-49.935-8.687-16.496-37.119-66.464-51.086-90.912 15.12-21.537 53.872-72.128 133.664-151.84 79.183-79.216 130.19-118.32 151.84-133.535 24.431 13.935 74.399 42.335 90.847 50.975 31.008 16.368 61.968 18.225 82.848 4.945 19.68-12.464 189.808-125.968 206-137.68 15.28-11.056 23.52-30.848 23.52-52.304z"
      />
    </svg>
  );
};
