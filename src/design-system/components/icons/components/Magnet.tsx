//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconMagnet = ({
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
        d="M960.288 60.176V31.168c0-17.68-14.32-32-32-32H703.664c-17.68 0-32 14.32-32 32v130.656c0 .048.032.096.032.144v397.52c0 96.32-54.336 174.656-150.656 174.656s-168.656-78.336-168.656-174.656V60.176h-.095V31.168c0-17.68-14.32-32-32-32H95.665c-17.68 0-32 14.32-32 32v130.656c0 .656.335 1.2.368 1.84V574.16c0 248.912 198.784 450.656 447.664 450.656S960.353 823.072 960.353 574.16V60.176zm-64 2.992v128.336H736.032V63.168h160.256zm-608 0v128.336H128.032V63.168h160.256zM511.68 960.832c-213.216 0-383.663-173.472-383.663-386.655V255.505h160.336v303.984c0 131.808 100.848 238.655 232.655 238.655S735.68 691.296 735.68 559.489V255.505h160.656v318.672c0 213.184-171.424 386.655-384.656 386.655z"
      />
    </svg>
  );
};
