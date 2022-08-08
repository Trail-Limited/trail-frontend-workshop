import tw, { TwStyle } from 'twin.macro';

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg';

export type IconProps = {
  /** The size of the icon. */
  size?: IconSizes;
  /**
   * Determines whether the icon is standalone or decorative. This changes the
   * way the icon presents itself to assisstive technology.
   *
   * Standalone:
   * The icon needs to convey meaning all by itself and so it will
   * need to be discoverable by AT.
   *
   * A title must be set to satisfy accessibility
   * requirements.
   *
   * Decorative:
   * The icon is just a visual aid - the words around it convey the
   * meaning. This means it can be hidden completely from AT.
   *
   * @see https://css-tricks.com/can-make-icon-system-accessible/#there-are-two-ways-an-icon-might-be-used
   */
  isStandalone?: boolean;
  /**
   * Defines the tooltip and provides a description for assistive technology.
   * This is only shown when the `isStandalone` prop is set to `true`.
   */
  title?: string;
} & React.SVGAttributes<SVGElement>;

export type SvgIconProps = {
  iconSize: IconSizes;
};

export const getIconSizeStyle = (size: IconSizes): TwStyle => {
  switch (size) {
    case 'xs':
      return tw`w-3 h-3`;
    case 'sm':
      return tw`w-3.5 h-3.5`;
    case 'md':
      return tw`w-4 h-4`;
    case 'lg':
      return tw`w-[1.125rem] h-[1.125rem]`;
  }
};

// This is a stub component for generating Storybook documentation.
/**
 * Each icon is exported as separate components with the icon name prefixed by
 * `TdsIcon*`.
 */
export const TdsIcon = (props: IconProps): JSX.Element => <svg {...props} />;
