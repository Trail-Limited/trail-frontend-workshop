//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconSocialGoogle = ({
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
        d="M707 360c-70-75-128-87-184-88h-2c-126 0-245 104-245 248 0 151 136 239 244 239h1c60 0 133-11 197-103H472V401l523 2c5 26 14 91 14 125 0 289-194 495-493 495C232 1023 1 797 1 515S232 8 516 8c139 0 288 55 382 180zm-187 93v154h263c-12 65-81 195-263 195-159 0-287-130-287-285 0-156 131-287 287-287 91 0 152 40 185 72l126-119C751 108 646 63 520 63 264 63 56 264 56 517c0 251 208 453 464 453 270 0 445-185 445-442 0-29-2-52-6-75H520z"
      />
    </svg>
  );
};
