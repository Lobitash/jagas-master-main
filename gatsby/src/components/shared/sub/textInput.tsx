import React from "react";
import styled from "styled-components";

import { Dimensions } from "@util/types";
import {
  colorsRGB,
  colors,
  BUTTON_HEIGHT,
  MOBILE_BREAKPOINT,
} from "@util/constants";

const StyledInput = styled.input<{
  dimensions?: Dimensions;
  margin?: string;
  fontSize?: number;
  mobileMargin?: string;
  hidden?: boolean;
}>`
  display: flex;
  flex: 1;
  margin: 10px;
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ mobileMargin }) =>
    mobileMargin &&
    ` @media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
    margin: ${mobileMargin};
  }`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px; `}
  ${({ dimensions }) => (dimensions ? `width: ${dimensions.width};` : "100%;")}
  ${({ hidden }) => hidden && `display: none;`}
  height: ${props => props.dimensions?.height ?? `${BUTTON_HEIGHT}px`};
  border-radius: 60px;
  border: 1px solid ${colorsRGB.darkGreen()};
  font-family: "roboto";
  padding-left: 20px;
  padding-right: 20px;
  color: ${colors.darkGreen};
  &:focus {
    outline: 0;
  }
  &::-webkit-input-placeholder {
    font-family: "roboto";
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
`;

const StyledTextArea = styled.textarea<{
  dimensions?: Dimensions;
  hidden?: boolean;
}>`
  display: flex;
  flex: 1;
  padding: 10px;
  ${({ dimensions }) => (dimensions ? `width: ${dimensions.width};` : "100%;")}
  ${({ hidden }) => hidden && `display: none;`}
  height: ${props => props.dimensions?.height ?? `${BUTTON_HEIGHT}px`};
  border-radius: 10px;
  border: 1px solid ${colorsRGB.darkGreen()};
  font-family: "roboto";
  padding-left: 20px;
  padding-right: 20px;
  color: ${colors.darkGreen};
  &:focus {
    outline: 0;
  }
  &::-webkit-input-placeholder {
    font-family: "roboto";
  }
`;

interface Props {
  dimensions?: Dimensions;
  mobileMargin?: string;
  margin?: string;
  fontSize?: number;
  placeholderText?: string;
  name?: string;
  onChange?: (arg?: any) => void;
  value?: string;
  isTextArea?: boolean;
  type?: string;
  required?: boolean;
  hidden?: boolean;
}

const TextInput = (props: Props) => {
  if (props.isTextArea) {
    return (
      <StyledTextArea
        name={props.name}
        placeholder={props.placeholderText}
        onChange={props.onChange}
        value={props.value}
        dimensions={props.dimensions}
        hidden={props.hidden}
      />
    );
  }

  return (
    <StyledInput
      required={props.required}
      name={props.name}
      fontSize={props.fontSize}
      margin={props.margin}
      mobileMargin={props.mobileMargin}
      placeholder={props.placeholderText}
      onChange={props.onChange}
      value={props.value}
      dimensions={props.dimensions}
      type={props.type}
      hidden={props.hidden}
    />
  );
};

export default TextInput;
