export const BUTTON_HEIGHT = 46;
export const HEADER_HEIGHT = 84;
export const STANDARD_SERVING_SIZE = 2;
export const SMALLER_MOBILE = 400;
export const MOBILE_BREAKPOINT = 600;
export const IPAD_BREAKPOINT = 768;
export const TABLET_BREAKPOINT = 1000;
export const IPAD_PRO_BREAKPOINT = 1025;
export const SMALL_LAPTOP_BREAKPOINT = 1280;
export const LAPTOP_BREAKPOINT = 1441;
export const TWENTY_INCH_SCREEN = 1600;
export const IMAC_BREAKPOINT = 1921;

export const colors = {
  green: "#00A032",
  darkBlue: "#3268a8",
  white: "#fff",
  black: "#000000",
  blue: "#004696",
  red: "#E61928",
  grey: "#B2B0B0",
  orange: "#d86310",
};

export const colorsRGB = {
  lightBlue: (opacity?: number) => `rgba(177, 204, 209, ${opacity ?? "0.5"})`,
  black: (opacity?: number) => `rgba(0, 0, 0, ${opacity ?? "0.2"})`,
  white: (opacity?: number) => `rgba(255, 255, 255, ${opacity ?? "0.3"})`,
  lightBlack: (opacity?: number) => `rgba(68, 68, 68, ${opacity ?? "0.4"})`,
  darkGreen: (opacity?: number) => `rgba(49, 74, 55, ${opacity ?? "0.2"})`,
  tan: (opacity?: number) => `rgba(201,165,132, ${opacity ?? "0.2"})`,
};

export type Color = keyof typeof colors;

export const icons = {
  hamburger: require("../../static/assets/icons/hamburger.svg"),
  cross: require("../../static/assets/icons/cross.svg"),
  submitArrow: require("../../static/assets/icons/submitArrow.svg"),
  submitArrowWide: require("../../static/assets/icons/submitArrowWide.svg"),
  submitArrowOrange: require("../../static/assets/icons/submitArrowOrange.svg"),
  upArrowOrange: require("../../static/assets/icons/upArrowOrange.svg"),
  downArrowOrange: require("../../static/assets/icons/downArrowOrange.svg"),
  leftArrow: require("../../static/assets/icons/leftArrow.svg"),
  rightArrow: require("../../static/assets/icons/rightArrow.svg"),
  search: require("../../static/assets/icons/search.svg"),
  facebook: require("../../static/assets/icons/facebook.png"),
  linkedin: require("../../static/assets/icons/linkedin.png"),
  twitter: require("../../static/assets/icons/twitter.png"),
};

export const pages = {
  home: "/",
  aboutUs: "/about-us",
  contactUs: "/contact-us",
  search: "/search",
  notFound: "/404",
};

export const assets = {};
