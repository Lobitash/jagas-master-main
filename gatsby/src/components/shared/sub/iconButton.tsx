import React from "react";
import styled from "styled-components";
import { FixedObject } from "gatsby-image";

import {
  assets,
  BUTTON_HEIGHT,
  Color,
  colors,
  colorsRGB,
  MOBILE_BREAKPOINT,
} from "@util/constants";
import { AssetsType } from "@util/types";
import { A, Container, P } from "@util/standard";
import { Maybe } from "../../../../graphql-types";
import { Image } from "@sub";

const Wrapper = styled(Container)<{
  color?: Color;
  isPlain?: boolean;
  hideOnDesktop?: boolean;
  leftRightMargin?: string;
}>`
  justify-content: center;
  align-items: center;
  height: ${props => (props.isPlain ? 20 : 40)}px;
  width: ${props => (props.isPlain ? 20 : 40)}px;
  margin: ${props => (props.isPlain ? 0 : 5)}px;
  background-color: ${props =>
    props.color ? colors[props.color] : colors.avocado};
  border-radius: 50%;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  cursor: pointer;
  user-select: none;
  margin-left: 5px;
  ${({ leftRightMargin }) =>
    leftRightMargin && `margin-left:${leftRightMargin}`}
  ${({ leftRightMargin }) =>
    leftRightMargin && `margin-right:${leftRightMargin}`}



  @media only screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    ${({ hideOnDesktop }) => hideOnDesktop && `display:none`}
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-left: 2px;
  }
`;

const TextButton = styled(Container)<{
  color?: Color;
  hoverEffect?: boolean;
}>`
  border-radius: 60px;
  padding: 0 30px 0 30px;
  align-items: center;
  box-shadow: 0 0 5px ${colorsRGB.black(0.2)};
  height: ${BUTTON_HEIGHT}px;
  width: 100%;
  background-color: ${props =>
    props.color ? colors[props.color] : colors.white};
  cursor: pointer;
  user-select: none;

  ${({ hoverEffect }) =>
    hoverEffect &&
    `
    transition: opacity 0.25s;
    &:hover {
      opacity 0.5;
      transition: opacity 0.25s;
    }
 `}
`;

interface Props {
  disabled?: boolean;
  className?: string;
  color?: Color;
  icon?: AssetsType;
  externalIcon?: Maybe<FixedObject>;
  onClick?: (arg?: any) => void;
  isPlain?: boolean;
  hideOnDesktop?: boolean;
  leftRightMargin?: string;
  text?: string;
  textColor?: Color;
  hoverEffect?: boolean;
  alt?: string;
  href?: string | null | undefined;
}

const IconButton = (props: Props) => {
  if (props.href && props.icon) {
    return (
      <A href={props.href}>
        <img
          src={assets[props.icon]}
          alt={props.alt ?? "icon-button"}
          width="22px"
          height="22px"
        />
      </A>
    );
  }

  if (props.text) {
    return (
      <TextButton
        hoverEffect={props.hoverEffect}
        onClick={props.onClick}
        color={props.color}
      >
        {props.icon && (
          <img
            src={assets[props.icon]}
            alt={props.alt}
            width="24px"
            height="22px"
          />
        )}
        <P noMargin color={props.textColor} style={{ paddingLeft: 20 }}>
          {props.text}
        </P>
      </TextButton>
    );
  }

  return (
    <Wrapper
      className={props.className}
      color={props.color}
      onClick={props.onClick}
      isPlain={props.isPlain}
      hideOnDesktop={props.hideOnDesktop}
    >
      {props.icon && (
        <img
          src={assets[props.icon]}
          alt={props.alt ?? "icon-button"}
          width="24px"
          height="22px"
        />
      )}
      {props.externalIcon && <Image fixed={props.externalIcon} />}
    </Wrapper>
  );
};

export default IconButton;
