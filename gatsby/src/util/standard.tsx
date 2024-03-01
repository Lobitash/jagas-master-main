import styled from "styled-components";
import { Color, colors, colorsRGB } from "./constants";
import {
  AlignItems,
  AlignSelf,
  Dimensions,
  FlexDirection,
  FontFam,
  JustifyContent,
  Overflow,
  PDisplayType,
  FlexWrap,
  Cursor,
  FontWeight,
  WhiteSpace,
} from "./types";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT } from "@util/constants";
import { Select } from "antd";

export const Overlay = styled.div<{ zIndex?: number }>`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: ${(props) => props.zIndex ?? 3};
  left: 0;
  top: 0;
  background-color: ${colorsRGB.black(0.5)};
  overflow: hidden;
  transition: 0.5s;
`;

export const P = styled.p<{
  color?: Color;
  fontSize?: number;
  fontFamily?: FontFam;
  noMargin?: boolean;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
  lineHeight?: number;
  underlined?: boolean;
  fontWeight?: FontWeight;
  opacity?: number;
  isMobileStyling?: boolean;
  display?: PDisplayType;
  whiteSpace?: WhiteSpace;
  cursor?: Cursor;
  padding?: string;
  textAlign?: string;
}>`
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  color: ${(props) => (props.color ? colors[props.color] : colors.darkGreen)};
  font-family: ${(props) => props.fontFamily ?? "regular"};
  font-size: ${(props) => props.fontSize ?? 14}px;
  line-height: ${(props) => props.lineHeight ?? 18}px;
  margin-top: ${(props) => props.marginTop ?? 20}px;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ noMargin }) => noMargin && `margin: 0px;`}
  ${({ width }) => width && `width: ${width}px;`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ display }) => display && `display: ${display};`}
  text-decoration-line: ${(props) => (props.underlined ? "underline" : "none")};
  background-color: transparent;
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}

  ${({ isMobileStyling }) =>
    isMobileStyling &&
    `@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
      width: 80%;
      text-align: center;
      margin: auto;
  }`}
`;

export const A = styled.a<{
  color?: Color;
  underlined?: boolean;
  bold?: boolean;
  hoverColor?: Color;
}>`
  color: white;
  color: ${(props) => props.color && colors[props.color]};
  font-family: "regular";
  ${({ underlined }) =>
    underlined ? "text-decoration: underline;" : "text-decoration: none;"}

  ${({ bold }) => bold && "font-weight:500;"}
  &:hover {
    color: #555252;
    cursor: pointer;
  }
  ${({ hoverColor }) =>
    hoverColor && 
    `&:hover {
      color: ${colors[hoverColor]};
    }`
  }
    
`;

export const H1 = styled.h1<{
  fontFamily?: FontFam;
  noMargin?: boolean;
  fontWeight?: string;
  fontSize?: number;
}>`
  ${({ noMargin }) => noMargin && `margin: 0px;`}
  color: ${colors.darkGreen};
  font-family: ${(props) => props.fontFamily ?? "regular"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
`;

export const H2 = styled.h2<{
  fontFamily?: FontFam;
  width?: number;
  fontWeight?: string;
  fontSize?: number;
}>`
  color: ${colors.darkGreen};
  font-family: ${(props) => props.fontFamily ?? "regular"};
  ${({ width }) => width && `width: ${width}px;`}
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  white-space: initial;
`;

export const H3 = styled.h3<{ fontFamily?: FontFam }>`
  color: ${colors.darkGreen};
  font-family: ${(props) => props.fontFamily ?? "regular"};
  font-weight: 400;
  margin: 0px;
  line-height: 20px;
`;

export const VerticalSeparator = styled.div<{
  color?: Color;
  dimensions?: Dimensions;
  opacity?: number;
  shouldShowMobile?: boolean;
  fullHeight?: boolean;
}>`
  border-left: 1px solid
    ${(props) => (props.color ? colors[props.color] : colors.darkGreen)};
  height: ${(props) =>
    props.dimensions?.height ?? props.fullHeight ? undefined : `85px`};
  ${({ opacity }) => opacity && `opacity: ${opacity};`}

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    ${({ shouldShowMobile }) =>
    shouldShowMobile ? "display: block;" : "display: none;"}
  }
`;

export const Separator = styled.div<{
  color?: Color;
  dimensions?: Dimensions;
  opacity?: number;
  thickness?: number;
  shouldHideDesktop?: boolean;
  marginBottom?: number;
  width?: string;
}>`
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom}px;` : `margin-bottom: 10px`};
  border-bottom: ${(props) => props.thickness ?? 2}px solid
    ${(props) => (props.color ? colors[props.color] : colors.darkGreen)};
  ${({ dimensions }) =>
    dimensions && dimensions.width && `width: ${dimensions.width ?? "100px"};`}
  height: ${(props) => props.dimensions?.height ?? `20px`};
  ${({ opacity }) => opacity && `opacity: ${opacity};`}

  ${({ width }) => width && `width: ${width};`}

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    ${({ shouldHideDesktop }) => shouldHideDesktop && `display:block`}
  }
  @media only screen and (min-width: ${TABLET_BREAKPOINT}px) {
    ${({ shouldHideDesktop }) => shouldHideDesktop && `display:none`}
  }
`;

export const Container = styled.div<{
  dimensions?: Dimensions;
  backgroundColor?: Color;
  backgroundRGBColor?: string;
  flexDirection?: FlexDirection;
  flex?: number | string;
  flexGrow?: number;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  mobileAlignSelf?: AlignSelf;
  borderRadius?: number;
  overflow?: Overflow;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  img?: string;
  isMobileColumn?: boolean;
  mobilePadding?: string;
  mobileJustifyContent?: JustifyContent;
  mobileDimensions?: Dimensions;
  tabletDimensions?: Dimensions;
  width?: string;
  opacity?: number;
  margin?: string;
  cursor?: Cursor;
  reverseDirection?: boolean | null;
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  showOnTablet?: boolean;
}>`
  display: flex;
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ padding }) => padding && `padding: ${padding}px;`}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  ${({ paddingVertical }) =>
    paddingVertical &&
    `padding: 0px ${paddingVertical}px 0px ${paddingVertical}px;`}
    ${({ paddingHorizontal }) =>
    paddingHorizontal &&
    `padding: ${paddingHorizontal}px 0px ${paddingHorizontal}px 0px;`}
  ${({ dimensions }) =>
    dimensions && dimensions.height && `height: ${dimensions.height};`}
  ${({ dimensions }) =>
    dimensions && dimensions.width && `width: ${dimensions.width};`}
  ${({ img }) => img && `background-image: url(${img});`}
  flex-direction: ${(props) => props.flexDirection ?? "initial"};
  justify-content: ${(props) => props.justifyContent ?? "initial"};
  align-items: ${(props) => props.alignItems ?? "initial"};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${colors[backgroundColor]};`}
  ${({ backgroundRGBColor }) =>
    backgroundRGBColor && `background-color: ${backgroundRGBColor};`}
  align-self: ${(props) => props.alignSelf ?? "initial"};
  overflow: ${(props) => props.overflow ?? "initial"};
  border-radius: ${(props) => props.borderRadius ?? 0}px;
  background-size: cover;
  ${({ width }) => width && `width: ${width};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}

  ${({ reverseDirection }) =>
    reverseDirection && `flex-direction: row-reverse;`}
  ${({ showOnTablet }) => showOnTablet && `display: none;`}

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    ${({ isMobileColumn }) =>
    isMobileColumn &&
    `
      flex-direction: column;
      height: auto;
      align-items: center;
      width: 100%;
    `}
    justify-content: ${(props) => props.mobileJustifyContent ?? "initial"};

    ${({ mobilePadding }) => mobilePadding && `padding: ${mobilePadding}`}

    ${({ tabletDimensions }) =>
    tabletDimensions &&
    tabletDimensions.height &&
    `height: ${tabletDimensions.height};`}
  ${({ tabletDimensions }) =>
    tabletDimensions &&
    tabletDimensions.width &&
    `width: ${tabletDimensions.width};`}

      ${({ hideOnTablet }) => hideOnTablet && `display: none;`}
      ${({ showOnTablet }) => showOnTablet && `display: flex !important;`}
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    ${({ mobileDimensions }) =>
    mobileDimensions &&
    mobileDimensions.height &&
    `height: ${mobileDimensions.height};`}
    ${({ mobileDimensions }) =>
    mobileDimensions &&
    mobileDimensions.width &&
    `width: ${mobileDimensions.width};`}

    ${({ hideOnMobile }) => hideOnMobile && `display: none;`}
    ${({ mobileAlignSelf }) =>
    mobileAlignSelf && `align-self: ${mobileAlignSelf}`}
  }
`;

export const GridContainer = styled.div<{
  gridTemplateColumns?: string;
  width?: string;
  margin?: string;
  repeat?: number;
  mobileRepeat?: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.repeat ?? 4}, 1fr);

  ${({ width }) => width && `width: ${width};`}
  ${({ margin }) => margin && `margin: ${margin};`}

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(${(props) => props.mobileRepeat ?? 2}, 1fr);
  }
`;

export const Pill = styled(Container) <{ color?: Color; activeColor?: Color }>`
  padding: 5px 10px 5px 10px;
  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.lightBiege};
  border-radius: 40px;
  margin: 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.6;
  }
`;

export const TextButton = styled(P) <{
  color?: Color;
  hoverColor?: Color;
  underlined?: boolean;
  lineHeight?: number;
  margin?: string;
}>`
  line-height: ${(props) => props.lineHeight ?? 18}px;
  cursor: pointer;
  margin: 0;
  user-select: none;
  text-decoration-line: ${(props) => (props.underlined ? "underline" : "none")};
  color: ${colors.avocado};
  color: ${(props) => (props.color ? colors[props.color] : colors.avocado)};
  &:hover {
    color: ${(props) =>
    props.hoverColor ? colors[props.hoverColor] : colors.darkGreen};
  }
  ${({ margin }) => margin && `margin: ${margin};`}
`;

export const GiveMeSomeSpace = styled.div<{ space?: number }>`
  padding: ${(props) => props.space ?? 10}px;
`;

export const StyledSelect = styled(Select)`
  .ant-select-selector {
    background-color: ${colors.bizarre} !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 20px !important;
    color: ${colors.darkGreen} !important;
    padding: 4px 12px !important;
    width: 207px !important;
    height: 40px !important;
  }

  .ant-select-selection-placeholder {
    color: ${colors.darkGreen} !important;
  }
`;
