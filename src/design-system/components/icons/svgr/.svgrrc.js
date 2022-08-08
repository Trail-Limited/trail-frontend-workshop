module.exports = {
  typescript: true,
  prettier: true,
  svgo: true,
  jsxRuntime: 'automatic',
  template: require('./iconTemplate'),
  indexTemplate: require('./indexTemplate'),
  titleProp: true,
  svgProps: {
    css: '{css`${getIconSizeStyle(size)};`}',
    ['aria-hidden']: '{!isStandalone}',
    role: 'img',
  },
};
