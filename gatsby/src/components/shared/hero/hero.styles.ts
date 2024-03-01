import styled from "styled-components";
import Img from "gatsby-image";
import { Carousel } from "antd";

import { MOBILE_BREAKPOINT } from "@util/constants";

export const HeroImageSlide = styled(Img)`
  width: 100%;
  height: 100%;
  filter: brightness(0.5);
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div<{
  mobileHeight?: string | undefined;
  height?: string | undefined;
}>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height ?? "65vh"};
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    eight: ${(props) => props.mobileHeight ?? "80vh"};
  }
`;

export const HeroWrapper = styled.div<{
  mobileHeight?: string | undefined;
  height?: string | undefined;
}>`
  width: 100%;
  height: ${(props) => props.height ?? "65vh"};

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: ${(props) => props.mobileHeight ?? "80vh"};
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 43%;
  left: 20%;
  z-index: 1;
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: white;
  }
`;

export const CarouselNav = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 10%;
  bottom: 6%;
  left: 50px;
  z-index: 1;
  grid-gap: 15px;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    left: 20px;
  }
`;

export const NavSquare = styled.div<{ focussed: boolean }>`
  width: 10px;
  height: 10px;
  border: 1px solid white;
  cursor: pointer;
  ${({ focussed }) => focussed && `background-color: white;`}
`;
