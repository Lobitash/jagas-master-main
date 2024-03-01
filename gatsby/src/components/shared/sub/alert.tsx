import React, { ReactNode } from "react";
import { Alert as AntdAlert } from "antd";
import styled from "styled-components";

import { Color, colors, HEADER_HEIGHT } from "@util/constants";
import { Dimensions } from "@util/types";

const StyledAlert = styled(AntdAlert)<{
  color: Color;
  dimensions: Dimensions;
}>`
  width: ${props => props.dimensions.width};
  height: ${props => props.dimensions.height};
  background: ${props => colors[props.color]};
  border: ${props => colors[props.color]};
  margin-top: ${HEADER_HEIGHT + 40}px;
  border-radius: 15px 0 0 15px;
  .ant-alert-close-icon .anticon-close {
    padding-top: 10px;
    color: ${colors.white};
    &:hover {
      opacity: 0.5;
    }
  }
`;

interface Props {
  message: string | ReactNode;
  dimensions: Dimensions;
  color: Color;
  onClick?: () => void;
}

const Alert = (props: Props) => {
  return (
    <StyledAlert
      onClick={props.onClick}
      color={props.color}
      dimensions={props.dimensions}
      message={props.message}
      type="success"
      closable
    />
  );
};

export default Alert;
