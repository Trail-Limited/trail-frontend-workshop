//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconVolumeOff = ({
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
        d="M575.536 65.904c-10.432-5.552-23.087-4.928-32.911 1.696L221.52 319.712l-106.624.08c-54.512 0-98.88 38.657-98.88 86.4l1.712 211.137c0 47.536 44.352 86.224 98.863 86.224l106.592.065L542.576 956.37a31.977 31.977 0 0 0 17.905 5.472c5.152 0 10.32-1.249 15.008-3.745a31.951 31.951 0 0 0 17.008-28.256V94.16a32.044 32.044 0 0 0-16.96-28.257zm-47.039 803.728-277.6-224.526a31.97 31.97 0 0 0-17.889-5.473l-116.384-.064c-20.544 0-34.88-11.712-34.88-22.464l-1.727-211.152c0-10.48 14.336-22.16 34.895-22.16l116.4-.08a32.017 32.017 0 0 0 17.856-5.457l279.328-224v715.376zm365.505-357.118 104.593-105.84c12.496-12.496 12.496-32.752 0-45.248-12.464-12.496-32.752-12.496-45.248 0L849.011 466.994 744.675 361.426c-12.464-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l104.592 105.84-103.6 104.816c-12.464 12.48-12.496 32.753 0 45.249s32.784 12.496 45.28 0l103.312-104.544 103.312 104.544c12.496 12.496 32.752 12.496 45.248 0s12.496-32.769 0-45.249z"
      />
    </svg>
  );
};