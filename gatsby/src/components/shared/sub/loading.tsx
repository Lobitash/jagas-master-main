import React from "react";
import styled from "styled-components";

import { Color, colors } from "@util/constants";
import { Dimensions } from "@util/types";

const Loader = styled.div<{
  baseColor?: Color;
  color?: Color;
  dimensions?: Dimensions;
}>`
  border: 2px solid
    ${props => (props.baseColor ? colors[props.baseColor] : colors.white)};
  border-radius: 50%;
  border-top: 3.28px solid
    ${props => (props.color ? colors[props.color] : colors.transparent)};
  width: ${props =>
    props.dimensions && props.dimensions.width ? props.dimensions.width : 16}px;
  height: ${props =>
    props.dimensions && props.dimensions.height
      ? props.dimensions.height
      : 16}px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface Props {
  baseColor?: Color;
  color?: Color;
  dimensions?: Dimensions;
}

const Loading = (props: Props) => {
  return (
    <Loader
      color={props.color}
      baseColor={props.baseColor}
      dimensions={props.dimensions}
    />
  );
};

export default Loading;
