//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconBell = ({
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
        d="M905.616 711.888c-37.344-45.424-88.48-109.742-88.48-175.358V327.57c0-180.016-134.64-326.479-306.688-326.479-172.08 0-305.664 146.464-305.664 326.479v208.96c0 64.512-55.489 125.487-90.672 172.799-31.649 42.512-56.624 76.096-39.76 109.664 14.832 29.536 51.968 33.328 82.655 33.328h183.36c.048 94.208 76.448 170.576 170.672 170.576 94.24 0 170.641-76.368 170.688-170.576h187.664c19.52 0 65.152 0 80.863-33.2 15.857-33.616-9.52-64.513-44.64-107.232zm-394.609 243.97c-57.216 0-103.632-46.352-103.712-103.536h207.424c-.08 57.184-46.464 103.535-103.712 103.535zm358.384-171.665H157.006c-4.896 0-8.991-.16-12.367-.368 6.592-10.208 16.271-23.248 24.143-33.857 38.993-52.4 104.145-126.368 104.145-213.424v-208.96c0-142.464 103.04-258.352 237.521-258.352S749.01 185.12 749.01 327.584v208.96c0 90.016 60.08 165.248 103.968 218.608 7.392 8.993 16.24 19.76 23.12 28.96-2.033.048-4.273.08-6.705.08z"
      />
    </svg>
  );
};
