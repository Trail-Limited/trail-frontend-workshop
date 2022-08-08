//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconFeed = ({
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
        d="M101.872 330.256c-18.128 0-32.769 14.656-32.769 32.769 0 18.095 14.64 32.767 32.768 32.767 303.008 0 525.344 224.368 525.344 527.36 0 18.096 14.656 32.752 32.769 32.752s32.768-14.656 32.768-32.752c0-340.368-250.528-592.896-590.88-592.896zm.287-327.632c-18.112 0-32.77 14.655-32.77 32.768S84.046 68.16 102.16 68.16c470.175 0 852.671 382.496 852.671 852.656 0 18.096 14.656 32.752 32.769 32.752s32.768-14.656 32.768-32.752C1020.352 414.528 608.447 2.624 102.16 2.624zm81.856 656.975c-99.472 0-180.369 81.12-180.369 180.879 0 99.712 80.912 180.912 180.368 180.912 99.456 0 180.4-81.184 180.4-180.911 0-99.76-80.928-180.88-180.399-180.88zm-.001 298.43c-64.608 0-117.168-52.752-117.168-117.568s52.56-117.536 117.168-117.536c64.624 0 117.216 52.72 117.216 117.536S248.638 958.03 184.014 958.03z"
      />
    </svg>
  );
};