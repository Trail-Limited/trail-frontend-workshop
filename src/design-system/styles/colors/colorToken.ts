import tdsColors from './tdsColors';

type Colors = typeof tdsColors;

export const singleLevelColors = [
  'transparent',
  'current',
  'white',
  'black',
] as const;

/**
 * The TDS color palette defined in `tdsColors.js`, including the current
 * theme colors.
 */
type ColorPalette<Key extends keyof Colors = keyof Colors> = Key extends string
  ? Key extends typeof singleLevelColors[number]
    ? Key
    : `${Key}-${keyof Colors[Key] & number}`
  : never;

/**
 * A valid color value that can be processed using the `useColor()` hook.
 */
export type ColorToken = ColorPalette | undefined;
