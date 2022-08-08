//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconHourglass = ({
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
        d="M833.056 64.608h-64.465v215.408c0 104.384-56.656 183.359-178.097 245.199 126.064 63.808 179.104 142.159 179.104 259.071 0 76.128-.336 140-.592 175.12h64.065c17.68 0 32 14.288 32 31.968s-14.32 32-32 32H190.943c-17.68 0-32-14.32-32-32s14.32-31.968 32-31.968h65.935c-.24-35.12-.591-99.008-.591-175.12 0-116.912 52.288-195.248 178.145-259.056C313.2 463.39 257.295 384.415 257.295 280.031V64.607h-66.352c-17.68 0-32-14.304-32-32 0-17.664 14.32-31.984 32-31.984h642.128c17.68 0 32 14.32 32 31.984-.016 17.696-14.32 32-32.016 32zm-512.785 719.68c0 76.288.353 140.224.593 175.12H705.04c.223-34.912.592-98.848.592-175.12 0-89.008-33.12-158.032-193.185-224.4-160.016 66.368-192.176 135.393-192.176 224.4zm384.352-719.68H321.264v215.408c0 61.376 20.64 140.416 191.168 210.528 170.56-70.112 192.191-149.152 192.191-210.528V64.608z"
      />
    </svg>
  );
};
