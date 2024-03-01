import React from "react";
import Img, { FixedObject, FluidObject } from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@util/constants";

const StyledImage = styled(Img)<{
  width?: string;
  mobileWidth?: string;
}>`
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    ${({ mobileWidth }) =>
      mobileWidth ? `width:${mobileWidth}` : "width:100%"}
  }
  @media only screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    ${({ width }) => (width ? `width:${width}` : "width: 100%;")}
  }
`;

interface Props {
  fixed?: FixedObject;
  fluid?: FluidObject;
  objectFit?: "contain" | "cover" | "fill" | "scale-down" | "none";
  minHeight?: string;
  isBackground?: boolean;
  backgroundStyle?: any;
  width?: string;
  mobileWidth?: string;
  altText?: string;
}

const Image = (props: Props) => {
  if (props.isBackground && props.fluid) {
    return (
      <BackgroundImage
        fluid={props.fluid}
        style={props.backgroundStyle}
        alt={props.altText ?? "background-image"}
      />
    );
  }

  if (props.fixed) {
    return (
      <Img
        fixed={props.fixed}
        imgStyle={{
          objectFit: props.objectFit ?? "none",
        }}
        alt={props.altText ?? "fixed-image"}
      />
    );
  }
  if (props.fluid) {
    const { minHeight } = props;
    return (
      <StyledImage
        //@ts-ignore
        fluid={props.fluid}
        imgStyle={{
          objectFit: props.objectFit ?? "initial",
        }}
        style={{ minHeight }}
        width={props.width}
        mobileWidth={props.mobileWidth}
        itemProp="image"
        alt={props.altText ?? "fluid-image"}
      />
    );
  }

  return null;
};

export default Image;
