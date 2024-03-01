import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import Img, { FluidObject } from "gatsby-image";
import { Carousel } from "antd";
import { H3 } from "../../util/standard";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  icons,
} from "../../util/constants";

interface Props {
  sliderContent?: Array<FluidObject>;
  sliderTitle?: string;
}

const CarouselWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 150px auto;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 85%;
    margin: 100px auto;
  }
`;

const ImageWrapper = styled.div`
  width: 156px;
  height: 92px;
  padding: 0 10px;
  img {
    object-fit: contain !important;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 100px;
  }
`;
const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

const Title = styled(H3)`
  font-size: 20px;
  font-family: "bold";
  margin-left: 10px;
  margin-bottom: 20px;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
`;

const NavArrowLeft = styled.img`
  position: absolute;
  top: 50%;
  left: -20px;
  cursor: pointer;
`;

const NavArrowRight = styled.img`
  position: absolute;
  top: 50%;
  right: -20px;
  cursor: pointer;
`;

function Slider(props: Props) {
  const { sliderContent, sliderTitle } = props;
  const carouselSlider = useRef(null);

  if (sliderContent == null) {
    return null;
  }

  const [windowWidth, setWindowWidth] = useState(0);

  const checkForMobileWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", checkForMobileWidth);
    } else {
      return;
    }
  });

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    draggable: true,
  };

  return (
    <CarouselWrapper>
      {sliderTitle && <Title>{sliderTitle.toUpperCase()}</Title>}
      <NavArrowLeft
        onClick={() => carouselSlider.current.prev()}
        src={icons.leftArrow}
      />
      <StyledCarousel
        {...carouselSettings}
        ref={carouselSlider}
        slidesToShow={
          windowWidth <= MOBILE_BREAKPOINT
            ? 2
            : windowWidth <= TABLET_BREAKPOINT
            ? 3
            : sliderContent.length < 8
            ? sliderContent.length
            : 8
        }
      >
        {sliderContent.map((slide) => {
          return (
            <ImageWrapper>
              <StyledImg fluid={slide.slideContent.asset.fluid} />
            </ImageWrapper>
          );
        })}
      </StyledCarousel>
      <NavArrowRight
        onClick={() => carouselSlider.current.next()}
        src={icons.rightArrow}
      />
    </CarouselWrapper>
  );
}

export default Slider;
