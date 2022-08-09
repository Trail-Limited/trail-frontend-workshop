/* eslint-disable no-undef */
import { parseColor, formatColor } from "tailwindcss/lib/util/color";
import { gradient } from "tailwindcss/lib/util/dataTypes";

const buildStyleSet = (property, color, pieces) => {
  const value = `${color}${pieces.important}`;
  if (!property) return value;
  return { [property]: value };
};

const isSpaceSeparatedColor = (color) => {
  const spaceMatch =
    typeof color === "string" ? color.split(/\s+(?=[^)\]}]*(?:[([{]|$))/) : [];
  if (spaceMatch.length === 0) return;
  const hasValidSpaceSeparatedColors = spaceMatch.every((color) =>
    // FIXME: Remove comment and fix next line
    // eslint-disable-next-line
    Boolean(/^var\(--\w*\)$/.exec(color) ? color : parseColor(color))
  );
  return hasValidSpaceSeparatedColors;
};

export const withAlpha = ({
  color,
  property = undefined,
  pieces = { hasAlpha: false, alpha: "", important: "" },
  fallBackColor = false,
}) => {
  if (!color) return;

  if (Array.isArray(color)) color = color.join(",");

  if (typeof color === "function") {
    if (variable && property) {
      if (pieces.hasAlpha)
        return buildStyleSet(
          property,
          color({ opacityValue: pieces.alpha }),
          pieces
        );

      return {
        [variable]: "1",
        [property]: `${color({
          opacityVariable: variable,
          opacityValue: `var(${variable})`,
        })}${pieces.important}`,
      };
    }

    color = color({ opacityVariable: variable });
  }

  const parsed = parseColor(color);

  if (parsed === null) {
    // next-line: "!fallBackColor" is a workaround for variables used within these classes:
    // from-[var(--color)] + via-[var(--color)]
    const hasValidSpaceSeparatedColors =
      !fallBackColor && isSpaceSeparatedColor(color);
    if (hasValidSpaceSeparatedColors)
      return buildStyleSet(property, color, pieces);

    if (gradient(color)) return buildStyleSet(property, color, pieces);

    if (fallBackColor) return buildStyleSet(property, fallBackColor, pieces);

    return;
  }

  if (parsed.alpha !== undefined) {
    // For gradients
    if (color === "transparent" && fallBackColor)
      return buildStyleSet(
        property,
        pieces.alpha ? formatColor({ ...parsed, alpha: pieces.alpha }) : color,
        pieces
      );

    // Has an alpha value, return color as-is
    return buildStyleSet(property, color, pieces);
  }

  if (pieces.alpha)
    return buildStyleSet(
      property,
      formatColor({ ...parsed, alpha: pieces.alpha }),
      pieces
    );

  if (variable)
    return {
      [variable]: "1",
      [property]: `${formatColor({ ...parsed, alpha: `var(${variable})` })}${
        pieces.important
      }`,
    };

  return buildStyleSet(property, color, pieces);
};
