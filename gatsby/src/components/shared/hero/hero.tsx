import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { P, H1 } from "@util/standard";
import { MOBILE_BREAKPOINT } from "@util/constants";
import {
  HeroImageSlide,
  StyledCarousel,
  ImageWrapper,
  HeroWrapper,
  CarouselWrapper,
  TextWrapper,
  CarouselNav,
  NavSquare,
} from "./hero.styles";

interface Props {
  heroSlides: any;
  heroText: string;
  heroLink: any;
}

const MetricWrapper = styled.div`
  position: absolute;
  color: white;
  top: 52%;
  right: 20%;
  z-index: 1;
  height: 110px;
  border-right: 1px solid white;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    top: 65%;
  }
`;

const SlideTitle = styled(H1)`
  color: white;
  font-size: 30px;
  font-family: "bold";

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    line-height: 30px;
    width: 70%;
  }
`;

const SlideLink = styled(Link)`
  color: white;
  &:hover {
    color: white;
    opacity: 0.8;
  }
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Metric = styled(P)`
  display: inline-block;
  transform: translate(25px, -45px);
  font-weight: 700;
`;

const MetricSmall = styled(P)`
  display: inline-block;
  transform: translate(25px, -55px);
  font-weight: 700;
`;

const Hero = (props: Props) => {
  const { heroSlides, heroText, heroLink } = props;
  const [currentSlideIndex, updateSlideIndex] = useState(0);

  const carouselSlider = useRef(null);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: true,
    afterChange: () =>
      updateSlideIndex(
        Number(carouselSlider.current.innerSlider.state.currentSlide)
      ),
  };

  const paginate = (index) => {
    updateSlideIndex(index);
    carouselSlider.current.goTo(index);
  };

  return (
    <HeroWrapper>
      <CarouselWrapper>
        <TextWrapper>
          <SlideTitle>{heroText}</SlideTitle>
          <SlideLink to={heroLink.url}>{heroLink.linktext}</SlideLink>
        </TextWrapper>
        <StyledCarousel {...carouselSettings} ref={carouselSlider}>
          {heroSlides.map((slide) => {
            return (
              <ImageWrapper>
                <MetricWrapper>
                  <MetricSmall fontSize={14}>1/</MetricSmall>
                  <Metric fontSize={24}>04</Metric>
                </MetricWrapper>
                <HeroImageSlide fluid={slide.slideImage.asset.fluid} />
              </ImageWrapper>
            );
          })}
        </StyledCarousel>
        <CarouselNav>
          {heroSlides.map((_slide, index) => {
            return (
              <NavSquare
                key={index}
                onClick={() => paginate(index)}
                focussed={index === currentSlideIndex}
              />
            );
          })}
        </CarouselNav>
      </CarouselWrapper>
    </HeroWrapper>
  );
};

export default Hero;
