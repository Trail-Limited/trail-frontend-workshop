/**
 * This semantic z-index stragety is based on the technique described in this
 * article: https://www.smashingmagazine.com/2021/02/css-z-index-large-projects/
 */

const base = 0;
const above = 1; // use this for all values above the base
const below = -1; // and this for all values below the base

const loadingSkeleton = above + base;
const tableHeader = above + loadingSkeleton;
const navigation = above + base;
const footer = above + base;
const modal = above + navigation;
const popup = above + modal;
const scrollBar = above + popup;

const zIndex = {
  navigation,
  tableHeader,
  footer,
  modal,
  popup,
  auto: "auto",
  scrollBar,
};

const colorPalette = {
  trailgrey: {
    50: "#F9FBFF",
    100: "#F4F9FF",
    200: "#E4EDF8",
    300: "#D4E2F2",
    400: "#B5CCE4",
    500: "#9AB3CE",
    600: "#7E9AB8",
    700: "#5D7D9F",
    800: "#456588",
    900: "#1F456E",
  },
  blue: {
    50: "#E8F7FF",
    100: "#D3EFFF",
    200: "#A6DFFF",
    300: "#77CEFF",
    400: "#2EB2FC",
    500: "#2197EF",
    600: "#2882C8",
    700: "#11609D",
    800: "#064576",
    900: "#023359",
  },
  grey: {
    50: "#FAFBFD",
    100: "#F3F6FA",
    200: "#DEE4EE",
    300: "#C5CFDF",
    400: "#A8B3C5",
    500: "#8795AC",
    600: "#67758C",
    700: "#4F5C73",
    800: "#353F52",
    900: "#1C2636",
  },
  darkblue: {
    50: "#EDF5FF",
    100: "#DBEAFF",
    200: "#BDD9FF",
    300: "#9DC6FF",
    400: "#77AFFF",
    500: "#5291EE",
    600: "#3A7ADA",
    700: "#2662BB",
    800: "#204D90",
    900: "#052657",
  },
  green: {
    50: "#EBFFFB",
    100: "#D8FCF5",
    200: "#ACF8EA",
    300: "#72EDD7",
    400: "#22E2C0",
    500: "#04CCB4",
    600: "#19BBA8",
    700: "#0B9F8E",
    800: "#037B6D",
    900: "#094F46",
  },
  yellow: {
    50: "#FFF8E7",
    100: "#FFF1D0",
    200: "#FFE3A0",
    300: "#FFD675",
    400: "#FFC336",
    500: "#FFB300",
    600: "#D99800",
    700: "#A77500",
    800: "#7E5E00",
    900: "#5F4600",
  },
  orange: {
    50: "#FEF0E6",
    100: "#FFDFC8",
    200: "#FFC69C",
    300: "#FEA86A",
    400: "#FC8B3A",
    500: "#FA7718",
    600: "#EF6B0B",
    700: "#D65C04",
    800: "#AC4901",
    900: "#7D3500",
  },
  red: {
    50: "#FFF1F2",
    100: "#FFE4E9",
    200: "#FFC69C",
    300: "#FDA4AF",
    400: "#FB7185",
    500: "#ED4C68",
    600: "#E11D48",
    700: "#BE123C",
    800: "#9F1239",
    900: "#881337",
  },
};

const tdsColors = {
  ...colorPalette,
  text: {
    1: colorPalette.trailgrey[900],
    2: colorPalette.trailgrey[800],
    3: colorPalette.trailgrey[700],
    4: colorPalette.trailgrey[600],
    5: colorPalette.trailgrey[500],
    6: colorPalette.trailgrey[400],
    7: colorPalette.trailgrey[300],
  },
  border: {
    1: colorPalette.trailgrey[300],
    2: colorPalette.trailgrey[400],
    3: colorPalette.trailgrey[500],
  },
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
  current: "currentColor",
};

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./.storybook/preview.tsx"], // This is only needed for Storybook's UI
  theme: {
    colors: tdsColors,
    extend: {
      fontFamily: {
        heading: ["Roboto", "sans-serif"],
      },
      lineHeight: {
        3: "0.75rem",
        4: "0.875rem",
        5: "1rem",
        6: "1.125rem",
        7: "1.25rem",
        8: "1.5rem",
        9: "1.75rem",
        10: "2rem",
      },
    },
    fontSize: {
      h1: "2rem",
      h2: "1.75rem",
      h3: "1.5rem",
      h4: "1.25rem",
      h5: "1.125rem",
      h6: "1rem",
      h7: "0.875rem",
      subtitle1: "0.875rem",
      subtitle2: "0.75rem",
      label: "0.75rem",
      body1: "0.875rem",
      body2: "0.75rem",
      button1: "0.875rem",
      button2: "0.75rem",
      caption: "0.625rem",
    },
    zIndex: zIndex,
  },
  plugins: [],
};
