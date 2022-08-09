/**
 * These global styles are based on
 * `https://github.com/ben-rogerson/twin.macro/blob/master/src/config/globalStyles.js`
 * to provide the base CSS variables required for Tailwind to function properly.
 *
 * The styles have been modified to be scoped to the styled component that they
 * are only applied to element inside the component.
 *
 * The purpose of making these styled scoped is for using the design system in
 * an exising webpage to ensure the existing UI remains intact.
 *
 * These styles should be injected into component containing the design system UI.
 */

import { css, theme } from "twin.macro";
import { withAlpha } from "./alpha";

export const globalPreflightStyles = css({
  "& *, & *::before, & *::after": {
    boxSizing: "border-box",
    borderWidth: "0",
    borderStyle: "solid",
    borderColor: theme`borderColor.DEFAULT` || "currentColor",
  },
  "& *::before, & *::after": { "--tw-content": "''" },
  "& ": {
    lineHeight: "1.5",
    WebkitTextSizeAdjust: "100%",
    MozTabSize: "4",
    tabSize: "4",
    fontFamily:
      theme`fontFamily.sans` ||
      `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    margin: "0",
  },
  hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
  "abbr:where([title])": { textDecoration: "underline dotted" },
  "h1, h2, h3, h4, h5, h6": { fontSize: "inherit", fontWeight: "inherit" },
  a: { color: "inherit", textDecoration: "inherit" },
  "b, strong": { fontWeight: "bolder" },
  "code, kbd, samp, pre": {
    fontFamily:
      theme`fontFamily.mono` ||
      `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    fontSize: "1em",
  },
  small: { fontSize: "80%" },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: "0",
    position: "relative",
    verticalAlign: "baseline",
  },
  sub: { bottom: "-0.25em" },
  sup: { top: "-0.5em" },
  table: {
    textIndent: "0",
    borderColor: "inherit",
    borderCollapse: "collapse",
  },
  "button, input, optgroup, select, textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: "inherit",
    color: "inherit",
    margin: "0",
    padding: "0",
  },
  "button, select": { textTransform: "none" },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    WebkitAppearance: "button",
    backgroundColor: "transparent",
    backgroundImage: "none",
  },
  ":-moz-focusring": { outline: "auto" },
  ":-moz-ui-invalid": { boxShadow: "none" },
  progress: { verticalAlign: "baseline" },
  "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
    height: "auto",
  },
  '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" },
  "::-webkit-search-decoration": { WebkitAppearance: "none" },
  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit",
  },
  summary: { display: "list-item" },
  "blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre": {
    margin: "0",
  },
  fieldset: { margin: "0", padding: "0" },
  legend: { padding: "0" },
  "ol, ul, menu": { listStyle: "none", margin: "0", padding: "0" },
  textarea: { resize: "vertical" },
  "input::-moz-placeholder, textarea::-moz-placeholder": {
    opacity: "1",
    color: theme`colors.grey.500` || "#9ca3af",
  },
  "input:-ms-input-placeholder, textarea:-ms-input-placeholder": {
    opacity: "1",
    color: theme`colors.grey.500` || "#9ca3af",
  },
  "input::placeholder, textarea::placeholder": {
    opacity: "1",
    color: theme`colors.grey.500` || "#9ca3af",
  },
  'button, [role="button"]': { cursor: "pointer" },
  ":disabled, [disabled]": { cursor: "default" }, // Gotcha: :disabled doesn't seem to work with css-in-js so added [disabled] as a backup
  "img, svg, video, canvas, audio, iframe, embed, object": {
    display: "block",
    verticalAlign: "middle",
  },
  "img, video": { maxWidth: "100%", height: "auto" },
  "[hidden]": { display: "none" },
});

export const globalRingStyles = () => {
  const ringOpacityDefault = theme`ringOpacity.DEFAULT` || "0.5";
  const ringColorDefault = withAlpha({
    color: `rgb(147 197 253 / ${ringOpacityDefault})`,
    pieces: { important: "", hasAlpha: true, alpha: ringOpacityDefault },
  });
  return css({
    "& *, & *::before, & *::after": {
      "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-ring-offset-width": "0px",
      "--tw-ring-offset-color": "#fff",
      "--tw-ring-color": ringColorDefault,
      "--tw-ring-offset-shadow": "0 0 #0000",
      "--tw-ring-shadow": "0 0 #0000",
    },
  });
};

export const globalTransformStyles = css({
  "& *, & *::before, & *::after": {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "--tw-transform": [
      "translateX(var(--tw-translate-x))",
      "translateY(var(--tw-translate-y))",
      "rotate(var(--tw-rotate))",
      "skewX(var(--tw-skew-x))",
      "skewY(var(--tw-skew-y))",
      "scaleX(var(--tw-scale-x))",
      "scaleY(var(--tw-scale-y))",
    ].join(" "),
  },
});

export const globalTouchActionStyles = css({
  "& *, & *::before, & *::after": {
    "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)",
  },
});

export const globalScrollSnapTypeStyles = css({
  "& *, & *::before, & *::after": {
    "--tw-scroll-snap-strictness": "proximity",
  },
});

export const globalFontVariantNumericStyles = css({
  "& *, & *::before, & *::after": {
    "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)",
  },
});

export const globalBoxShadowStyles = css({
  "& *, & *::before, & *::after": {
    "--tw-shadow": "0 0 #0000",
    "--tw-shadow-colored": "0 0 #0000",
  },
});

export const globalFilterStyles = css({
  "& *, & *::before, & *::after": {
    "--tw-blur": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-brightness": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-contrast": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-grayscale": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-hue-rotate": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-invert": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-saturate": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-sepia": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-drop-shadow": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-filter": [
      "var(--tw-blur)",
      "var(--tw-brightness)",
      "var(--tw-contrast)",
      "var(--tw-grayscale)",
      "var(--tw-hue-rotate)",
      "var(--tw-invert)",
      "var(--tw-saturate)",
      "var(--tw-sepia)",
      "var(--tw-drop-shadow)",
    ].join(" "),
  },
});

export const globalBackdropStyles = css({
  "& *, & *::before, & *::after": {
    "--tw-backdrop-blur": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-brightness": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-contrast": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-grayscale": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-hue-rotate": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-invert": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-opacity": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-saturate": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-sepia": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-backdrop-filter": [
      "var(--tw-backdrop-blur)",
      "var(--tw-backdrop-brightness)",
      "var(--tw-backdrop-contrast)",
      "var(--tw-backdrop-grayscale)",
      "var(--tw-backdrop-hue-rotate)",
      "var(--tw-backdrop-invert)",
      "var(--tw-backdrop-opacity)",
      "var(--tw-backdrop-saturate)",
      "var(--tw-backdrop-sepia)",
    ].join(" "),
  },
});

export const globalKeyframeStyles = () => {
  const keyframes = theme("keyframes");
  if (!keyframes) return;
  // FIXME: Remove comment and fix next line
  // eslint-disable-next-line
  const output = Object.entries(keyframes).reduce(
    (result, [name, frames]) => ({ ...result, [`@keyframes ${name}`]: frames }),
    {}
  );
  return css(output);
};

export const globalStylesScoped = css`
  ${globalPreflightStyles};
  ${globalKeyframeStyles()};
  ${globalTransformStyles};
  ${globalTouchActionStyles};
  ${globalScrollSnapTypeStyles};
  ${globalFontVariantNumericStyles};
  ${globalRingStyles()};
  ${globalBoxShadowStyles};
  ${globalFilterStyles};
  ${globalBackdropStyles};
`;
