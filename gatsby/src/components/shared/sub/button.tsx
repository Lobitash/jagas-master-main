import React from "react";
import styled from "styled-components";

import { ButtonTheme, Dimensions } from "@util/types";
import { BUTTON_HEIGHT, themeStyle, MOBILE_BREAKPOINT } from "@util/constants";
import Loading from "./loading";
import { Container, GiveMeSomeSpace, P } from "@util/standard";

const StyledButton = styled.button<{
  theme: ButtonTheme;
  dimensions?: Dimensions;
  mobileDimensions?: Dimensions;
  disableHover?: boolean;
  mobileMargin?: string;
  margin?: string;
  minHeight?: number;
  padding?: string;
  borderRadius?: string;
}>`
  text-align: center;
  cursor: pointer;
  user-select: none;
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  width: ${props => props.dimensions?.width};
  height: ${props => props.dimensions?.height ?? `${BUTTON_HEIGHT}px`};
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.border};
  background: ${props => props.theme.bg};
  border-radius: ${props => props.borderRadius ?? "60px"};
  font-family: "roboto";
  &:focus {
    outline: 0;
  }
  ${({ disableHover, theme }) =>
    !disableHover &&
    `&:hover {
    outline: 0;
    border: 0px;
    background: ${theme.hover};
    color: ${theme.hoverText};
  }`}

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    ${({ mobileDimensions }) => mobileDimensions && `width:${mobileDimensions}`}
    ${({ mobileMargin }) => mobileMargin && `margin: ${mobileMargin};`}
  }

  ${({ minHeight }) => minHeight && `min-height: ${minHeight}px;`}
`;

const LoadingContainer = styled(Container)`
  flex: 1;
  justify-content: center;
`;

interface Props {
  theme?: ButtonTheme;
  disabled?: boolean;
  className?: string;
  dimensions?: Dimensions;
  mobileDimensions?: Dimensions;
  minHeight?: number;
  text: string;
  margin?: string;
  padding?: string;
  disableHoverEffect?: boolean;
  mobileMargin?: string;
  onClick?: (args?: any) => void;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  borderRadius?: string;
}

const Button = ({
  theme = "base",
  disabled,
  dimensions,
  mobileDimensions,
  text,
  margin,
  disableHoverEffect,
  onClick,
  mobileMargin,
  loading,
  minHeight,
  padding,
  type,
  borderRadius,
}: Props) => {
  const Loader = () => (
    <LoadingContainer>
      <>
        <Loading />
        <GiveMeSomeSpace space={3} />
        <P noMargin color="white">
          Loading..
        </P>
      </>
    </LoadingContainer>
  );

  const handleOnClick = () => {
    if (loading) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      theme={themeStyle[theme]}
      dimensions={dimensions}
      disabled={disabled}
      onClick={handleOnClick}
      margin={margin}
      padding={padding}
      mobileDimensions={mobileDimensions}
      disableHover={loading || disableHoverEffect}
      mobileMargin={mobileMargin}
      minHeight={minHeight}
      type={type}
      borderRadius={borderRadius}
    >
      {loading ? <Loader /> : text}
    </StyledButton>
  );
};

export default Button;
