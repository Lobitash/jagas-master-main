import { assets } from "./constants";

import {SanityImage} from '../../../gatsby'
import { ReactNode } from "react";

export type Dimensions = {
  width?: string;
  height?: string;
};
export type FontFam = "bold" | "regular" | 'light';
export type FontWeight = "bold" | "normal" | "light" | number;
export type FlexDirection =
  | "row"
  | "column"
  | "row-reverse"
  | "column-reverse"
  | "initial";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse" | "initial";
export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "space-between"
  | "initial";
export type AlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "initial";
export type AlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "initial";
export type Overflow = "auto" | "scroll" | "visible" | "hidden" | "initial";
export type ButtonTheme = "base" | "inverse" | "inversewhite" | "unstyled";

export type IconButtonType = keyof typeof assets;

export type PDisplayType = "inline" | "block" | "flex" | "initial";
export type Cursor = "grab" | "pointer" | "auto" | "initial";
export type WhiteSpace =
  | "initial"
  | "normal"
  | "nowrap"
  | "pre-line"
  | "pre-wrap";

export interface Link {
  linkText: string | null | undefined;
  url?: string | null | undefined;
  // internalLink: boolean;
  // newWindow: boolean;
}

export interface Testimonial {
  testimonialStatement: string;
}

export interface NewsArticle {
  node: ReactNode;
  articleDate: string;
  articleTitle: string;
  articleSubText: string;
  articleImage: SanityImage;
}