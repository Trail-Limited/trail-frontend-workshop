//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconFileImg = ({
  title: titleSource,
  color,
  size = "md",
  isStandalone = false,
  ...props
}: IconProps): JSX.Element => {
  if (isStandalone && !titleSource) {
    console.warn(
      "You must include a title for a standalone icon to make it accessible. See Storybook documentation for more details."
    );
  }

  const titleId = createGuid();
  const title = isStandalone ? titleSource : undefined;
  return (
    <svg
      fill="none"
      viewBox="0 0 36 36"
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
        d="M9 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v20.75a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V8Z"
        fill="#fff"
      />
      <path d="m22.783 15.75 3.467 3.919V24h-12l8.533-8.25Z" fill="#01B695" />
      <path
        d="M14.517 12.75 9.75 18.094V24h16.5L14.517 12.75Z"
        fill="#1FCCAD"
      />
      <path
        d="M9 23.25a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6Z"
        fill="#6D8BAC"
      />
      <path
        d="M13.766 28.125h-.88v-4.266h.88v4.266Zm1.965-4.265 1.096 3.093 1.09-3.094h1.154v4.266h-.882v-1.166l.088-2.013-1.151 3.179h-.604l-1.148-3.176.088 2.01v1.166h-.879v-4.266h1.148Zm7.483 3.726c-.158.19-.382.337-.671.442-.29.104-.61.156-.961.156-.37 0-.693-.08-.973-.24a1.633 1.633 0 0 1-.644-.704 2.484 2.484 0 0 1-.232-1.08v-.29c0-.427.072-.795.214-1.105.145-.313.352-.551.621-.715.272-.166.59-.25.952-.25.506 0 .902.122 1.187.364.285.24.454.59.507 1.052h-.856c-.039-.244-.126-.423-.26-.536-.133-.114-.317-.17-.551-.17-.299 0-.527.112-.683.337-.156.224-.235.558-.237 1.002v.272c0 .447.085.785.255 1.014.17.228.419.342.747.342.33 0 .565-.07.706-.21v-.736h-.8v-.647h1.679v1.702Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 7.125h-15a.375.375 0 0 0-.375.375v21.75c0 .207.168.375.375.375h15a.375.375 0 0 0 .375-.375V7.5a.375.375 0 0 0-.375-.375ZM10.5 6A1.5 1.5 0 0 0 9 7.5v21.75a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V7.5A1.5 1.5 0 0 0 25.5 6h-15Z"
        fill="#6D8BAC"
      />
      <path
        d="M23.25 12.375a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        fill="#FFC336"
      />
    </svg>
  );
};
